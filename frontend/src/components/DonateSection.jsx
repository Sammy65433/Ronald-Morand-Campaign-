import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBullhorn,
  FaCheck,
  FaCopy,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaLock,
  FaMobileAlt,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

import ronaldImg from "../assets/Morand2.jpg";
import communityImg from "../assets/Morandcomm2.jpg";
import donationPic1 from "../assets/donationpic1.jpeg";
import zelleQRCode2 from "../assets/zelleQRCode2.jpeg";
import "../styles/DonateSection.css";

const donorboxUrl = "https://donorbox.org/ronald-morand-campaign-fund";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6 },
};

const card =
  "rounded-2xl border border-[#00209f]/15 bg-white/95 shadow-[0_16px_40px_rgba(0,32,159,0.09)]";

function DonateSection() {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState("");

  const copyText = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(""), 1800);
    } catch {
      setCopiedField("");
    }
  };

  const supportReasons = [
    {
      icon: FaBullhorn,
      title: t("supportReason1Title"),
      text: t("supportReason1Text"),
    },
    {
      icon: FaUsers,
      title: t("supportReason2Title"),
      text: t("supportReason2Text"),
    },
    {
      icon: FaGlobeAmericas,
      title: t("supportReason3Title"),
      text: t("supportReason3Text"),
    },
  ];

  const bankRows = [
    { label: t("accountNumber"), value: "52709339541", field: "account" },
    { label: t("routingNumber"), value: "021200025", field: "routing" },
    {
      label: t("donationEmail"),
      value: "Rmorand2026@gmail.com",
      field: "email",
    },
  ];

  return (
    <section className="donate-page relative isolate overflow-hidden text-[#14213d]">
      <div className="donate-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          {...reveal}
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#00209f] sm:text-sm">
              <FaHandHoldingHeart aria-hidden="true" />
              {t("donateTag")}
            </p>

            <h1 className="mb-6 font-['Outfit'] text-[clamp(2.8rem,5.5vw,5.3rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#00209f]">
              {t("donateTitle")}
            </h1>

            <p className="max-w-2xl rounded-r-2xl border-l-4 border-[#d21034] bg-white/80 p-5 text-lg leading-relaxed text-slate-700 shadow-sm">
              {t("donateSubtext")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={donorboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b50e2b] px-6 py-3 font-extrabold text-white shadow-[0_12px_28px_rgba(181,14,43,0.22)] transition hover:-translate-y-1 hover:bg-[#960b23]"
              >
                <FaLock aria-hidden="true" />
                {t("donateSecurely")}
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#00209f]/15 bg-white px-4 py-3 font-bold text-[#00209f]">
                <FaHandHoldingHeart aria-hidden="true" />
                {t("donateImpactChip")}
              </span>
            </div>
          </div>

          <div className="relative pb-10">
            <div className={`${card} overflow-hidden border-t-4 border-t-[#00209f] p-2.5`}>
              <img
                src={ronaldImg}
                alt="Ronald Morand"
                className="block h-[410px] w-full rounded-xl object-cover object-top sm:h-[520px]"
              />
            </div>

            <div className={`${card} absolute bottom-0 right-0 flex max-w-[240px] items-center gap-3 border-b-4 border-b-[#d21034] p-2.5`}>
              <img
                src={communityImg}
                alt="Community support"
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-lg object-cover"
              />
              <strong className="text-sm leading-snug text-[#00209f]">
                {t("missionCommunityTitle")}
              </strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`${card} mt-16 overflow-hidden border-t-4 border-t-[#00209f] p-5 sm:p-8`}
          {...reveal}
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-3 text-2xl font-extrabold text-[#00209f]">
              <FaMobileAlt aria-hidden="true" />
              {t("zelleTitle")}
            </h2>
            <span className="rounded-full bg-[#e8f2ff] px-3 py-1.5 text-sm font-bold text-[#00209f]">
              {t("zelleBadge")}
            </span>
          </div>

          <div className="grid items-center gap-6 md:grid-cols-[1fr_210px]">
            <div className="min-w-0">
              <p className="mb-2 font-semibold text-slate-700">{t("zelleLabel")}</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-xl border border-[#00209f]/15 bg-[#f3f8ff] p-3">
                  <strong className="break-all text-lg text-[#14213d]">
                    267-616-3905
                  </strong>
                  <button
                    type="button"
                    onClick={() => copyText("267-616-3905", "zelle")}
                    aria-label={copiedField === "zelle" ? "Copied Zelle number" : "Copy Zelle number"}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#00209f] text-white"
                  >
                    {copiedField === "zelle" ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                  </button>
                </div>

                <a
                  href={donorboxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b50e2b] px-5 py-3 font-bold text-white"
                >
                  <FaLock aria-hidden="true" />
                  {t("donateSecurely")}
                </a>
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">{t("zelleNote")}</p>
            </div>

            <div className="mx-auto w-full max-w-[210px] rounded-xl border border-[#00209f]/15 bg-white p-3">
              <img
                src={zelleQRCode2}
                alt="Zelle QR code"
                loading="lazy"
                className="block w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          {...reveal}
        >
          {["$100", "$250", "$500", "$1000"].map((amount) => (
            <div
              key={amount}
              className={`${card} border-t-4 border-t-[#d21034] p-6 text-center`}
            >
              <FaHandHoldingHeart
                className="mx-auto mb-3 text-xl text-[#b50e2b]"
                aria-hidden="true"
              />
              <strong className="text-3xl font-extrabold text-[#00209f]">
                {amount}
              </strong>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          {...reveal}
        >
          {supportReasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${card} p-6`}>
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#e8f2ff] text-xl text-[#00209f]">
                <Icon aria-hidden="true" />
              </span>
              <h2 className="mb-3 text-xl font-extrabold text-[#00209f]">
                {title}
              </h2>
              <p className="leading-relaxed text-slate-700">{text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={`${card} mt-16 grid items-center gap-8 border-l-4 border-l-[#d21034] p-5 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_auto] lg:p-8`}
          {...reveal}
        >
          <img
            src={donationPic1}
            alt="Support Ronald Morand campaign"
            loading="lazy"
            className="h-[230px] w-full rounded-xl bg-[#e8f3ff] object-contain"
          />

          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#b50e2b]">
              {t("donorboxTag")}
            </p>
            <h2 className="mb-3 text-3xl font-extrabold text-[#00209f]">
              {t("donorboxTitle")}
            </h2>
            <p className="leading-relaxed text-slate-700">{t("donorboxText")}</p>
          </div>

          <a
            href={donorboxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00209f] px-5 py-3 font-bold text-white"
          >
            <FaLock aria-hidden="true" />
            {t("donateSecurely")}
            <FaArrowRight aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className={`${card} mx-auto mt-16 max-w-4xl border-t-4 border-t-[#00209f] p-5 sm:p-8`}
          {...reveal}
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-[#00209f]">
            <FaUniversity aria-hidden="true" />
            {t("bankTitle")}
          </h2>

          <div className="grid gap-5">
            {bankRows.map(({ label, value, field }) => (
              <div key={field}>
                <p className="mb-2 font-semibold text-slate-700">{label}</p>
                <div className="flex items-center justify-between gap-3 rounded-xl border border-[#00209f]/15 bg-[#f3f8ff] p-3">
                  <strong className="min-w-0 break-all text-[#14213d]">{value}</strong>
                  <button
                    type="button"
                    onClick={() => copyText(value, field)}
                    aria-label={copiedField === field ? `Copied ${label}` : `Copy ${label}`}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#00209f] text-white"
                  >
                    {copiedField === field ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-relaxed text-slate-600">{t("bankNote")}</p>
        </motion.div>

        <motion.div
          className={`${card} mx-auto mt-12 max-w-4xl border-b-4 border-b-[#d21034] p-7 text-center`}
          {...reveal}
        >
          <FaHandHoldingHeart
            className="mx-auto mb-4 text-3xl text-[#b50e2b]"
            aria-hidden="true"
          />
          <h2 className="mb-3 text-2xl font-extrabold text-[#00209f]">
            {t("thankYouTitle")}
          </h2>
          <p className="leading-relaxed text-slate-700">{t("thankYouText")}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default DonateSection;
