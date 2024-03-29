// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fly Falcons Fly News',
  tagline: 'Creative Minds Soar Above All',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://flyfalconsfly.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, /*{
          path: 'articles/politics',
          routeBasePath: '/articles/politics/',
          blogTitle: 'Fly Falcons Fly News',
          blogDescription: 'We are Fly Falcons Fly, a student run news website.',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'business',       
        routeBasePath: '/articles/business',
        path: './articles/business',
        blogTitle: 'Business',
        blogDescription: 'Business news from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'entertainment',       
        routeBasePath: '/articles/entertainment',
        path: './articles/entertainment',
        blogTitle: 'Politics',
        blogDescription: 'Entertainment articles from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
     }, 
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'fashion',       
        routeBasePath: '/articles/fashion',
        path: './articles/fashion',
        blogTitle: 'Fashion',
        blogDescription: 'Fashion articles from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
     },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'local',       
        routeBasePath: '/articles/local',
        path: './articles/local',
        blogTitle: 'Politics',
        blogDescription: 'Local articles from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
     }, 
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'politics',       
        routeBasePath: '/articles/politics',
        path: './articles/politics',
        blogTitle: 'Politics',
        blogDescription: 'Politics articles from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
     }, 
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'sports',       
        routeBasePath: '/articles/sports',
        path: './articles/sports',
        blogTitle: 'Business',
        blogDescription: 'Sports news from Fly Falcons Fly News.',
        blogSidebarTitle: 'Recent articles',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        authorsMapPath: '../authors.yml',
      },
    ],
  ],

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
      async: true,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/react-bootstrap/dist/react-bootstrap.min.js',
      async: true,
    },
    {
      src: 'https://kit.fontawesome.com/c4921c6bdb.js',
      async: true,
    },
    {
      src: 'scrollAnimation.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      defaultMode: 'dark',
      announcementBar: {
        id: 'alpha',
        content: 'Note: This website is currently a work in progress and is in active development. Report any bugs and issues <a target="_blank" href="https://github.com/merge1973/flyfalconsfly">here</a>.',
        backgroundColor: '#ffffff',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Fly Falcons Fly',
        logo: {
          alt: '',
          src: '/img/favicon.png',
        },
        items: [
          {to: '/business', label: 'Business', position: 'left'},
          {to: '/entertainment', label: 'Entertainment', position: 'left'},
          {to: '/fashion', label: 'Fashion', position: 'left'},
          {to: '/local', label: 'Local', position: 'left'},
          {to: '/politics', label: 'Politics', position: 'left'},          
          {to: '/sports', label: 'Sports', position: 'left'},

          {type: 'doc', docId: 'intro', position: 'right', label: 'Guides'},      
          {to: '/about', label: 'About Us', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Business',
                to: '/business',
              },
              {
                label: 'Entertainment',
                to: '/entertainment',
              },
              {
                label: 'Fashion',
                to: '/fashion',
              },
              {
                label: 'Local',
                to: '/local',
              },
              {
                label: 'Politics',
                to: '/politics',
              },
              {
                label: 'Sports',
                to: '/sports',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/merge1973/flyfalconsfly',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ethan Chey. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {
    shortDescription: `Student run since ${new Date().getFullYear()}`,
  },
};

module.exports = config;
