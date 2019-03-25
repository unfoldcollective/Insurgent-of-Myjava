const Client = require('instagram-private-api').V1;
const device = new Client.Device('insurgent-of-myjava');
const storage = new Client.CookieFileStorage(__dirname + '/myjava.json');

const user = process.env.INSTA_LOGIN;
const pass = process.env.INSTA_PASS;

module.exports = (image, caption) => {
  Client.Session.create(device, storage, user, pass)
    .then(function(session) {
      return [Client.Upload.photo(session, image), session];
    })
    .spread(function(upload, session) {
      return Client.Media.configurePhoto(
        session,
        upload.params.uploadId,
        caption
      );
    })
    .catch(error => console.error(error));
};
