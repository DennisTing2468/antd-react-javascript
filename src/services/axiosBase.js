import axios from 'axios';

export const masterSetupAxios = axios.create({
	baseURL: process.env.REACT_APP_MASTER_SETUP_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
})

export const cepAxios = axios.create({
	baseURL: process.env.REACT_APP_DEALER_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
})

export const dealerAxios = axios.create({
	baseURL: process.env.REACT_APP_CEP_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	}
})

export const hsAxios = axios.create({
	baseURL: 'http://localhost:8089/api/v1',
})