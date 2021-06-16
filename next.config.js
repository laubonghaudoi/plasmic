
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['iWUS2aohWQyYqtmqPmM2Jw'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  