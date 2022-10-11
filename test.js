let Vimeo = require('vimeo').Vimeo;
  
let client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

  client.request({
    method: 'GET',
    path: '/videos/707012696',
    fields: 'files'
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log('error');
      console.log(error);
    } else {
      console.log('body');
      console.log(body.player_embed_url);
    }
   
    // console.log('status code');
    // console.log(status_code);
    // console.log('headers');
    // console.log(headers);
  })