import axios from "axios";

const instance = axios.create({
    baseURL: "https://data-git-main-thandinhcong.vercel.app/",
})
export default instance;