let date = new Date();

$(document).ready(function (){
   $('#copy_right_year').html(date.getFullYear())
});

setInterval( findTawkAndRemove, 100 );
function findTawkAndRemove() {
   let parentElement = document.querySelector("iframe[title*=chat]:nth-child(2)");

   if ( parentElement ) {

      let element = parentElement.contentDocument.querySelector(`a[class*=tawk-branding]`);

      if ( element ) {
         element.remove();
      }
   }
}

gapi.load('client', function () {
   gapi.client.init({
      apiKey: 'AIzaSyAWGoElaNihjTnfjlz9FroL5xSwOY-yTAA',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
   }).then(function () {
      const sheets = gapi.client.sheets.spreadsheets;
      const spreadsheetId = '1ZKWvZwTrxNysM9CZ0U4PxBlE3MTGlojSZieo4nLXoOY';
      const sheetName = 'Sheet1';

      sheets.values.get({
         spreadsheetId: spreadsheetId,
         range: `${sheetName}!A:C`,
      }).then(function (response) {
         const values = response.result.values;
         values.forEach(img_link => {
            const drive_img_src = 'https://drive.google.com/uc?id=';
            if (img_link[0] == 'me') {
               $('.me').attr('src', img_link[2]);
            }
         });
      });
   });
});