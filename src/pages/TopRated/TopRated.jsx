import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TopRated = () => {
    // const {data : services = []} = useQuery({
    //     queryKey: ['topRated'],
    //     queryFn: async () => {
    //         const res = await useAxiosSecure.get('/services/topRated');
    //         return res.data;
    //     }
    // })
    return (
        <div className="min-h-[calc(100vh-260.8px)]">
            <h1>Top Rated</h1>
        </div>
    );
};

export default TopRated;