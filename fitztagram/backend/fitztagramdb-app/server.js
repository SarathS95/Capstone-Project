const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let likeRoutes = require("./routes/likeRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Fitztagram Database!"});
});

const PORT = process.env.PORT || 8080;

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/like', likeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});