const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require('./router')
const errorHandler = require("./middleware/error-handler");

const app = express();

// Log output
app.use(morgan('dev'));
app.use(express.json())

// Use any client to request interface service resources
app.use(cors())

const PORT = process.env.PORT || 3600;

///Mount routes, all routes are prefixed with api
app.use('/api', router)
// Mounted unified server-side error handling middleware
app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});