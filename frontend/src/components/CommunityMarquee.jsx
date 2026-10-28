import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaGlobeAmericas,
} from "react-icons/fa";
import "../styles/CommunityMarquee.css";

const messages = {
  en: [
    { Icon: FaMapMarkerAlt, text: "L’AZILE, HAITI" },
    { Icon: FaUsers, text: "COMMUNITY FIRST" },
    { Icon: FaHandHoldingHeart, text: "SUPPORT THE CAMPAIGN" },
  ],
  fr: [
    { Icon: FaMapMarkerAlt, text: "L’AZILE, HAÏTI" },
    { Icon: FaUsers, text: "LA COMMUNAUTÉ D’ABORD" },
    { Icon: FaHandHoldingHeart, text: "SOUTENEZ LA CAMPAGNE" },
  ],
  ht: [
    { Icon: FaMapMarkerAlt, text: "LAZIL, AYITI" },
    { Icon: FaUsers, text: "KOMINOTE AN PREMYE" },
    { Icon: FaHandHoldingHeart, text: "SIPÒTE KANPAY LA" },
  ],
};

const aboutMessages = {
  en: [
    { Icon: FaUsers, text: "COMMUNITY" },
    { Icon: FaGlobeAmericas, text: "VISION FOR HAITI" },
    { Icon: FaHandHoldingHeart, text: "LEADERSHIP THROUGH SERVICE" },
  ],
  fr: [
    { Icon: FaUsers, text: "COMMUNAUTÉ" },
    { Icon: FaGlobeAmericas, text: "UNE VISION POUR HAÏTI" },
    { Icon: FaHandHoldingHeart, text: "LE LEADERSHIP PAR LE SERVICE" },
  ],
  ht: [
    { Icon: FaUsers, text: "KOMINOTE" },
    { Icon: FaGlobeAmericas, text: "YON VIZYON POU AYITI" },
    { Icon: FaHandHoldingHeart, text: "LIDÈCHIP ATRAVÈ SÈVIS" },
  ],
};

export default function CommunityMarquee({ variant = "community" }) {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage?.split("-")[0] || "en";
  const selectedMessages = variant === "about" ? aboutMessages : messages;
  const items = selectedMessages[language] || selectedMessages.en;

  return (
    <Link
      to="/donate"
      className="community-marquee"
      aria-label={t("donateNow")}
    >
      <div className="community-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="community-marquee-group" key={copy}>
            {[0, 1, 2].map((repeat) =>
              items.map(({ Icon, text }) => (
                <span
                  className="community-marquee-item"
                  key={`${repeat}-${text}`}
                >
                  <Icon aria-hidden="true" />
                  {text}
                </span>
              ))
            )}
          </div>
        ))}
      </div>
    </Link>
  );
}
