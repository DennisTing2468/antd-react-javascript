import {createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit";
import usersService from "./usersService";

const initialState = {
	usersList: {
		data: [],
		isError: false,
		message: '',
		isLoading: false
	}
}

export const getUsersList = createAsyncThunk(
	'users/listing',
	async (requestData, thunkAPI) => {
		try {
			const res = await usersService.getUsersList()
			return res

		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)
export const createUsers = createAsyncThunk(
	'users/create',
	async (requestData, thunkAPI) => {
		try {
			const res = await usersService.createUsers(requestData)
			return res

		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const usersSlice = createSlice({
	name: 'users-slice',
	initialState,
	reducers: {
		reset: (state) => initialState,
		removeUser: (state, action) => {
			state.usersList.data.splice(action.payload, 1);
		},
	
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsersList.pending, (state) => {
				state.usersList.isLoading = true
			})
			.addCase(getUsersList.fulfilled, (state, action) => {
				state.usersList.isLoading = false
				state.usersList.data = action.payload
			})
			.addCase(getUsersList.rejected, (state, action) => {
				state.usersList.isLoading = false
				state.usersList.isError = true
				state.usersList.message = action.payload
			});
		builder
		.addCase(createUsers.pending, (state) => {
			state.usersList.isLoading = true
		})
		.addCase(createUsers.fulfilled, (state, action) => {
			state.usersList.isLoading = false
			state.usersList.data = action.payload || "Create Successfully"
		})
		.addCase(createUsers.rejected, (state, action) => {
			state.usersList.isLoading = false
			state.usersList.isError = true
			state.usersList.message = action.payload
		});
		
	},
})
export const { reset,removeUser,updateUser } = usersSlice.actions;
export default usersSlice.reducer;