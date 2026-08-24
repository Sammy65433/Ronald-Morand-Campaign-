import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        campaign: "Ronald Morand Campaign",
        about: "About",
        community: "Community",
        donate: "Donate",
        contact: "Contact",

        heroTag: "Election Campaign 2026",
        heroTitle: "Ronald Morand Campaign",
        heroText:
          "Support Ronald Morand’s campaign for election in Haiti. Together, we can build a stronger future for the community.",
        electionDayLabel: "Election Day:",
        electionDay: "December 13, 2026",
        donateNow: "Donate Now",
        learnMore: "Learn More",

        aboutTitle: "About Ronald Morand",
        aboutText:
          "Learn more about Ronald Morand, his mission, his values, and his vision for leadership in Haiti.",

        communityTitle: "Community",
        communityText:
          "See Ronald Morand’s community work, outreach efforts, events, and impact.",

        donateTitle: "Donate",
        donateText:
          "Support the campaign and help make a difference through your contribution.",
        contribute: "Contribute",

        contactTitle: "Contact",
        contactText:
          "Reach out to the campaign for questions, support, or partnership opportunities.",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",

        footerText: "© 2025 Ronald Morand Campaign. All rights reserved."
      }
    },

    fr: {
      translation: {
        campaign: "Campagne Ronald Morand",
        about: "À propos",
        community: "Communauté",
        donate: "Faire un don",
        contact: "Contact",

        heroTag: "Campagne électorale 2026",
        heroTitle: "Campagne Ronald Morand",
        heroText:
          "Soutenez la campagne de Ronald Morand pour les élections en Haïti. Ensemble, nous pouvons construire un avenir meilleur pour la communauté.",
        electionDayLabel: "Jour de l'élection :",
        electionDay: "13 décembre 2026",
        donateNow: "Faire un don",
        learnMore: "En savoir plus",

        aboutTitle: "À propos de Ronald Morand",
        aboutText:
          "Découvrez Ronald Morand, sa mission, ses valeurs et sa vision du leadership en Haïti.",

        communityTitle: "Communauté",
        communityText:
          "Découvrez le travail communautaire de Ronald Morand, ses actions de proximité, ses événements et son impact.",

        donateTitle: "Faire un don",
        donateText:
          "Soutenez la campagne et contribuez à faire la différence.",
        contribute: "Contribuer",

        contactTitle: "Contact",
        contactText:
          "Contactez la campagne pour toute question, soutien ou opportunité de partenariat.",
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        message: "Message",
        send: "Envoyer",

        footerText: "© 2025 Campagne Ronald Morand. Tous droits réservés."
      }
    },

    ht: {
      translation: {
        campaign: "Kanpay Ronald Morand",
        about: "Konsènan",
        community: "Kominote",
        donate: "Bay don",
        contact: "Kontak",

        heroTag: "Kanpay Eleksyon 2026",
        heroTitle: "Kanpay Ronald Morand",
        heroText:
          "Sipòte kanpay Ronald Morand pou eleksyon an Ayiti. Ansanm, nou ka konstwi yon pi bon avni pou kominote a.",
        electionDayLabel: "Jou eleksyon an:",
        electionDay: "13 Desanm 2026",
        donateNow: "Bay don kounye a",
        learnMore: "Aprann plis",

        aboutTitle: "Konsènan Ronald Morand",
        aboutText:
          "Aprann plis sou Ronald Morand, misyon li, valè li yo, ak vizyon li pou lidèchip ann Ayiti.",

        communityTitle: "Kominote",
        communityText:
          "Gade travay Ronald Morand ap fè nan kominote a, efò sansibilizasyon yo, evènman yo, ak enpak li.",

        donateTitle: "Bay don",
        donateText:
          "Sipòte kanpay la epi ede fè yon diferans ak kontribisyon ou.",
        contribute: "Kontribye",

        contactTitle: "Kontak",
        contactText:
          "Kontakte kanpay la pou kesyon, sipò, oswa opòtinite patenarya.",
        name: "Non",
        email: "Imèl",
        phone: "Telefòn",
        message: "Mesaj",
        send: "Voye",

        footerText: "© 2025 Kanpay Ronald Morand. Tout dwa rezève."
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
