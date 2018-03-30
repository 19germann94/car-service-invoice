/* global TrelloPowerUp */

const Promise = TrelloPowerUp.Promise;

const PDF_ICON = 'https://cdn.glitch.com/24958953-38d3-4553-95f3-190799dcd6ea%2Fpdf-256.png?1522396648392';

const onPDFButtonClick = function () {
  $.ajax({
    url: '/pdf',
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({data: "bla"}),
    success: function (result) {
      console.log('received ', result);
    },
    error: function (error) {
      console.error(error);
    }
  });
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
