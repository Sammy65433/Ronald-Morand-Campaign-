import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaHandHoldingHeart,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

import contactImg from "../assets/Morand4.jpeg";
import "../styles/ContactSection.css";

const inputClass =
  "w-full rounded-xl border border-[#00209f]/20 bg-white px-4 py-3.5 text-base text-[#14213d] outline-none transition placeholder:text-slate-500 focus:border-[#00209f] focus:ring-4 focus:ring-[#00209f]/10";

function ContactSection() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mbgjodad");

  return (
    <section className="contact-page relative isolate overflow-hidden text-[#14213d]">
      <div className="contact-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00209f]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#00209f] sm:text-sm">
            <FaEnvelope aria-hidden="true" />
            {t("contactTag")}
          </p>
          <h1 className="mb-5 font-['Outfit'] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#00209f]">
            {t("contactTitle")}
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            {t("contactSubtext")}
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="grid gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#00209f]/15 border-t-4 border-t-[#00209f] bg-white p-2 shadow-[0_16px_40px_rgba(0,32,159,0.1)]">
              <img
                src={contactImg}
                alt="Ronald Morand"
                loading="lazy"
                className="block h-[280px] w-full rounded-xl object-cover"
              />
            </div>

            <div className="rounded-2xl border border-[#00209f]/15 bg-white/95 p-6 shadow-[0_16px_40px_rgba(0,32,159,0.08)]">
              <div className="flex gap-4 border-b border-slate-200 py-4 first:pt-0">
                <FaEnvelope
                  className="mt-1 shrink-0 text-xl text-[#00209f]"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h2 className="font-extrabold text-[#00209f]">
                    {t("emailLabel")}
                  </h2>
                  <a
                    href="mailto:Rmorand2026@gmail.com"
                    className="break-all text-slate-700 underline underline-offset-2 hover:text-[#00209f]"
                  >
                    Rmorand2026@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-slate-200 py-4">
                <FaPhoneAlt
                  className="mt-1 shrink-0 text-xl text-[#00209f]"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-extrabold text-[#00209f]">Zelle</h2>
                  <p className="text-slate-700">267-616-3905</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-xl text-[#00209f]"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-extrabold text-[#00209f]">
                    {t("campaignSupport")}
                  </h2>
                  <p className="leading-relaxed text-slate-700">
                    {t("campaignSupportText")}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#00209f]/15 border-t-4 border-t-[#d21034] bg-white/95 p-6 text-center shadow-[0_16px_40px_rgba(0,32,159,0.08)]">
              <FaHandHoldingHeart
                className="mx-auto mb-4 text-3xl text-[#b50e2b]"
                aria-hidden="true"
              />
              <h2 className="mb-2 text-2xl font-extrabold text-[#00209f]">
                {t("contactCtaTitle")}
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                {t("contactCtaText")}
              </p>
              <a
                href="https://donorbox.org/ronald-morand-campaign-fund"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#b50e2b] px-6 py-3 font-extrabold text-white transition hover:bg-[#960b23] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
              >
                {t("contactDonateNow")}
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-[#00209f]/15 border-t-4 border-t-[#00209f] bg-white/95 p-5 shadow-[0_20px_50px_rgba(0,32,159,0.1)] sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {state.succeeded ? (
              <p role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 font-bold text-green-800">
                Thank you. Your message has been sent successfully.
              </p>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-bold text-[#14213d]" htmlFor="contact-name">
                      {t("fullName")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-bold text-[#14213d]" htmlFor="contact-email">
                      {t("emailAddress")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <div>
                  <label className="mb-2 block font-bold text-[#14213d]" htmlFor="contact-phone">
                    {t("phone")}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-bold text-[#14213d]" htmlFor="contact-message">
                    {t("messagePlaceholder")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    className={`${inputClass} min-h-[180px] resize-y`}
                    required
                  />
                </div>

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00209f] px-6 py-3 font-extrabold text-white transition hover:bg-[#173bb9] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00209f]"
                >
                  <FaPaperPlane aria-hidden="true" />
                  {state.submitting ? "Sending..." : t("sendMessage")}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
