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
import { useScroll, motion, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="#">
      <VideoComp />
      <motion.div
        className='progress-bar'
        style={{
          scaleX: scrollYProgress
        }}
      />
      <motion.div
        className='side-progress-bar'
        style={{
          scaleX: scrollYProgress
        }}
      />
      {/* <Loader/> */}
      <MenuIcon />
      <SettingIco />
      <ResponsiveSideBarMenu />
      <ScrollNav />
      <MainWrapper >
        <LeftSidebar />
        <ContactPopup />
        <MainPage />
      </MainWrapper>
    </div>
  );
}

export default App;
