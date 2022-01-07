const Translate = require('../index');

Translate(`Hey i working...\nWas up?`, { to: 'ar' }).then(function (data) {
  console.log(data);
});