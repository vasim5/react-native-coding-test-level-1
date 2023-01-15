import axios from "axios";

export const publicAxios = axios.create({});

const successListener = (response) => {
    return response;
}

const errorListener = (error) => {
    return error;
}

publicAxios.interceptors.response.use(
    successListener,
    errorListener
);