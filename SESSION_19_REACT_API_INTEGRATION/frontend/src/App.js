import './App.css';
import { BrowserRouter, Route, Routes, useNavigation } from "react-router-dom"

import ContactForm from "./pages/ContactForm";
import HomePage from "./pages/HomePage"

function App() {



  return (

    <div>



      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='' />
          <Route element={<ContactForm />} path='contact' />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
