import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Content 1</h2>
          <p>This is the content of tab 1.</p>
        </TabPanel>

        <TabPanel>
          <h2>Content 2</h2>
          <p>This is the content of tab 2.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
