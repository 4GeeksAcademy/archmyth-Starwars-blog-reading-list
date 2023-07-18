import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/Home";
import { Character } from "./views/Character";
import { Planet } from "./views/Planet";
import { Vehicle } from "./views/Vehicle";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import  FavoritesContext  from "./views/FavoritesContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/favorite" element={<FavoritesContext />} />
            <Route path="/character/:characterId" element={<Character />} />
            <Route path="/planet/:planetId" element={<Planet />} />
            <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);