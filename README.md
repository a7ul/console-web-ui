# console-web-uis

Examples to show case how to build web based UI (that can be invoked using curl) for console applications using Javascript(NodeJS).

Blog post: <coming soon>


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