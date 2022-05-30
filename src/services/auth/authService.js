import {hsAxios} from "../axiosBase";

const login = async (requestData) => {
	const { username, password } = requestData;
	const res = await hsAxios.post("/users", {
		username,
		password
	})
	return res.data;
}

const authService = {
	login
}

export default authService