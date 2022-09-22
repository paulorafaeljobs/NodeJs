const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Testando o Node Js na Vercel",
    message: "Sucesso",
  });
});

module.exports = router;
