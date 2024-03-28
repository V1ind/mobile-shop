const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const uri =
  "mongodb+srv://petertotaltrucking:Narek@authorization01.jhsbbug.mongodb.net/?retryWrites=true&w=majority&appName=authorization01";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  lastName: String,
  age: Number,
  gender: String,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());
app.post("/api/user", async (req, res) => {
  try {
    const { name, lastName, age, email, gender } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email address already in use" });
    }

    const newUser = new User({
      name,
      lastName,
      age,
      email,
      gender,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user", async (req, res) => {
  console.log("brat");
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
