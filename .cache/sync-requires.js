// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/kirill/workspace/homepage/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/kirill/workspace/homepage/src/pages/index.js")),
  "page-component---src-pages-about-js": preferDefault(require("/Users/kirill/workspace/homepage/src/pages/about.js")),
  "page-component---src-pages-contact-js": preferDefault(require("/Users/kirill/workspace/homepage/src/pages/contact.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/kirill/workspace/homepage/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/kirill/workspace/homepage/.cache/json/index.json"),
  "about.json": require("/Users/kirill/workspace/homepage/.cache/json/about.json"),
  "contact.json": require("/Users/kirill/workspace/homepage/.cache/json/contact.json")
}

exports.layouts = {

}