import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SupportSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#e8f3ff] px-4 py-16 text-[#14213d] sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <FaHandHoldingHeart
          className="mx-auto mb-5 text-3xl text-[#b50e2b]"
          aria-hidden="true"
        />

        <h2 className="mb-5 font-['Outfit'] text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-tight text-[#00209f]">
          {t("supportTitle")}
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-700">
          {t("supportText")}
        </p>

        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {[
            { amount: "$250", text: t("support25") },
            { amount: "$500", text: t("support50") },
            { amount: "$1000", text: t("support100") },
          ].map((card) => (
            <div
              key={card.amount}
              className="rounded-2xl border border-[#00209f]/15 border-t-4 border-t-[#d21034] bg-white p-6 shadow-[0_14px_34px_rgba(0,32,159,0.08)]"
            >
              <strong className="mb-3 block text-3xl font-extrabold text-[#00209f]">
                {card.amount}
              </strong>
              <p className="leading-relaxed text-slate-700">{card.text}</p>
            </div>
          ))}
        </div>

        <Link
          to="/donate"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b50e2b] px-7 py-3 font-extrabold text-white transition hover:bg-[#960b23] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
        >
          {t("contributeToday")}
          <FaArrowRight aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
}

export default SupportSection;
