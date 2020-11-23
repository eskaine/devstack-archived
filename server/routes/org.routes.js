const router = require("express").Router();
const Organization = require("../schemas/datasets/org.schema");

router.get("/", async (req, res) => {
  console.log("organization");
  try {
    let orgList = await Organization.find();
    res.status(200).json(orgList);
  } catch(err) {
    res.sendStatus(400);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let org = await Organization.findById(req.params.id);
    res.status(200).json(org);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.post("/", async (req, res) => {
  try {
    let organization = new Organization(req.body);
    await organization.save();
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.put("/:id", (req, res) => {
  try {
    let organization = Organization.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Organization.findByIdAndDelete(req.params.id);
    res.sendStatus(201);  
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
