module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-serenity",
      options: {
           title: "Asier Marqués",
           description: "Blog personal y artículos sobre ingeniería de software.",
           author: {
             name: "Asier Marqués",
             bio: "Software Engineer",
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
                   href: "/info/about-me"
               },
               {
                   title: "CV",
                   href: "/info/cv"
               },
           ],
           articles_per_page: 4,
           language: "es"
       },
    },
  ],
}
