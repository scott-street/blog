module.exports = {
  title: 'scott street thoughts',
  tagline: 'just some thoughts',
  url: 'https://scott-street.github.io',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'scott-street', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'scott street thoughts',
      
      items: [
        
        {
          href: 'https://github.com/scott-street',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      
      copyright: `copyright © 2021 scott street. built with docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          blogSidebarTitle: 'all posts',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
