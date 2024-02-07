import MainPage from './components/MainPage'
import './App.css';

import VideoComp from './components/VideoComp/VideoComp';
import Loader from './components/Loader/Loader';
import MenuIcon from './components/HeaderComp/Menu/MenuIcon';
import SettingIco from './components/HeaderComp/Setting/SettingIco';
import ResponsiveSideBarMenu from './components/HeaderComp/Menu/ResponsiveSideBarMenu';
import ScrollNav from './components/HeaderComp/Menu/ScrollNav';
import MainWrapper from './components/MainWrapper';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ContactPopup from './components/LeftSidebar/ContactPopup';

function App() {
  return (
    <div className="#">
      <VideoComp/>
      {/* <Loader/> */} 
      <MenuIcon/>
      <SettingIco />
      <ResponsiveSideBarMenu/>
      <ScrollNav/>
      <MainWrapper >
        <LeftSidebar/>
        <ContactPopup/>
        <MainPage/>
      </MainWrapper>
    </div>
  );
}

export default App;
