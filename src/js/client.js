/* global TrelloPowerUp */

const Promise = TrelloPowerUp.Promise;

const PDF_ICON = 'https://cdn.glitch.com/24958953-38d3-4553-95f3-190799dcd6ea%2Fpdf-256.png?1522396648392';

const onPDFButtonClick = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'pdf', true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = (e) => {
    console.log(xhr.response);
    const blob = new Blob([xhr.response], {type: "application/pdf"});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "Invoice.pdf";
    link.click();
  };
  xhr.send();
};

TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            icon: PDF_ICON,
            text: 'Print PDF',
          callback: onPDFButtonClick
        }];
    }
});
