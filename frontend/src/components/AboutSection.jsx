import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBullhorn,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand4.jpeg";
import featuredAboutImg from "../assets/Morand1.jpg";
import { aboutBiography } from "../data/aboutBiography";
import CommunityMarquee from "./CommunityMarquee";
import "../styles/AboutSection.css";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

function AboutSection() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("fr")
    ? "fr"
    : i18n.language.startsWith("ht")
      ? "ht"
      : "en";

  const missionCards = [
    {
      icon: FaUsers,
      title: t("missionCommunityTitle"),
      text: t("missionCommunityText"),
    },
    {
      icon: FaBullhorn,
      title: t("missionLeadershipTitle"),
      text: t("missionLeadershipText"),
    },
    {
      icon: FaGlobeAmericas,
      title: t("missionVisionTitle"),
      text: t("missionVisionText"),
    },
  ];

  const paragraphs = (aboutBiography[currentLanguage] || "")
    .trim()
    .split("\n\n")
    .filter(Boolean);

  return (
    <section className="about-page-section relative isolate overflow-hidden text-[#14213d]">
      <div
        className="about-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Introduction and photos */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div {...reveal}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#00209f] sm:text-sm">
              <FaUsers aria-hidden="true" />
              {t("aboutTag")}
            </p>

            <h1 className="mb-6 font-['Outfit'] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#00209f]">
              {t("aboutTitle")}
            </h1>

            <div className="space-y-4 rounded-r-2xl border-l-4 border-[#d21034] bg-white/80 p-5 shadow-[0_12px_34px_rgba(0,32,159,0.07)]">
              <p className="text-lg font-bold leading-relaxed text-[#14213d]">
                {t("aboutLead")}
              </p>
              <p className="leading-relaxed text-slate-700">
                {t("aboutText1")}
              </p>
              <p className="leading-relaxed text-slate-700">
                {t("aboutText2")}
              </p>
            </div>
          </motion.div>

          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" {...reveal}>
            <div className="overflow-hidden rounded-2xl border border-[#00209f]/20 border-t-4 border-t-[#00209f] bg-white p-2 shadow-[0_18px_45px_rgba(0,32,159,0.12)]">
              <img
                src={candidateImg1}
                alt="Ronald Morand portrait"
                className="block h-[320px] w-full rounded-xl object-cover object-top"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#00209f]/20 border-b-4 border-b-[#d21034] bg-white p-2 shadow-[0_18px_45px_rgba(0,32,159,0.12)]">
              <img
                src={candidateImg2}
                alt="Ronald Morand with community"
                className="block h-[280px] w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission cards */}
        <motion.div className="mt-20 grid gap-5 md:grid-cols-3" {...reveal}>
          {missionCards.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={`rounded-2xl border border-[#00209f]/15 border-t-4 bg-white/90 p-6 shadow-[0_14px_34px_rgba(0,32,159,0.08)] ${
                index === 2 ? "border-t-[#d21034]" : "border-t-[#00209f]"
              }`}
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#e8f2ff] text-xl text-[#00209f]">
                <Icon aria-hidden="true" />
              </span>
              <h2 className="mb-3 text-xl font-extrabold text-[#00209f]">
                {title}
              </h2>
              <p className="leading-relaxed text-slate-700">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Ticker: after mission cards, before biography */}
        <div className="my-14 lg:my-20">
          <CommunityMarquee variant="about" />
        </div>

        {/* Biography */}
        <motion.article
          className="overflow-hidden rounded-[26px] border border-[#00209f]/15 border-t-[5px] border-t-[#00209f] border-b-[5px] border-b-[#d21034] bg-white/95 p-5 shadow-[0_24px_60px_rgba(0,32,159,0.1)] sm:p-8 lg:p-10"
          {...reveal}
        >
          <div className="mb-8 grid items-center gap-7 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#b50e2b]">
                {t("campaignBiography")}
              </p>
              <h2 className="font-['Outfit'] text-3xl font-extrabold leading-tight text-[#00209f] sm:text-4xl">
                {t("aboutTitle")}
              </h2>
            </div>

            <img
              src={featuredAboutImg}
              alt="Ronald Morand featured portrait"
              loading="lazy"
              className="block h-[240px] w-full rounded-2xl object-cover object-top"
            />
          </div>

          <div className="max-w-4xl space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-[1.85] ${
                  index === 0
                    ? "font-semibold text-[#14213d]"
                    : "text-slate-700"
                }`}
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </motion.article>

        <div className="mt-12 flex justify-center">
          <Link
            to="/donate"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b50e2b] px-7 py-3 font-extrabold text-white shadow-[0_12px_28px_rgba(181,14,43,0.22)] transition hover:-translate-y-1 hover:bg-[#960b23] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
          >
            <FaHandHoldingHeart aria-hidden="true" />
            {t("donateNow")}
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
