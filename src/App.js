/* eslint-disable no-mixed-operators */
import './App.css';
import React, { useState } from 'react';
import TabList from './views/TabList';
import TabInput from './views/TabInput';
import Tab from './models/Tab';
import { Button } from '@mui/material';
import ContentView from './views/ContentView';

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [contents, setContents] = useState({});
  const [textFieldContent, setTextFieldContent] = useState('');
  const [urlContent, setURLContent] = useState('');



  const addTab = () => {
    const newTab = new Tab(Date.now(), 'New Tab', '');
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
    setContents(prevContents => ({
      ...prevContents,
      [newTab.id]: ''
    }));
    setTextFieldContent('');
  };

  const closeTab = (tab) => {
    setTabs(tabs.filter(t => t !== tab));
    setActiveTab(null);
    setContents(prevContents => {
      const updatedContents = { ...prevContents };
      delete updatedContents[tab.id];
      return updatedContents;
    });
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSave = () => {
    setActiveTab({ ...activeTab, content: textFieldContent });
    setURLContent(textFieldContent);
  };


  const handleContentSubmit = (content, urlContent) => {

    handleSave();
    setContents(prevContents => ({
      ...prevContents,
      [activeTab.id]: content
    }));
    setTextFieldContent(content);
    setURLContent(urlContent);
  };

  return (
    <div className="main-container" style={{ border: '1px solid #ccc', padding: '40px' }}>
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-">
          <h1 className="text-xl font-bold">Tabs</h1>
          <Button onClick={addTab} className="bg-red-500 text-white px-3 py-1 rounded-md">+ Add</Button>
        </div>
        <TabList tabs={tabs} activeTab={activeTab} onClickTab={switchTab} onCloseTab={closeTab} />
        {activeTab && !contents[activeTab.id] && <TabInput onSubmit={handleContentSubmit} />}
        {/* {activeTab && contents[activeTab.id] || textFieldContent && <ContentView content={content} />} */}
        {/* {activeTab && (contents[activeTab.id] || textFieldContent) && <ContentView content={contents[activeTab.id] || textFieldContent} />} */}
        {activeTab && (contents[activeTab.id] || textFieldContent) && <ContentView content={contents[activeTab.id] || textFieldContent} urlContent={urlContent} />}
      </div>
    </div>
  );
};

export default App;

