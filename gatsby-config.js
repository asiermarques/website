module.exports = {
  plugins: [
      {
          resolve: "gatsby-theme-serenity",
          options: {
              title: "Asier Marqués",
              subtitle: "Blog personal",
              description: "Blog personal y reflexiones sobre gestión de ingeniería de software.",
              siteUrl: "https://asiermarques.com",
              defaultPreviewImage: "/og-default.png",
              author: {
                  name: "Asier Marqués",
                  bio: "Asier ha trabajado dirigiendo y gestionado equipos en diferentes empresas del sector tecnológico. Actualmente forma parte del equipo de gestión de ingeniería de BestSecret Group",
                  url: "https://asiermarques.com",
                  links: {
                      twitter: "https://twitter.com/asiermarques",
                      linkedin: "https://es.linkedin.com/in/asier",
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
                      href: "https://es.linkedin.com/in/asier"
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
