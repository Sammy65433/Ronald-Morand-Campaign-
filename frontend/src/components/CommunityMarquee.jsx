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

function CommunityMarquee({ variant = "community" }) {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.split("-")[0] || "en";
  const selectedMessages = variant === "about" ? aboutMessages : messages;
  const items = selectedMessages[language] || selectedMessages.en;
  const label = items.map(({ text }) => text).join(" · ");

  return (
    <div className="community-marquee" role="region" aria-label={label}>
      <div className="community-marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="community-marquee-group"
            aria-hidden={copy === 1}
          >
            {Array.from({ length: 3 }, (_, repeat) =>
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
    </div>
  );
}

export default CommunityMarquee;
