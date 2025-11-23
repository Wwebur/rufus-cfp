# Critical Friend Partnership
A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Demo
[Gatsby Starter Business](https://gatsby-starter-business.netlify.com)

## Features
* Complete Business Website Suite - Home Page, About Page, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Disqus and Share Support
* Elastic-Lunr Search (NEW)
* Pagination (NEW)
* Contact Form (Netlify Forms)
* Easy Configuration using `config.js` file

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Getting Started
Create your own project with Gatsby CLI:
```shell
gatsby new yourbusinessname https://github.com/v4iv/gatsby-starter-business.git 
```

## Available Scripts – it's all YARN, don't use NPM

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuration
To personalize and configure this Starter open `config.js` file and replace the default values.

```javascript
module.exports = {
  siteTitle: 'Critical Friend Partnership', // Site title.
  siteTitleAlt: 'Turning ambition & potential into reality', // Alternative site title for SEO.
  siteLogo: '/icons/icon-512x512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://criticalfriendpartnership.netlify.app', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: 'Turning ambition & potential into reality', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  siteFBAppID: '', // FB Application ID for using app insights
  googleTagManagerID: '', // GTM tracking ID.
  disqusShortname: 'gatsby-business-starter', // Disqus shortname.
  userName: 'Rufus Denne',
  userTwitter: 'rufusdenne',
  userLocation: 'London',
  userDescription: '',
  copyright: 'Copyright © Critical Friend Partnership 2020. All Rights Reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#111f44', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff', // Used for setting manifest background color.
}
```

## Deployment
Clicking the button will ask for authentication via Github, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/rufusdenne/cfp&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)
