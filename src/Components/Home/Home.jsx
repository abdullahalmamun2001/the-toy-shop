import { useLoaderData } from "react-router-dom";
import TabsComponent from "../TabsComponent/TabsComponent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Banner from "../Banner/Banner";


const Home = () => {
  const [category,setCategory]=useState([])
  const data = useLoaderData();
  // console.log(data);
  const handleTab=(category)=>{
    fetch(`https://assignment-11-server-data.vercel.app/toy/${category}`)
    .then(res=>res.json())
    .then(data=>setCategory(data))
  }
  return (

    <div>
      <Tabs>
        <TabList>
          <Tab onClick={()=>{handleTab("MicroBus")}}><p>MicroBus</p></Tab>
          <Tab onClick={()=>{handleTab('PrivetCar')}}><p>PrivetCar</p></Tab>
          <Tab onClick={()=>{handleTab('PoliceCar')}}><p>PoliceCar</p></Tab>

        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3">
          {
            category?.map(d => <TabsComponent key={d._id} d={d}></TabsComponent>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3">
          {
            category?.map(d => <TabsComponent key={d._id} d={d}></TabsComponent>)
          }
          </div>
        </TabPanel>
        <TabPanel>
         <div  className="grid grid-cols-3">
         {
            category?.map(d => <TabsComponent key={d._id} d={d}></TabsComponent>)
          }
         </div>
        </TabPanel>
        
      </Tabs>


      <Banner></Banner>

    </div>
  );
};

export default Home;