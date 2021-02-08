module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6911f3301a2e47268b09d95f3cd4f8ac',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: 'alejandroakbal',

  // basic site info (required)
  name: 'Documentation - Rule 34 App',
  domain: 'docs.r34.app',
  author: 'Alejandro Akbal',

  // open graph metadata (optional)
  description: 'Documentation for the Rule 34 App',
  socialImageTitle: 'Rule 34 App',
  socialImageSubtitle: 'Browse the most popular boorus',

  // social usernames (optional)
  twitter: 'Rule34App',
  github: 'Rule-34',
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false
}
