const express = require('express');
const util = require('./src/util');
const hello = require('./src/ansi/animations/hello');

const PORT = process.env.PORT || 3000;

const app = express();

// simple hello route
app.get('/hello', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    await res.send(hello.hello());
    return null;
  }
  return next();
});
app.use('/hello', express.static('static/hello'));

// animated example
app.get('/anime-hello', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    const stream = util.getStream(req, res);
    await hello.animateHello(stream);
    return null;
  }
  return next();
});
app.use('/anime-hello', express.static('static/hello'));

// 404 - not found
app.use('*', (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    return res.send(`
    Hit: curl http://localhost:3000/anime-hello
    or
    Hit: curl https://console-web-ui.herokuapp.com/anime-hello

    Possible routes: 
    /hello - Gives a nice and simple hello
    /anime-hello - Gives a nice animated hello
   
  `);
  }
  return next();
});

app.use('*', express.static('static/404'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
