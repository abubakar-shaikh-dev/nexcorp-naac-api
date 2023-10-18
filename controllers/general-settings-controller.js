const { Role } = require("../models");

async function addRole(req, res) {
  const { name } = req.body;

  try {
    await Role.create({
      name: name,
    });

    return res.status(201).json({ msg: "Role Created" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error", error });
  }
}

module.exports = {
  addRole,
};
