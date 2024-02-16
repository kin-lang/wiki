const config = {
  logo: <b>Kin</b>,
  project: {
    link: "https://github.com/kin-lang/kin",
  },
  docsRepositoryBase: "https://github.com/kin-lang/wiki",
  footer: {
    text: "Made and Designed with 💖 by Murangwa Pacifique.",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Kin'
    }
  }
};

export default config;
