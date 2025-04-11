import React, {useEffect, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {splashScreen} from "../../portfolio";
import SplashScreen from "../splashScreen/SplashScreen";
import {StyleProvider} from "../../contexts/StyleContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import {Outlet} from "react-router-dom";

const NavLayout = () => {
  const [isDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  return (
    <div className={`min-h-screen ${isDark ? "dark-mode" : ""}`}>
      <StyleProvider value={{isDark: isDark}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main className="w-full min-h-screen p-4">
              <Outlet />
            </main>
            <ScrollToTopButton />
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default NavLayout;
