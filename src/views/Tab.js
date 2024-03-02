
import { Button, Card, CardContent } from '@mui/material';

const Tab = ({ tab, isActive, onClick, onClose }) => {
  return (
    <Card
      variant={isActive ? 'outlined' : 'elevation'}
      style={isActive ? { backgroundColor: '#40679E', borderBottomWidth: '2px', borderBottomColor: '#B4B4B8', marginRight: '8px' } : { backgroundColor: '#F6F5F5', borderBottomWidth: '2px', borderBottomColor: '#C7C8CC', marginRight: '8px' }}
      onClick={() => onClick(tab)} sx={{ width: '150px', cursor: 'pointer', height: '50px' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{tab.name}</span>
        <button variant="outlined" className="ml-2 text-white px-2 py-0 rounded-md mt-[-10px]" onClick={(e) => { e.stopPropagation(); onClose(tab); }}> X </button>
      </CardContent>
    </Card>
  );
};

export default Tab;


