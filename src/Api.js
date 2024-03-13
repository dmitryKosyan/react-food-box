import axios from 'axios'
const API_BASE_URL = ('https://c09d77b640e64327.mokky.dev')

export const getItems = async (params) => {
    const response = await axios.get(`${API_BASE_URL}/items`, { params, })
    return response.data
}

export const getFoods = async () => {
    const response = await axios.get(`${API_BASE_URL}/foods`)
    return response.data
}
export const getDrinks = async () => {
    const response = await axios.get(`${API_BASE_URL}/drinks`)
    return response.data
}
export const getCoffe = async () => {
    const response = await axios.get(`${API_BASE_URL}/coffes`)
    return response.data
}
export const getDeserts = async () => {
    const response = await axios.get(`${API_BASE_URL}/deserts`)
    return response.data
}
export const getSouses = async () => {
    const response = await axios.get(`${API_BASE_URL}/souses`)
    return response.data
}