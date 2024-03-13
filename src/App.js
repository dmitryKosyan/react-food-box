import { Routes, Route } from "react-router-dom"
import React from "react";

import Header from './components/header/Header'
import Pizzas from './pages/Pizzas';
import Main from './pages/Main';
import './App.css';
import Foods from "./pages/Foods";
import Drinks from "./pages/Drinks";
import Coffe from "./pages/Coffe";
import Deserts from './pages/Deserts'
import Souses from "./pages/Souses";


function App() {

  const [indexActive, setIndexActive] = React.useState(0)

  return (
    <>

      <Header indexActive={indexActive} setIndexActive={setIndexActive} />
      <Routes>
        <Route path='/' element={<Main indexActive={indexActive} setIndexActive={setIndexActive} />} />
        <Route path="пицца" element={<Pizzas />} />
        <Route path="закуски" element={<Foods />} />
        <Route path="напитки" element={<Drinks />} />
        <Route path="кофе" element={<Coffe />} />
        <Route path="десерты" element={<Deserts />} />
        <Route path="соусы" element={<Souses />} />
      </Routes>


    </>
  );
}

export default App;
