const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Routes
const contactRoutes = require("./routes/website/contactRoutes");

// API Route
app.use("/api/contact", contactRoutes);

// Server Run
const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});