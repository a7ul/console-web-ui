# console-web-ui

Examples to show case how to build web based UI (that can be invoked using curl) for console applications using Javascript(NodeJS).

Blog post: `https://medium.com/@atulanand94/building-web-based-uis-for-terminals-using-javascript-60b5eee31213`

# Demo version:

It is hosted on heroku here:

https://console-web-ui.herokuapp.com/


# To run locally:

1. `git clone` this repo
2. `npm install`
3. `npm start`

This should launch the server in port:3000

After that open another terminal and do:

**Simple Example**

`curl http://localhost:3000/hello/`

or

`wget -q -O - http://localhost:3000/hello/`


**Animated Example**

`curl http://localhost:3000/anime-hello/`

or

`wget -q -O - http://localhost:3000/anime-hello/`

-------------------


**Also, you can check out my other console web service here:** 

[http://byemck.atulr.com](http://byemck.atulr.com)