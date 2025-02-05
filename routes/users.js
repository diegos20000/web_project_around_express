const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const express = require("express");
const { getUsers, getUserById, createUser } = require("../controllers/users");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = router;
