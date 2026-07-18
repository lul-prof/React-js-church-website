import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
import Welcome from "./components/WelcomeComponents/WelcomeComponents";
import Quote from "./components/QuoteComponent/QuoteComponent";
import Workforce from "./components/WorkforceComponent/WorkforceComponent";
import ContactsComponent from "./components/ContactsComponent/ContactsComponent";
import {Toaster} from 'react-hot-toast'
import Scroll from "./components/ScrollComponent/ScrollComponent";
import JoinPage from "./pages/JoinPage/JoinPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarComponent />
      <Toaster/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Scroll />
                <Header/>
                <Welcome />
                <Quote />
                <Workforce />
                <ContactsComponent />
              </>
            }
          ></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/join" element={<JoinPage/>}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
