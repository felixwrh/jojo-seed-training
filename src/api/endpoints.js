const BASE_URL = "https://reqres.in/api"


export const ENDPOINT = {
    LIST_USERS: (pageNo) => `${BASE_URL}/users?page=${pageNo}`,
    SINGLE_USER: (id) => `${BASE_URL}/users/${id}`,
    CREATE: `${BASE_URL}/users`,
    REGISTER: `${BASE_URL}/register`,
    LOGIN: `${BASE_URL}/login`,
}


