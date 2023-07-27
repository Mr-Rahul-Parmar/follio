let date = new Date();

$(document).ready(function (){
   $('#copy_right_year').html(date.getFullYear())
});

// loader on Submit Button
function buttonDisabled(target) {
   $(target).attr('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
}

function buttonEnabled(target, html) {
   $(target).attr('disabled', false).html(html);
}

$('#contactForm').submit(function (e) {
   // e.preventDefault();
   var formData = new FormData(this);


   $.ajax({
      type: 'POST',
      url: "/forms/contact.php",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (result) {
         buttonEnabled('.send-btn', 'Save');
         // $("#editModal").modal('hide');
         // $('#idAlertSuccessMsg').show()
         // $('#idScriptSuccessMsg').html(result.message)
         // $('#saveBtn').html('Submit');
         // $("#saveBtn").attr("disabled", false);
         document.getElementById("vehicleForm").reset();
         vehicle_table.DataTable().ajax.reload();
      },
      error: function (data) {
         console.log(data);
      }
   });

   // if ($(this).valid()) {
   //    buttonDisabled('.send-btn')
   //
   // }
});

//jQuery Validation for Form
// $(document).ready(function () {
//
//    jQuery.validator.addMethod("noSpace", function (value, element) {
//       if ($.trim(value) == '') {
//          //$(element).val("");
//          return false;
//       } else {
//          return true;
//       }
//    }, "Space are not allowed");
//
//    jQuery.validator.addMethod("lettersonly", function (value, element) {
//       return this.optional(element) || /^[a-z0-9&," "]+$/i.test(value);
//    }, "Please enter only letters");
//
//    $('#contactForm').validate({
//       rules: {
//          vehicle_name: {
//             required: {
//                depends: function () {
//                   $(this).val($(this).val().replace(/\s+/g, " "));
//                   return true;
//                }
//             },
//             lettersonly: true,
//             noSpace: true,
//             minlength: 3,
//             maxlength: 15,
//          },
//       },
//       messages: {
//          vehicle_name: {
//             required: "Vehicle name is required.",
//          },
//       },
//       errorPlacement: function (error, element) {
//          $(element).parents('.form-error').append(error);
//       },
//    });
// });

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