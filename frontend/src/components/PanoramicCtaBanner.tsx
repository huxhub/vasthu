import { Link } from "react-router-dom";
import "./PanoramicCtaBanner.css";

export interface PanoramicCtaBannerProps {
  title: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  imageAlt?: string;
}

export default function PanoramicCtaBanner({
  title,
  buttonText = "ENQUIRE NOW",
  buttonLink = "/contact",
  image,
  imageAlt = "Architectural sanctuary",
}: PanoramicCtaBannerProps) {
  return (
    <div className="panoramic-cta-banner">
      <img
        src={image}
        alt={imageAlt}
        className="panoramic-cta-img"
        loading="lazy"
      />
      <div className="panoramic-cta-overlay" />
      <div className="panoramic-cta-content">
        <h2 className="panoramic-cta-title">{title}</h2>
        <Link to={buttonLink} className="panoramic-cta-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
