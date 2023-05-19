import { useLoaderData } from "react-router-dom";
import TabsComponent from "../TabsComponent/TabsComponent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";


const Home = () => {
  const [category,setCategory]=useState([])
  const data = useLoaderData();
  console.log(data);
  const handleTab=(category)=>{
    fetch(`http://localhost:5000/toy/${category}`)
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


      <h1>This is home</h1>

    </div>
  );
};

export default Home;