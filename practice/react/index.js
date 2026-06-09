const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// database configuration
const sequelize = require("");

// Models
const User = require("");
const ForgotPassword = require("");
const Message = require("");
const Group = require("");
const GroupMember = require("");

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(
    cors({
        origin: "http://127.0.0.1.3000",
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }),
);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require("");
const passwordRoutes = require("");
const groupRoutes = require("");
const adminRoutes = require("");
const chatRoutes = require("");

// Association

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
