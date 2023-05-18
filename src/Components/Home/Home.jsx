import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";
import TabsComponent from "../TabsComponent/TabsComponent";


const Home = () => {
  const data=useLoaderData();
  console.log(data);
    return (
        <div>
          <TabsComponent></TabsComponent>
          {
            data?.map(d=><p>{d._id}</p>)
          }
          <h1>This is home</h1>
            
        </div>
    );
};

export default Home;