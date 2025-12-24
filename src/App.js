import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import Home from "./Components/Pages/Home/Home";
import ScrollToTop from "./Components/ScrollToTop";
import KitchenPage from "./Components/Pages/Kitchens/KitchenPage";
import Bedrooms from "./Components/Pages/Bedrooms/Bedrooms";
import War from "./Components/Pages/War/War";
import ContactPage from "./Components/Pages/Contact/ContactPage";
import MWalls from "./Components/Pages/MWalls/MWalls";
import WebsitePaused from "./Components/Error"; // your paused page
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  const [isLive, setIsLive] = useState(true);
  const [checking, setChecking] = useState(true);

  const checkStatus = async () => {
    try {
      const res = await axios.post(
        "https://admin.litwebs.co.uk/api/websites/status",
        { url: "https://oakforestofyorkshire.com" }
      );
      return res.data?.data?.status === "live";
    } catch (e) {
      return false; // or true if you want fail-open
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      const live = await checkStatus();
      if (mounted) {
        setIsLive(live);
        setChecking(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {checking ? null : (
        <>
          {isLive ? (
            <>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/kitchens' element={<KitchenPage />} />
                <Route path='/bedrooms' element={<Bedrooms />} />
                <Route path='/wardrobes' element={<War />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/media-walls' element={<MWalls />} />
                <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>

              <div className='whats-app'>
                <a
                  href='https://api.whatsapp.com/send?phone=447739034893'
                  target='_blank'
                  rel='noreferrer'>
                  <IoLogoWhatsapp size={70} className='whats-app-icon' />
                </a>
              </div>
            </>
          ) : (
            <Routes>
              {/* show paused for ANY route */}
              <Route path='*' element={<WebsitePaused />} />
            </Routes>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
