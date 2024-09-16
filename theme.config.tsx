import { logo } from "@/assets/logo";

const config = {
  logo,
  faviconGlyph: "🚀",
  project: {
    link: "https://github.com/kin-lang/kin",
  },
  banner: {
    key: "github-star-banner",
    text: (
      <a href="https://github.com/kin-lang/kin" target="_blank">
        🚀 Help us to grow - Leave a star on Kin's repo on GitHub → 🚀
      </a>
    ),
  },
  docsRepositoryBase: "https://github.com/kin-lang/wiki/tree/main/",
  footer: {
    text: "Made and Designed with 💖 by Murangwa Pacifique.",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Kin",
    };
  },
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: 'dark'
  }
};

export default config;
