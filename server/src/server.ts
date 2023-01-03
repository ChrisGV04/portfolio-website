import express from 'express';
import path from 'path';
import payload from 'payload';

require('dotenv').config();
const app = express();

app.use('/logo', express.static(path.join(__dirname, '../public/logo')));
app.use('/block-tmbs', express.static(path.join(__dirname, '../public/blocks')));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

app.listen(process.env.PORT);
