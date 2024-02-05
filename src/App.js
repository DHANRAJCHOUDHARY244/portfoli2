import logo from './logo.svg';
import './App.css';
import VideoComp from './components/VideoComp/VideoComp';
import Loader from './components/Loader/Loader';
import MenuIcon from './components/HeaderComp/Menu/MenuIcon';
import SettingIco from './components/HeaderComp/Setting/SettingIco';

function App() {
  return (
    <div className="#">
      <VideoComp/>
      <Loader/>
      <MenuIcon/>
      <SettingIco />
    </div>
  );
}

export default App;
