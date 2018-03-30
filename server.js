const express = require('express');
const cors = require('cors');
const compression = require('compression');
const pdfGenerator = require('src/js/PDFGenerator');

const app = express();
app.use(cors({origin: '*'}));
app.use(compression());
app.use(express.static('src'));

app.get('*', (request, response) => response.sendFile(__dirname + '/index.html'));
app.get('/pdf', (request, response) => {
  pdfGenerator.generatePDF(request)
});

const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
