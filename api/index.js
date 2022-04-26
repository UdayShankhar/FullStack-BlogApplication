const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")
const PORT = process.env.PORT || 8000
const url = process.env.MONGO_URL
// const cors = require("cors")
// var corsOptions = { origin: true }
app.use(express.json())
// app.use(cors(corsOptions))
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`DB is connected`);
}).catch((err) => {
    console.log(err.message);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.get("/", (req, res) => {
    res.send("Welcome")
})
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})