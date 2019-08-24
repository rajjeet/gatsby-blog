# Gatsby Blog
The codebase I'm using to run my personal blog at https://ortmesh.com. 

### Setup
```
npm install -g gatsby
npm install
```
Add `secrets.js` to project root and specify `GOOGLE_ANALYTICS_TRACKING_ID`. 
If you're not using Google Analytics, remove the plugin code from `gatsby-config.js`.

### Motivation
I wanted a blog site that I can fully customize and be cheap to run.
Hence, I chose [GatsbyJS](https://gatsbyjs.org).

### Adding Pages
To create posts, see `src/pages/posts`.
To create project pages for your portfolio, see `src/pages/projects`.
Static pages can be added directly under `src/pages`.

Remove my pages and add your own. 


