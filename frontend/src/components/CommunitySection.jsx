import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaPlayCircle,
  FaPhotoVideo,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

import comm1 from "../assets/Morandcomm1.png";
import comm2 from "../assets/Morandcomm2.jpg";
import comm3 from "../assets/Morandcomm3.png";
import comm4 from "../assets/Morandcomm4.jpg";
import comm5 from "../assets/Morandcomm5.jpg";
import comm6 from "../assets/Morandcomm7.jpg";
import campaignImage1 from "../assets/campignimage1.jpeg";

import video1 from "../assets/campaignvideo1.mp4";
import video2 from "../assets/campaignvideo2.mp4";
import video3 from "../assets/campaignvideo3.mp4";
import video4 from "../assets/campaign_video4.mp4";

import "../styles/CommunitySection.css";

const photos = [
  { src: comm1, alt: "Ronald Morand community photo 1", position: "center center" },
  { src: comm2, alt: "Ronald Morand community photo 2", position: "center 20%" },
  { src: comm3, alt: "Ronald Morand community photo 3", position: "center center" },
  { src: comm4, alt: "Ronald Morand community photo 4", position: "center 30%" },
  { src: comm5, alt: "Ronald Morand community photo 5", position: "center 18%" },
  { src: comm6, alt: "Ronald Morand community photo 6", position: "center center" },
  {
    src: campaignImage1,
    alt: "Ronald Morand campaign event poster",
    position: "center center",
  },
];

const facebookVideos = [
  "https://www.facebook.com/reel/1297876615583471",
  "https://www.facebook.com/reel/1450838646781207",
  "https://www.facebook.com/reel/1394611379099261",
  "https://www.facebook.com/reel/2095333927977322",
  "https://www.facebook.com/reel/769780002637864",
  "https://www.facebook.com/reel/1699163485545192",
];

function CommunitySection() {
  const { t } = useTranslation();
  const videoRowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const assetVideos = [
    { src: video1, title: t("churchEventVideo1"), orientation: "portrait" },
    { src: video2, title: t("churchEventVideo2"), orientation: "portrait" },
    { src: video4, title: t("communityOutreachVideo"), orientation: "portrait" },
    { src: video3, title: t("communityOutreachVideo"), orientation: "landscape" },
  ];

  useEffect(() => {
    if (selectedImage) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % photos.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + photos.length) % photos.length
    );
  };

  const scrollVideos = (direction) => {
    const row = videoRowRef.current;
    if (!row) return;

    row.scrollBy({
      left: direction * row.clientWidth,
      behavior: "smooth",
    });
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
          <p className="community-tag">{t("communityTag")}</p>
          <h2>{t("communityTitle")}</h2>

          <div className="community-description">
            <p>{t("communityText")}</p>
            <p>{t("communityTextExtra")}</p>
            <p>{t("communityTextExtra2")}</p>
          </div>

          <div className="community-event">
            <span className="community-event-label">
              {t("communityEventLabel")}
            </span>
            <h3>{t("communityEventTitle")}</h3>
            <p>{t("communityEventText")}</p>
            <strong>{t("communityEventDate")}</strong>
          </div>
        </div>

        <div className="community-hero-visual">
          <div className="community-hero-image-card">
            <button
              type="button"
              className="image-open-button"
              onClick={() =>
                setSelectedImage({
                  src: comm4,
                  alt: "Ronald Morand with community members",
                })
              }
              aria-label="Expand community photo"
            >
              <img
                src={comm4}
                alt="Ronald Morand with community members"
              />
            </button>

            <div className="community-floating-pill">
              {t("communityFloatingPill")}
            </div>
          </div>

          <div className="community-hero-image-card">
            <button
              type="button"
              className="image-open-button"
              onClick={() =>
                setSelectedImage({
                  src: campaignImage1,
                  alt: "Ronald Morand campaign event poster",
                })
              }
              aria-label="Expand campaign event poster"
            >
              <img
                src={campaignImage1}
                alt="Ronald Morand campaign event poster"
                className="community-poster"
              />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="community-slider"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <button
          type="button"
          className="image-open-button slider-image-button"
          onClick={() => setSelectedImage(photos[currentSlide])}
          aria-label={`Expand ${photos[currentSlide].alt}`}
        >
          <img
            src={photos[currentSlide].src}
            alt={photos[currentSlide].alt}
            className="community-slider-image"
            style={{ objectPosition: photos[currentSlide].position }}
          />
        </button>

        <button
          type="button"
          className="slider-btn left"
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="slider-btn right"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>

        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show photo ${index + 1}`}
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
          <h3>{t("communityPhotosTitle")}</h3>
        </div>
        <p>{t("communityPhotosText")}</p>
      </motion.div>

      <motion.div
        className="photo-grid"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {photos.map((photo, index) => (
          <button
            type="button"
            className="photo-card"
            key={photo.src}
            onClick={() => setSelectedImage(photo)}
            aria-label={`Expand photo ${index + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={photo.src === campaignImage1 ? "gallery-poster" : ""}
              style={{ objectPosition: photo.position }}
            />
          </button>
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
          <h3>{t("mediaTitle")}</h3>
          <p>{t("mediaText")}</p>
        </div>
      </motion.div>

      <motion.div
        className="video-section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FaPhotoVideo className="section-icon" />
        <h3>{t("campaignVideosTitle")}</h3>
        <p>{t("campaignVideosText")}</p>
      </motion.div>

      <div className="video-scroll-controls">
        <span>Swipe left or right to see more videos</span>

        <div className="video-scroll-buttons">
          <button
            type="button"
            onClick={() => scrollVideos(-1)}
            aria-label="Scroll to previous videos"
          >
            <FaChevronLeft /> Previous
          </button>

          <button
            type="button"
            onClick={() => scrollVideos(1)}
            aria-label="Scroll to more videos"
          >
            More videos <FaChevronRight />
          </button>
        </div>
      </div>

      <motion.div
        ref={videoRowRef}
        className="asset-video-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {assetVideos.map((video) => (
          <div
            className={`local-video-card ${video.orientation}`}
            key={video.src}
          >
            <video controls preload="metadata" className="campaign-video">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span>{video.title}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="video-section-title facebook-video-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FaFacebook className="section-icon" />
        <h3>{t("facebookVideosTitle")}</h3>
        <p>{t("facebookVideosText")}</p>
      </motion.div>

      <motion.div
        className="video-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {facebookVideos.map((video, index) => (
          <a
            key={video}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <FaFacebook className="video-icon facebook" />
            <FaPlayCircle className="video-icon play" />
            <span>
              {t("watchCampaignVideo")} {index + 1}
            </span>
          </a>
        ))}
      </motion.div>

      {selectedImage && (
        <div
          className="image-lightbox"
          role="presentation"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close expanded image"
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default CommunitySection;
