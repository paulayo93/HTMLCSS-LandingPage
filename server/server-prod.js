const path = require('path');
const express = require('express');

const port = process.env.PORT;

const app = express(), 
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
