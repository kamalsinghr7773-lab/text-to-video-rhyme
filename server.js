import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const text = req.body.text;

  // TODO: Add your AI API call here.
  // For now returning dummy video URL.
  res.json({ videoUrl: "https://example.com/dummy.mp4" });
});

app.listen(3000, () => console.log("Server running"));
