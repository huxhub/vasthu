import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CommercialVastuPage from "./pages/CommercialVastuPage";
import ContactPage from "./pages/ContactPage";
import NumerologyPage from "./pages/NumerologyPage";
import AstroNumerologyPage from "./pages/AstroNumerologyPage";
import VastuPage from "./pages/VastuPage";
import ResidentialVastuPage from "./pages/ResidentialVastuPage";
import AstroVastuPage from "./pages/AstroVastuPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="commercial-vastu" element={<CommercialVastuPage />} />
          <Route path="residential-vastu" element={<ResidentialVastuPage />} />
          <Route path="vastu" element={<VastuPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="numerology" element={<NumerologyPage />} />
          <Route path="astro-numerology" element={<AstroNumerologyPage />} />
          <Route path="astro-vastu" element={<AstroVastuPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
