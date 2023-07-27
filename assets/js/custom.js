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