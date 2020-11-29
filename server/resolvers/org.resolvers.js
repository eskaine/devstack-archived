const Organization = require("../schemas/datasets/org.schema");

const getOrgs = async () => {
    try {
        const orgs = await Organization.find().sort({ username: "asc" });
        return orgs;
      } catch (err) {
        throw new Error(err);
      }
};

module.exports = {
  Query: {
    getOrgs,
  },
};