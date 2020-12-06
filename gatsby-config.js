module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-serenity",
      options: {
           title: "Asier Marqués",
           description: "A minimal theme for your personal blog or webpage",
           author: {
             name: "Asier Marqués",
             bio: "Software Engineer",
             links: {
                 twitter: "https://twitter.com/asiermarques",
                 linkedin: "https://linkedin.com/in/asier",
                 github: "https://github.com/asiermarques",
                 instagram: "https://instagram.com/asiermarques",
                 mail: ""
             }
           },
           links: [
               {
                   title: "Articles",
                   href: "/"
               },
               {
                   title: "About me",
                   href: "/info/about-me"
               },
           ],
           articles_per_page: 4,
           language: "en"
       },
    },
  ],
}
