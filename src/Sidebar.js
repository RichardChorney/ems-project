import React, {useState} from "react";
import "./Sidebar.css";
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarOption from "./SidebarOption";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import CreateIcon from '@material-ui/icons/Create';
import Modal from './Modal';

function Sidebar() {
  const [openSettings, setOpenSettings] = useState(false);

  const showModal = () => {
    setOpenSettings(prev => !prev)
  }

  // on click it's going to open the page 
  return (
    <div className="sidebar">
      <SettingsIcon className="settings-icon" 
      onClick={showModal}
      />
 
       <Modal showModal={openSettings} 
       setShowModal={setOpenSettings}
       />
    </div>
  );
}

export default Sidebar;