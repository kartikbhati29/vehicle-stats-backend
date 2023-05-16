const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContactbyId,
  updateContactbyId,
  newContact,
  deleteContactbyId,
} = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(newContact);

router
  .route("/:id")
  .get(getContactbyId)
  .put(updateContactbyId)
  .delete(deleteContactbyId);

module.exports = router;
