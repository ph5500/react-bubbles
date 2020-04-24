import axios from 'axios';

export const axiosWithAuth = () => {
    // returns an "instance" of axios, with preconfigured configs
    return axios.create({
        headers: {
            Authorization: localStorage.getItem("token")
        },
        baseURL: 'http://localhost:5000'
    });

};

