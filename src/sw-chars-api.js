import axios from "axios";

//axios.defaults.withCredentials = true // just in case someone uses `axios` directly


const sWAPI = axios.create({
    baseURL:"https://profs-star-wars.herokuapp.com/"
});

export default sWAPI;