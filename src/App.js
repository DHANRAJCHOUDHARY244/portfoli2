import React, { Suspense, useState, useEffect } from 'react';
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

const MainPage = React.lazy(() => import('./components/MainPage'));

function App() {
  const { scrollYProgress } = useScroll();
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openMenu = () => {
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };



  return (
    <div className="#">
      <VideoComp />
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <motion.div className='side-progress-bar' style={{ scaleX: scrollYProgress }} />
      {loading && <Loader />}
      {!loading && (
        <>
          <MenuIcon Open={openMenu} />
          <SettingIco />
          <ResponsiveSideBarMenu menuStatus={isActive} Close={closeMenu} />
          <ScrollNav />
          <MainWrapper>
            <LeftSidebar />
            <ContactPopup />
            <Suspense fallback={<Loader />}>
              <MainPage />
            </Suspense>
           
          </MainWrapper>
        </>
      )}
    </div>
  );
}

export default App;
