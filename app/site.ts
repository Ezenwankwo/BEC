// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Benita Eye Clinic',
  description: '',
  logo: 'benita.png',
  author: 'Benita Eye Clinic',
  url: 'https://www.benitaeyeclinic.com',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  ogImageUrl: 'hero.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@benitaeyeclinic',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Blog',
        icon: 'i-mdi-home',
        to: '/blog',
      },
      {
        title: 'Contact',
        icon: 'i-mdi-home',
        to: '/volunteer',
      },
    ],
    secondary: [
      {
        title: 'Book Appointment',
        icon: 'i-mdi-home',
        to: '/volunteer',
      },
    ],
  },
}
