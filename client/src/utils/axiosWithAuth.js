import axios from 'axios';

export const axiosWithAuth = () => {
    // returns an "instance" of axios, with preconfigured configs
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: localStorage.getItem("token")
        }

    });

};

