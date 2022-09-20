const express = require("express");
const { getAllUsers, getOneUsers, createUsers, deleteUsers, updateUsers } = require("../controllers/user.controller");
const router = express.Router();


router.get("/", getAllUsers);
router.get("/:id", getOneUsers);
router.delete("/:id", deleteUsers);
//patch ar poriborte put o bebohar kora jayto
router.patch("/:id", updateUsers);
router.post("/", createUsers);

module.exports = router;