const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || "dev"; //production or dev
const dbUri = process.env.MONGODB_URI || `mongodb://localhost/ideally-${env}`;
const secret = process.env.SECRET || "ihaveanidea";

module.exports = { port, dbUri, secret };
