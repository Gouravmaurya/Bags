const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

router.get("/admin", function (req, res) {
  let success = req.flash("success")
  res.render("createproducts",{success});
});


console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(504).send("Maximum limit reached for owners");
    }
    let { fullname, email, password } = req.body;
    let owner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(owner);
  });
}

module.exports = router;
