import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProductInfo from './components/Shop/ProductInfo'
import Checkout from './components/Checkout/Checkout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadThemeFromStorage } from './redux/slices/Themeslice'

import logo_w from './assets/images/N-Bikes-logo.png'
import logo_b from './assets/images/N-bikes-logo-b.png'

function App() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(loadThemeFromStorage());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  const catalogarr_b = [
    {
      imgsrc: "./src/assets/images/menu imgs/list.svg",
      cap: 'All Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/mountain.svg",
      cap: 'Mountain Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/city.svg",
      cap: 'City Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/battery.svg",
      cap: 'E-Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/foldable bike.png",
      cap: 'Folding Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/k-bike.png",
      cap: 'Kids Bikes'

    }
  ]
  const catalogarr_w = [
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/list.png",
      cap: 'All Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/mountain.png",
      cap: 'Mountain Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/city.png",
      cap: 'City Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/battery.png",
      cap: 'E-Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/foldable bike.png",
      cap: 'Folding Bikes'

    },
    {
      imgsrc: "./src/assets/images/menu imgs/white-color/k-bike.png",
      cap: 'Kids Bikes'

    }
  ]
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar dark={isDarkMode} logo={isDarkMode ? logo_w : logo_b} visible={visible} setVisible={setVisible} />} >
          <Route index element={<Home setVisible={setVisible} />} />
          <Route path="shop" element={<Shop catalog={isDarkMode ? catalogarr_w : catalogarr_b} />} />
          <Route path='about' element={<About isdark={isDarkMode} />} />
          <Route path='contact' element={<Contact />} />
          <Route path='productinfo' element={<ProductInfo />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
