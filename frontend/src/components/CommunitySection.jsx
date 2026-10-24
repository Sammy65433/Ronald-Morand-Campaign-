import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaPlayCircle,
  FaPhotoVideo,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaCalendarAlt,
  FaExpand,
  FaTimes,
  FaHandHoldingHeart,
  FaVideo,
  FaArrowsAltH,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import CommunityMarquee from "./CommunityMarquee";


import comm1 from "../assets/Morandcomm1.png";
import comm2 from "../assets/Morandcomm2.jpg";
import comm3 from "../assets/Morandcomm3.png";
import comm4 from "../assets/Morandcomm4.jpg";
import comm5 from "../assets/Morandcomm5.jpg";
import comm6 from "../assets/Morandcomm7.jpg";
import campaignImage1 from "../assets/campignimage1.jpeg";
import campaignImage501 from "../assets/campaignimage501.jpeg";

import video1 from "../assets/campaignvideo1.mp4";
import video2 from "../assets/campaignvideo2.mp4";
import video3 from "../assets/campaignvideo3.mp4";
import video4 from "../assets/campaign_video4.mp4";
import video5 from "../assets/campaignvideo5.mp4";
import video6 from "../assets/campiagnvideo6.mp4";

import "../styles/CommunitySection.css";

const photos = [
  { src: comm1, alt: "Ronald Morand community photo 1", position: "center center" },
  { src: comm2, alt: "Ronald Morand community photo 2", position: "center 20%" },
  { src: comm3, alt: "Ronald Morand community photo 3", position: "center center" },
  { src: comm4, alt: "Ronald Morand community photo 4", position: "center 30%" },
  { src: comm5, alt: "Ronald Morand community photo 5", position: "center 18%" },
  { src: comm6, alt: "Ronald Morand community photo 6", position: "center center" },
  { src: campaignImage1, alt: "Ronald Morand campaign event poster", position: "center center", poster: true },
  { src: campaignImage501, alt: "Ronald Morand campaign photo", position: "center center" },
];
const facebookShareVideo =
  "https://www.facebook.com/share/v/19X4Ghyej4/?mibextid=wwXIfr";

const facebookVideos = [
  "https://www.facebook.com/reel/1577561357738769",
  "https://www.facebook.com/reel/1297876615583471",
  "https://www.facebook.com/reel/1450838646781207",
  "https://www.facebook.com/reel/1394611379099261",
  "https://www.facebook.com/reel/2095333927977322",
  "https://www.facebook.com/reel/769780002637864",
  "https://www.facebook.com/reel/1699163485545192",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55 },
};

/* Shared look: dark glass panel with the Haitian flag bands (blue top, red bottom) */
const panel =
  "border border-[#79b7ff]/25 border-t-2 border-t-[#2563c7] border-b-2 border-b-[#c6283e] " +
  "bg-[#0b0f18]/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm";

const sectionTitle =
  "community-display text-3xl font-extrabold tracking-tight text-[#f7f4e9] sm:text-4xl";
const bodyText = "text-base leading-relaxed text-slate-300";
const iconBadge =
  "grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#79b7ff]/40 " +
  "bg-[#2563c7]/15 text-xl text-[#8fc3ff] shadow-[0_0_30px_rgba(37,99,199,0.35)]";
const navBtn =
  "grid h-11 w-11 place-items-center rounded-full border border-[#79b7ff]/50 bg-[#05070b]/85 " +
  "text-white transition hover:bg-[#2563c7]";

function CommunitySection() {
  const { t } = useTranslation();
  const videoRowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const assetVideos = [
    { src: video6, title: t("campaignVideo6"), orientation: "landscape" },
    { src: video5, title: t("campaignVideo5"), orientation: "landscape" },
    { src: video4, title: t("communityOutreachVideo"), orientation: "portrait" },
    { src: video3, title: t("communityOutreachVideo"), orientation: "landscape" },
    { src: video2, title: t("churchEventVideo2"), orientation: "portrait" },
    { src: video1, title: t("churchEventVideo1"), orientation: "portrait" },
  ];

  useEffect(() => {
    if (selectedImage) return;
    const interval = window.setInterval(() => {
      setCurrentSlide((p) => (p + 1) % photos.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  const scrollVideos = (direction) => {
    const row = videoRowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * row.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="community-page relative overflow-hidden text-[#f7f4e9]">
      <div className="community-grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="community-beam pointer-events-none" aria-hidden="true" />
      <div className="community-beam community-beam-two pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* HERO */}
        <motion.div
          className="mb-20 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
          {...reveal}
        >
          <div>
            <p className="community-tech mb-5 inline-flex items-center gap-2 rounded-full border border-[#8fc3ff]/40 bg-[#2563c7]/15 px-4 py-2 text-sm font-semibold tracking-wide text-[#8fc3ff]">
              <FaUsers aria-hidden="true" />
              {t("communityTag")}
            </p>

            <h1 className="community-display mb-6 max-w-[14ch] bg-gradient-to-r from-[#8fc3ff] via-white to-[#f27789] bg-clip-text text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] text-transparent [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
              {t("communityTitle")}
            </h1>

            <div className="community-tech grid max-w-xl gap-4 rounded-r-xl border-l-[3px] border-[#c6283e] bg-[#05070b]/70 p-5 text-lg font-semibold leading-relaxed">
              <p>{t("communityText")}</p>
              <p>{t("communityTextExtra")}</p>
              <p>{t("communityTextExtra2")}</p>
            </div>

            <Link
              to="/donate"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#c6283e] px-6 py-3 font-extrabold text-white shadow-[0_12px_32px_rgba(198,40,62,0.4)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,199,0.4)]"
            >
              <FaHandHoldingHeart aria-hidden="true" />
              {t("donateNow")}
            </Link>

            <div className={`${panel} mt-8 max-w-xl rounded-2xl p-6`}>
              <span className="community-tech inline-flex items-center gap-2 text-sm font-bold text-[#8fc3ff]">
                <FaCalendarAlt aria-hidden="true" />
                {t("communityEventLabel")}
              </span>
              <h2 className="community-display mt-2 text-2xl font-bold text-white">
                {t("communityEventTitle")}
              </h2>
              <p className={`${bodyText} mt-2`}>{t("communityEventText")}</p>
              <strong className="mt-3 block text-[#f27789]">{t("communityEventDate")}</strong>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className={`${panel} group relative min-w-0 overflow-hidden rounded-[1.25rem] p-2`}>
              <button
                type="button"
                className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
                onClick={() =>
                  setSelectedImage({ src: comm4, alt: "Ronald Morand with community members" })
                }
                aria-label="Expand community photo"
              >
                <img
                  src={comm4}
                  alt="Ronald Morand with community members"
                  className="block h-[310px] w-full object-cover object-[center_25%] transition duration-500 group-hover:scale-105 max-[700px]:h-[260px]"
                />
                <FaExpand
                  className="absolute right-3 top-3 rounded-md bg-[#05070b]/80 p-1.5 text-3xl text-[#8fc3ff]"
                  aria-hidden="true"
                />
              </button>
              <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-full border border-[#8fc3ff]/40 bg-[#05070b]/90 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                {t("communityFloatingPill")}
              </div>
            </div>

            <div className={`${panel} min-w-0 overflow-hidden rounded-[1.25rem] p-2`}>
              <button
                type="button"
                className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
                onClick={() =>
                  setSelectedImage({ src: campaignImage1, alt: "Ronald Morand campaign event poster" })
                }
                aria-label="Expand campaign event poster"
              >
                <img
                  src={campaignImage1}
                  alt="Ronald Morand campaign event poster"
                  className="block h-[300px] w-full bg-[#05070b] object-contain max-[700px]:h-[280px]"
                />
                <FaExpand
                  className="absolute right-3 top-3 rounded-md bg-[#05070b]/80 p-1.5 text-3xl text-[#8fc3ff]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </motion.div>
{/* End of HERO */}

<CommunityMarquee />

{/* SLIDER */}
<motion.div

          className={`${panel} relative mx-auto mb-20 max-w-[850px] overflow-hidden rounded-[1.4rem] p-2.5`}
          {...reveal}
        >
          <button
            type="button"
            className="block w-full cursor-zoom-in"
            onClick={() => setSelectedImage(photos[currentSlide])}
            aria-label={`Expand ${photos[currentSlide].alt}`}
          >
            <img
              src={photos[currentSlide].src}
              alt={photos[currentSlide].alt}
              className="block h-[clamp(280px,45vw,490px)] w-full rounded-xl bg-[#05070b] object-contain"
              style={{ objectPosition: photos[currentSlide].position }}
            />
          </button>

          <button
            type="button"
            className={`${navBtn} absolute left-5 top-1/2 -translate-y-1/2`}
            onClick={() => setCurrentSlide((p) => (p - 1 + photos.length) % photos.length)}
            aria-label="Previous photo"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${navBtn} absolute right-5 top-1/2 -translate-y-1/2`}
            onClick={() => setCurrentSlide((p) => (p + 1) % photos.length)}
            aria-label="Next photo"
          >
            <FaChevronRight aria-hidden="true" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-[#05070b]/80 p-2">
            {photos.map((photo, index) => (
              <button
                type="button"
                key={photo.src}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? "w-6 bg-[#c6283e]" : "w-2.5 bg-[#aabbd2]"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
              />
            ))}
          </div>
        </motion.div>

        {/* GALLERY */}
        <motion.div className="mx-auto mb-8 max-w-3xl text-center" {...reveal}>
          <div className="flex items-center justify-center gap-3">
            <span className={iconBadge}>
              <FaImages aria-hidden="true" />
            </span>
            <h2 className={sectionTitle}>{t("communityPhotosTitle")}</h2>
          </div>
          <p className={`${bodyText} mt-3`}>{t("communityPhotosText")}</p>
        </motion.div>

        <motion.div
          className="mb-20 grid grid-cols-1 gap-4 min-[701px]:grid-cols-2 lg:grid-cols-3"
          {...reveal}
        >
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => setSelectedImage(photo)}
              aria-label={`Expand photo ${index + 1}`}
              className={`${panel} group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl p-1.5 transition hover:-translate-y-1 hover:border-[#8fc3ff]`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`block h-[290px] w-full rounded-xl transition duration-500 group-hover:scale-105 min-[701px]:h-[270px] ${
                  photo.poster ? "bg-[#05070b] object-contain" : "object-cover"
                }`}
                style={{ objectPosition: photo.position }}
              />
              <FaExpand
                className="absolute right-4 top-4 rounded-md bg-[#05070b]/80 p-1.5 text-3xl text-[#8fc3ff] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              />
            </button>
          ))}
        </motion.div>

        {/* MEDIA BANNER */}
        <motion.div
          className={`${panel} flex items-start gap-5 rounded-2xl border-l-4 border-l-[#c6283e] p-6 sm:items-center`}
          {...reveal}
        >
          <span className={iconBadge}>
            <FaPhotoVideo aria-hidden="true" />
          </span>
          <div>
            <h2 className="community-display mb-1 text-2xl font-extrabold text-white">{t("mediaTitle")}</h2>
            <p className={bodyText}>{t("mediaText")}</p>
          </div>
        </motion.div>

        {/* CAMPAIGN VIDEOS */}
        <motion.div className="mx-auto mb-7 mt-18 max-w-3xl pt-16 text-center" {...reveal}>
          <span className={`${iconBadge} mx-auto mb-3`}>
            <FaVideo aria-hidden="true" />
          </span>
          <h2 className={sectionTitle}>{t("campaignVideosTitle")}</h2>
          <p className={`${bodyText} mt-3`}>{t("campaignVideosText")}</p>
        </motion.div>

        <div className="mb-3 flex flex-col gap-3 text-sm text-slate-300 min-[701px]:flex-row min-[701px]:items-center min-[701px]:justify-between">
          <span className="inline-flex items-center gap-2">
            <FaArrowsAltH className="text-[#8fc3ff]" aria-hidden="true" />
            Swipe left or right to see more videos
          </span>
          <div className="flex justify-between gap-2">
            {[
              { dir: -1, label: t("previousVideos"), left: true },
              { dir: 1, label: t("moreVideos"), left: false },
            ].map(({ dir, label, left }) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollVideos(dir)}
                aria-label={label}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#79b7ff]/40 bg-[#123362] px-3.5 py-2 font-bold text-white transition hover:bg-[#2563c7]"
              >
                {left && <FaChevronLeft aria-hidden="true" />}
                {label}
                {!left && <FaChevronRight aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>

        <motion.div
  ref={videoRowRef}
  className="asset-video-grid flex w-full items-start gap-4 overflow-x-auto pb-6 pt-2"
  {...reveal}
>
  {assetVideos.map((video) => (
    <div
  key={video.src}
  className={`${panel} community-video-card`}
>
  <div className="community-video-frame">
    <video
      controls
      preload="metadata"
      aria-label={video.title}
      className="community-video"
    >
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <span className="community-video-title">{video.title}</span>
</div>

  ))}
</motion.div>


        {/* FACEBOOK */}
<motion.div
  className="mx-auto mb-7 mt-20 max-w-3xl text-center"
  {...reveal}
>
  <span className={`${iconBadge} mx-auto mb-3`}>
    <FaFacebook aria-hidden="true" />
  </span>
  <h2 className={sectionTitle}>{t("facebookVideosTitle")}</h2>
  <p className={`${bodyText} mt-3`}>{t("facebookVideosText")}</p>
</motion.div>

<motion.div
  className="grid grid-cols-1 gap-4 min-[701px]:grid-cols-2 lg:grid-cols-3"
  {...reveal}
>
  {facebookVideos.map((video, index) => (
    <div className="facebook-preview-card" key={video}>
      <iframe
        title={`Campaign video ${index + 1}`}
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video)}&show_text=false`}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
      <a href={video} target="_blank" rel="noopener noreferrer">
        {t("watchCampaignVideo")} {index + 1} on Facebook
      </a>
    </div>
  ))}
</motion.div>





        {/* DONATE CTA */}
        <motion.div
          className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[1.2rem] border border-[#79b7ff]/35 border-t-2 border-t-[#2563c7] border-b-2 border-b-[#c6283e] bg-[radial-gradient(circle_at_95%_50%,rgba(198,40,62,0.3),transparent_38%),linear-gradient(120deg,#102244,#0b0f18)] p-8 min-[701px]:flex-row min-[701px]:items-center"
          {...reveal}
        >
          <div className="flex items-start gap-4">
            <span className={iconBadge}>
              <FaHandHoldingHeart aria-hidden="true" />
            </span>
            <div>
              <h2 className="community-display mb-1 text-2xl font-extrabold text-white sm:text-3xl">
                {t("communityDonateTitle")}
              </h2>
              <p className={bodyText}>{t("communityDonateText")}</p>
            </div>
          </div>
          <Link
            to="/donate"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-[#00209f] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(75,156,255,0.35)]"
          >
            <FaHandHoldingHeart aria-hidden="true" />
            {t("donateNow")}
          </Link>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-black/95 px-4 pb-4 pt-14"
          role="presentation"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-3 grid h-11 w-11 place-items-center rounded-full border border-[#79b7ff]/50 text-xl text-white transition hover:bg-[#c6283e]"
            onClick={() => setSelectedImage(null)}
            aria-label="Close expanded image"
          >
            <FaTimes aria-hidden="true" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-full max-w-full cursor-default rounded-lg border-y-2 border-t-[#2563c7] border-b-[#c6283e] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default CommunitySection;