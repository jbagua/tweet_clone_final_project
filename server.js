const http = require("http");
const express = require("express");
const app = express();
const port = 8080;
const morgan = require("morgan");
const routes = require("./routes/routes");
const postRoutes = require("./routes/post");
const getRoutes = require("./routes/get");

app.use ("/static/css",express.static(__dirname + "/static/css"))
app.use("/images",express.static(__dirname + "/images"))

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("./"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(getRoutes);
app.use(postRoutes);


const server = http.createServer(app);

server.listen(port, () =>
  console.log(`\nListening on http://localhost:${port}\n`)
);
