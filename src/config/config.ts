require('dotenv').config();

const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME;

export { PORT, DB_NAME };
