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
import GeoVastuPage from "./pages/GeoVastuPage";
import UaeRelocationPage from "./pages/UaeRelocationPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="commercial-vastu" element={<CommercialVastuPage />} />
          <Route path="residential-vastu" element={<ResidentialVastuPage />} />
          <Route path="geo-vastu" element={<GeoVastuPage />} />
          <Route path="vastu" element={<VastuPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="numerology" element={<NumerologyPage />} />
          <Route path="astro-numerology" element={<AstroNumerologyPage />} />
          <Route path="astro-vastu" element={<AstroVastuPage />} />
          <Route path="relocate-germany-to-uae" element={<UaeRelocationPage origin="Germany" />} />
          <Route path="relocate-uk-to-uae" element={<UaeRelocationPage origin="the UK" />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
