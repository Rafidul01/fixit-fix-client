import axios from "axios";
//https://fixit-fix-server.vercel.app
const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;