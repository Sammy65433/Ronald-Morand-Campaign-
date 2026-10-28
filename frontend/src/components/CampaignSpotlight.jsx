import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGlobeAmericas,
  FaQuoteLeft,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand1.jpg";
import "../styles/CampaignSpotlight.css";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

export default function CampaignSpotlight() {
  const { t } = useTranslation();

  const points = [
    {
      icon: FaUsers,
      text: t("spotlightPoint1"),
      to: "/community",
    },
    {
      icon: FaGlobeAmericas,
      text: t("spotlightPoint2"),
      to: "/donate",
    },
    {
      icon: FaSeedling,
      text: t("spotlightPoint3"),
      to: "/donate",
    },
  ];

  return (
    <section className="spotlight-section relative isolate overflow-hidden text-[#14213d]">
      <div
        className="spotlight-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div className="relative min-w-0 pb-14" {...reveal}>
          <div className="overflow-hidden rounded-[26px] border border-[#00209f]/20 border-t-[5px] border-t-[#00209f] bg-white p-2.5 shadow-[0_24px_60px_rgba(0,32,159,0.13)]">
            <img
              src={candidateImg1}
              alt="Ronald Morand portrait"
              loading="lazy"
              className="block h-[410px] w-full rounded-2xl bg-[#e8f3ff] object-contain sm:h-[540px]"
            />
          </div>

          <div className="absolute bottom-4 right-0 w-[38%] overflow-hidden rounded-2xl border border-[#00209f]/20 border-b-4 border-b-[#d21034] bg-white p-1.5 shadow-xl">
            <img
              src={candidateImg2}
              alt="Ronald Morand in community"
              loading="lazy"
              className="block h-[150px] w-full rounded-xl object-cover object-top sm:h-[190px]"
            />
          </div>

          <div className="absolute bottom-0 left-4 max-w-[60%] rounded-xl border border-[#00209f]/15 border-l-4 border-l-[#d21034] bg-white/95 p-4 shadow-xl backdrop-blur">
            <FaQuoteLeft
              className="mb-2 text-[#b50e2b]"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold leading-relaxed text-[#14213d] sm:text-base">
              {t("spotlightQuote")}
            </p>
          </div>
        </motion.div>

        <motion.div className="min-w-0" {...reveal}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#00209f] sm:text-sm">
            <FaGlobeAmericas aria-hidden="true" />
            {t("spotlightTag")}
          </p>

          <h2 className="mb-6 font-['Outfit'] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#00209f]">
            {t("spotlightTitle")}
          </h2>

          <div className="space-y-4 rounded-r-2xl border-l-4 border-[#d21034] bg-white/80 p-5 shadow-[0_12px_34px_rgba(0,32,159,0.07)]">
            <p className="text-lg font-bold leading-relaxed text-[#14213d]">
              {t("spotlightLead")}
            </p>
            <p className="leading-relaxed text-slate-700">
              {t("spotlightText1")}
            </p>
            <p className="leading-relaxed text-slate-700">
              {t("spotlightText2")}
            </p>
          </div>

          <div className="mt-7 grid gap-3">
            {points.map(({ icon: Icon, text, to }, index) => (
              <Link
                key={index}
                to={to}
                className="flex items-center gap-4 rounded-xl border border-[#00209f]/15 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-[#edf4ff] hover:shadow-md focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-lg ${
                    index === 2
                      ? "bg-[#fff0f2] text-[#b50e2b]"
                      : "bg-[#e8f2ff] text-[#00209f]"
                  }`}
                >
                  <Icon aria-hidden="true" />
                </span>
                <span className="font-bold leading-snug text-[#14213d]">
                  {text}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
