module.exports = {
  plugins: [
      {
          resolve: "gatsby-theme-serenity",
          options: {
              title: "Asier Marqués",
              subtitle: "Blog personal",
              description: "Blog personal y artículos sobre ingeniería de software.",
              siteUrl: "https://asiermarques.com",
              defaultPreviewImage: "/og-default.png",
              author: {
                  name: "Asier Marqués",
                  bio: "Asier trabaja actualmente con el rol de Engineering Manager en Packlink Shipping.",
                  url: "https://asiermarques.com",
                  links: {
                      twitter: "https://twitter.com/asiermarques",
                      linkedin: "https://linkedin.com/in/asier",
                      github: "https://github.com/asiermarques",
                      instagram: "https://instagram.com/asiermarques",
                      mail: "mailto:asiermarques@gmail.com"
                  }
              },
              links: [
                  {
                      title: "Artículos",
                      href: "/"
                  },
                  {
                      title: "Sobre mí",
                      href: "/es/sobre-mi"
                  },
                  {
                      title: "CV",
                      href: "/es/cv"
                  },
                  {
                      title: "RSS",
                      href: "/rss.xml"
                  },
              ],
              articles_per_page: 10,
              language: "es"
          }
      },
      'gatsby-plugin-remove-serviceworker'
  ]
}
