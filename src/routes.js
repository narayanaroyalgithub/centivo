import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// GET /users/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Handle invalid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ error: "User not found or under 21" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
