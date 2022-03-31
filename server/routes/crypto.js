const express = require("express");
const request = require("superagent");
const router = express.Router();

router.get("/", (req, res) => {
  return request
    .get(`https://coinranking1.p.rapidapi.com/coins`)
    .set("X-RapidAPI-Key", `668afa388emshb3878c6c16becdcp1e98fejsn7dfe59adb250`)
    .then((resp) => {
      res.json(resp.body);
    })
    .catch((err) => {
      console.log("api is failing", err.message);
    });
});

module.exports = router;
