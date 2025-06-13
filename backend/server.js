require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const googles = require("./model/modelSchema");

app.use(cors());
const PORT = process.env.PORT || 5500;

app.listen(PORT, async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("Mongodb connected successfully ");
      })
      .catch((err) =>
        console.error("Error connecting to MongoDB", err.message)
      );
  } catch (error) {
    console.error("fetching database error", error);
  }
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(express.json());

app.get("/search", async (req, res) => {
  const query = req.query.name;

  try {
    const results = await googles.find({ Title: new RegExp(query, "i") });
    res.json(results);
  } catch (error) {
    console.log("Error in database:", error);
    res.status(500).json({ error: "Internal Server" });
  }
});

const crawl = async (startUrl) => {
  const queue = [startUrl];
  const visited = new Set();
  let crawledCount = 0;

  while (queue.length > 0 && crawledCount < 20) {
    const currentUrl = queue.shift();

    if (visited.has(currentUrl)) {
      continue;
    }

    try {
      const response = await axios.get(currentUrl);
      const $ = cheerio.load(response.data);

      const title = $("title").text();
      const desc = $('meta[name="description"]').attr("content") || "";

      const links = [];
      $("a").each((_, element) => {
        const link = $(element).attr("href");
        if (link && !visited.has(link)) {
          links.push(link);
          queue.push(link);
        }
      });

      visited.add(currentUrl);
      crawledCount++;

      const page = new googles({
        Url: currentUrl,
        Title: title,
        Description: desc,
        links: links,
      });
      await page.save();
      console.log(`Crawled: ${currentUrl}`);
    } catch (error) {
      console.error(`Error crawling ${currentUrl}: ${error.message}`);
    }
  }
  console.log("SUCCESSFULLY CRAWLED 20 PAGES ....!!!");
};

app.post("/crawl", async (req, res) => {
  const { url } = req.body;
  if (!url) console.log("url required.......!!!!");

  await crawl(url);
  res.send("Crawling started");
});
