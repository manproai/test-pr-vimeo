let Vimeo = require('vimeo').Vimeo;
  
let client = new Vimeo(
  "e87860aa6c48ab1f5d46d9e726ba9a0394b57f3b", 
  "LBQrhnf+AC6wx5wvKqLJZLgtCpPyJAsdPfUE7oPgYOIyk5z835xS07w7XIXq2JGus+wIntugNyJSRoZR/JRpOY58bTTWn3P5gIkh4cgf1M+7Y0o6NPXDOS334lH/g4rS", 
  "5cb584ea4bd49332ab0bd6eacaae6389");

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