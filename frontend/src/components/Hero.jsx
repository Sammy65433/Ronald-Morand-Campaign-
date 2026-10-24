import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaLock,
  FaQuoteLeft,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

import candidateImg1 from "../assets/Morand1.jpg";
import Countdown from "./Countdown";
import "../styles/Hero.css";

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero relative isolate overflow-hidden text-[#14213d]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />
      <div className="hero-glow hero-glow-red" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:min-h-[850px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
        <motion.div className="min-w-0" {...reveal}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#00209f] shadow-sm sm:text-sm">
            <FaUsers aria-hidden="true" />
            {t("heroTag")}
          </div>

          <h1 className="mb-7 max-w-[13ch] font-['Outfit'] text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#00209f] [overflow-wrap:anywhere]">
            {t("heroTitle")}
          </h1>

          <div className="max-w-2xl space-y-4 rounded-r-2xl border-l-4 border-[#d21034] bg-white/80 p-5 shadow-[0_12px_34px_rgba(0,32,159,0.07)]">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t("heroText")}
            </p>
            <p className="text-base font-bold leading-relaxed text-[#14213d] sm:text-lg">
              {t("heroText2")}
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-[#00209f]/20 bg-white px-4 py-3 font-bold text-[#14213d] shadow-sm">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#fff0f2] text-[#b50e2b]">
              <FaCalendarAlt aria-hidden="true" />
            </span>
            <span>
              {t("electionDayLabel")} {t("electionDay")}
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://donorbox.org/ronald-morand-campaign-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b50e2b] px-6 py-3 font-extrabold text-white shadow-[0_12px_28px_rgba(181,14,43,0.22)] transition hover:-translate-y-1 hover:bg-[#960b23] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
            >
              <FaLock aria-hidden="true" />
              {t("donateNow")}
            </a>

            <Link
              to="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#00209f]/25 bg-white px-6 py-3 font-extrabold text-[#00209f] shadow-sm transition hover:-translate-y-1 hover:bg-[#edf4ff] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
            >
              {t("learnMore")}
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="hero-countdown mt-8">
            <Countdown />
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#00209f]/15 border-t-[3px] border-t-[#00209f] bg-white/90 p-4 shadow-sm">
              <FaCalendarAlt className="mb-3 text-xl text-[#b50e2b]" aria-hidden="true" />
              <strong className="block text-xl font-extrabold text-[#00209f]">
                2026
              </strong>
              <span className="mt-1 block text-sm leading-snug text-slate-600">
                {t("heroStatYear")}
              </span>
            </div>

            <div className="rounded-2xl border border-[#00209f]/15 border-t-[3px] border-t-[#00209f] bg-white/90 p-4 shadow-sm">
              <FaUsers className="mb-3 text-xl text-[#b50e2b]" aria-hidden="true" />
              <strong className="block text-xl font-extrabold text-[#00209f]">
                Haiti
              </strong>
              <span className="mt-1 block text-sm leading-snug text-slate-600">
                {t("heroStatCommunity")}
              </span>
            </div>

            <div className="col-span-2 rounded-2xl border border-[#00209f]/15 border-t-[3px] border-t-[#d21034] bg-white/90 p-4 shadow-sm sm:col-span-1">
              <FaHandHoldingHeart
                className="mb-3 text-xl text-[#b50e2b]"
                aria-hidden="true"
              />
              <strong className="block text-base font-extrabold leading-snug text-[#00209f]">
                {t("heroStatGrassroots")}
              </strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[530px] min-w-0 pb-14"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-[26px] border border-[#00209f]/20 border-t-[5px] border-t-[#00209f] border-b-[5px] border-b-[#d21034] bg-white p-2.5 shadow-[0_24px_65px_rgba(0,32,159,0.16)]">
            <img
              src={candidateImg1}
              alt="Ronald Morand"
              fetchPriority="high"
              className="block h-[460px] w-full rounded-2xl object-cover object-top sm:h-[560px] lg:h-[610px]"
            />
          </div>

          <div className="absolute right-0 top-5 inline-flex max-w-[80%] items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/95 px-4 py-2 text-sm font-extrabold text-[#00209f] shadow-lg backdrop-blur">
            <FaGlobeAmericas aria-hidden="true" />
            <span>🇭🇹 {t("heroBadge")}</span>
          </div>

          <div className="absolute bottom-0 left-4 right-0 max-w-[370px] rounded-2xl border border-[#00209f]/15 border-l-4 border-l-[#d21034] bg-white/95 p-4 shadow-[0_15px_38px_rgba(0,32,159,0.15)] backdrop-blur sm:left-8">
            <FaQuoteLeft className="mb-2 text-[#b50e2b]" aria-hidden="true" />
            <p className="font-semibold leading-relaxed text-[#14213d]">
              {t("heroQuote")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
