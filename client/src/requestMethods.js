import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjBkYzkzNjllYWU0Y2Q5NDZlOTg1MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTU3Mzk3NDgsImV4cCI6MTY5NTk5ODk0OH0.ifjObB5qkuro9aYjuxTi6K_GEfT2VuiQVeTc4SK8pMo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})