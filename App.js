import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Holidays from "./pages/Holidays";
import InternationalPackages from "./pages/InternationalPackages";
import DomesticPackages from "./pages/DomesticPackages";
import Contact from "./pages/Contact";
import MalaysiaTourPackage from "./packages/MalaysiaTourPackage";
import ThailandTourPackage from "./packages/ThailandTourPackage";
import MaldivesTourPackage from "./packages/MaldivesTourPackage";
import SrilankaTourPackage from "./packages/SrilankaTourPackage";
import GoaTourPackage from "./packages/GoaTourPackage";
import KeralaTourPackage from "./packages/KeralaTourPackage";
import CoorgTourPackage from "./packages/CoorgTourPackage";
import AndamanTourPackage from "./packages/AndamanTourPackage";
import BaliTourPackage from "./packages/BaliTourPackage";
import SingaporeTourPackage from "./packages/SingaporeTourPackage";
import ShiradiTourPackage from "./packages/ShiradiTourPackage";
import AzerbaijanTourPackage from "./packages/AzerbaijanTourPackage";
import PhilippinesTourPackage from "./packages/PhilippinesTourPackage";
import GeorgiaTourPackage from "./packages/GeorgiaTourPackage";
import KashmirTourPackage from "./packages/KashmirTourPackage";
import ManaliTourPackage from "./packages/ManaliTourPackage";
import CordeliaCruisePackage from "./packages/CordeliaCruisePackage";
import GentingDreamCruisePackage from "./packages/GentingDreamCruisePackage";
import DisneyCruisePackage from "./packages/DisneyCruisePackage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        theme="colored"
        closeOnClick
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/holidays/*" element={<Holidays />} />
        <Route
          path="/holidays/international"
          element={<InternationalPackages />}
        />
        <Route path="/holidays/domestic" element={<DomesticPackages />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/packages/malaysia-tour-package"
          element={<MalaysiaTourPackage />}
        />
        <Route
          path="/packages/thailand-tour-package"
          element={<ThailandTourPackage />}
        />
        <Route
          path="/packages/maldives-tour-package"
          element={<MaldivesTourPackage />}
        />
        <Route
          path="/packages/srilanka-tour-package"
          element={<SrilankaTourPackage />}
        />
        <Route path="/packages/goa-tour-package" element={<GoaTourPackage />} />
        <Route
          path="/packages/kerala-tour-package"
          element={<KeralaTourPackage />}
        />
        <Route
          path="/packages/coorg-tour-package"
          element={<CoorgTourPackage />}
        />
        <Route
          path="/packages/andaman-tour-package"
          element={<AndamanTourPackage />}
        />
        <Route
          path="/packages/bali-tour-package"
          element={<BaliTourPackage />}
        />
        <Route
          path="/packages/singapore-tour-package"
          element={<SingaporeTourPackage />}
        />
        <Route
          path="/packages/shiradi-tour-package"
          element={<ShiradiTourPackage />}
        />
        <Route
          path="/packages/azerbaijan-tour-package"
          element={<AzerbaijanTourPackage />}
        />
        <Route
          path="/packages/philippines-tour-package"
          element={<PhilippinesTourPackage />}
        />
        <Route
          path="/packages/georgia-tour-package"
          element={<GeorgiaTourPackage />}
        />
        <Route
          path="/packages/kashmir-tour-package"
          element={<KashmirTourPackage />}
        />
        <Route
          path="/packages/manali-tour-package"
          element={<ManaliTourPackage />}
        />
        <Route
          path="/packages/cordelia-cruise-package"
          element={<CordeliaCruisePackage />}
        />
        <Route
          path="/packages/gentingDream-cruise-package"
          element={<GentingDreamCruisePackage />}
        />
        <Route
          path="/packages/disney-cruise-package"
          element={<DisneyCruisePackage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
