const express = require("express");
const router = express.Router();

const { sendContactMail } = require("../controllers/contactControllers");

router.post("/", sendContactMail);

module.exports = router;
