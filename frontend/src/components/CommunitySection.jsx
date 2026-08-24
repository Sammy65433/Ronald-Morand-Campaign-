import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaPlayCircle,
  FaPhotoVideo,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import comm1 from "../assets/Morandcomm1.png";
import comm2 from "../assets/Morandcomm2.jpg";
import comm3 from "../assets/Morandcomm3.png";
import comm4 from "../assets/Morandcomm4.jpg";
import comm5 from "../assets/Morandcomm5.jpg";
import comm6 from "../assets/Morandcomm7.jpg";
import "../styles/CommunitySection.css";

function CommunitySection() {
  const videos = [
    "https://www.facebook.com/reel/1297876615583471",
    "https://www.facebook.com/reel/1450838646781207",
    "https://www.facebook.com/reel/1394611379099261",
    "https://www.facebook.com/reel/2095333927977322",
    "https://www.facebook.com/reel/769780002637864",
  ];
const photos = [
  { src: comm1, alt: "Ronald Morand community photo 1", position: "center center" },
  { src: comm2, alt: "Ronald Morand community photo 2", position: "center 20%" },
  { src: comm3, alt: "Ronald Morand community photo 3", position: "center center" },
  { src: comm4, alt: "Ronald Morand community photo 4", position: "center 30%" },
  { src: comm5, alt: "Ronald Morand community photo 5", position: "center 18%" },
  { src: comm6, alt: "Ronald Morand community photo 6", position: "center center" },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [photos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="community-page">
      <motion.div
  className="community-hero"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="community-hero-text">
    <p className="community-tag">Community Impact</p>
    <h2>See the Campaign in Action</h2>
    <p>
      Explore community outreach, campaign moments, and public support as Ronald
      Morand connects with people and shares his vision for Haiti.
    </p>
  </div>

  <div className="community-hero-visual">
    <div className="community-hero-image-card">
      <img src={comm4} alt="Ronald Morand with community members" />
      <div className="community-floating-pill">Real moments. Real support.</div>
    </div>
  </div>
</motion.div>


      <motion.div
        className="community-slider"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <img
  src={photos[currentSlide].src}
  alt={photos[currentSlide].alt}
  className="community-slider-image"
  style={{ objectPosition: photos[currentSlide].position }}
/>

        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="community-gallery-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <div className="section-icon-title">
          <FaImages className="section-icon" />
          <h3>Community Photos</h3>
        </div>
        <p>
          Moments of outreach, connection, and support from the campaign trail.
        </p>
      </motion.div>

      <motion.div
        className="photo-grid"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {photos.map((photo, index) => (
  <div className="photo-card" key={index}>
    <img
      src={photo.src}
      alt={photo.alt}
      style={{ objectPosition: photo.position }}
    />
  </div>
))}

      </motion.div>

      <motion.div
        className="media-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <FaPhotoVideo className="media-banner-icon" />
        <div>
          <h3>Media & Campaign Highlights</h3>
          <p>
            Watch featured campaign videos and moments from the community.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="video-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {videos.map((video, index) => (
          <a
            key={index}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <FaFacebook className="video-icon facebook" />
            <FaPlayCircle className="video-icon play" />
            <span>Watch Campaign Video {index + 1}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default CommunitySection;
