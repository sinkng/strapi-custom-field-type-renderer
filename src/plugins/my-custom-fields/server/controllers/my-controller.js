'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('my-custom-fields')
      .service('myService')
      .getWelcomeMessage();
  },
};
