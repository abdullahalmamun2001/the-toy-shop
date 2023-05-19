import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsComponent = ({ d }) => {
  const { _id, name, picture } = d;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={picture} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{_id}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;