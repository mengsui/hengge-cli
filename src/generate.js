
const vue3templatePure = require('./scripts/vue3-template-pure');


exports.run = function (name, type) {
  switch (type) {
    case 'vue3-template-pure':
      vue3templatePure.run(name);
      break;

    default:
      console.log('开发中...')
      break;
  };
};
