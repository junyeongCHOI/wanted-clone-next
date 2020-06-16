const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

var multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "static/");
  },
  filename: function (req, file, callback) {
    let extension = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extension);
    callback(null, basename + "-" + Date.now() + extension);
  },
});

let upload = multer({
  storage: storage,
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.post("/upload", upload.single("img"), function (req, res, next) {
      res.send({
        img_name: req.file.filename,
      });
    });

    server.get("/WdDetail/:id", (req, res) => {
      const actualPage = "/WdDetail";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
