require("dotenv").config();

db_url = `mongodb+srv://mrthomson100:Jack1998@cluster09.uci9ewh.mongodb.net/${process.env.DB_NAME}`;

module.exports = { db_url };
