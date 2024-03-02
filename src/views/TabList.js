import Tab from './Tab';

const TabList = ({ tabs, activeTab, onClickTab, onCloseTab }) => {
  return (
    <div className="tab-list" style={{ borderTop: '1px solid #ccc', padding: '10px', display: 'flex', flexWrap: 'wrap' }}>
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} isActive={tab === activeTab} onClick={onClickTab} onClose={onCloseTab} />
      ))}
    </div>
  );
};

export default TabList;
