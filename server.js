const express = require('express');
const cors = require('cors');
const compression = require('compression');
const pdfGenerator = require('./PDFGenerator');
const fs = require('fs');

const app = express();
app.use(cors({origin: '*'}));
app.use(compression());
app.use(express.static('src'));

app.get('/', (request, response) => response.sendFile(__dirname + '/index.html'));
app.get('/pdf', (request, response) => {
  const file = fs.createReadStream('./loremipsum.pdf');
  const stat = fs.statSync('./loremipsum.pdf');
  response.setHeader('Content-Length', stat.size);
  response.setHeader('Content-Type', 'application/pdf');
  response.setHeader('Content-Disposition', 'attachment; filename=lorem.pdf');
  file.pipe(response);
  //pdfGenerator.generatePDF(request)

});

const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
