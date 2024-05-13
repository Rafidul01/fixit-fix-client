import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ViewDetails = () => {
    const [views, setViews] = useState(0);
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const {data:service} = useQuery({
        queryKey: ['service', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/services/${id}`)
            setViews(parseInt(res.data.views)+1)
            return res.data
        }
    })

    useEffect(() => {
        axiosSecure.patch(`/service/${id}?views=${views}`)
        .then(res => console.log(res.data))
    }, [ views, id , axiosSecure])

    return (
        <div>
            <h1>View Details of {service?.name}</h1>
            <h1>{views}</h1>
            
        </div>
    );
};

export default ViewDetails;