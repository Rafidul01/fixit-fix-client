import { ClimbingBoxLoader } from "react-spinners";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="h-96">
              <h1 >this is home</h1>  
            </div>
            <div className="h-96 flex justify-center items-center mt-28">
            <ClimbingBoxLoader color="#74c138" />  
            </div>
            <div className="h-96">
              <h1 >this is home</h1>  
            </div>
            <div className="h-96">
              <h1 >this is home</h1>  
            </div>
            
        </div>
    );
};

export default Home;