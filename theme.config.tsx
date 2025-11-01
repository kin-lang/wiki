import { logo } from "@/assets/logo";
import { useRouter } from "next/router";

const config = {
  logo,
  faviconGlyph: "🚀",
  project: {
    link: "https://github.com/kin-lang/kin",
  },
  banner: {
    key: "github-star-banner",
    text: () => {
      const { locale } = useRouter();
      if (locale === 'rw') {
        return (
          <a href="https://github.com/kin-lang/kin" target="_blank">
            🚀 Dufashe gukura - Siga inyenyeri kuri repo ya Kin kuri GitHub → 🚀
          </a>
        );
      }
      return (
        <a href="https://github.com/kin-lang/kin" target="_blank">
          🚀 Help us to grow - Leave a star on Kin's repo on GitHub → 🚀
        </a>
      );
    },
  },
  docsRepositoryBase: "https://github.com/kin-lang/wiki/tree/main/",
  footer: {
    text: "Made and Designed with 💖 by Murangwa Pacifique. Translated by Laurent",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Kin"
    };
  },
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  search:{
    placeholder:()=>{
      const {locale} = useRouter();
      if(locale === 'rw'){
        return 'Shakisha...'
      }
      return 'Search...'
    }
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'rw', text: 'Kinyarwanda' }
  ]
};

export default config;
