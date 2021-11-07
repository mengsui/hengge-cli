
const vue3templateComponent = require('./scripts/vue3-template-component');
const vue3templatePage = require('./scripts/vue3-template-page');

exports.run = function (name, type) {
  switch (type) {
    case 'vue3-template-component':
      vue3templateComponent.run(name);
      break;
    case 'vue3-template-page':
      vue3templatePage.run(name);
      break;

    default:
      console.log('开发中...')
      break;
  };
};
