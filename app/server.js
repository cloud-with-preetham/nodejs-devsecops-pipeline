const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api", (req, res) => {
  res.json({
    status: "OK",
    message: "Node DevSecOps Pipeline Running Successfully",
    time: new Date(),
  });
});

/*
Start server only if file is run directly
(not when imported in tests)
*/
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
