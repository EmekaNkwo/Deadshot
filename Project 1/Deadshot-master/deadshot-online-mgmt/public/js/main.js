// // function submitMessage() {
//   $(document).ready(function () {
//     $("#contact-form").submit(function (e) {
//       e.preventDefault();
//       let name = document.getElementById("name").value;
//       let email = document.getElementById("email").value;
//       let phone = document.getElementById("phone").value;
//       let message = document.getElementById("message").value;
//       console.log(name + email + phone + message);
//       console.log("form submitted");
//       $.post('http://127.0.0.1:3000/submit-message', $(this).serialize(), function (data) {
//         console.log(data);
//           $("#alert").addClass("alert alert-success text-center");
//           $("#alert").html(response);
//       },
//         'json' // I expect a JSON response
//       );

//         // $.ajax({  
//         //   url: 'http://127.0.0.1:3000/submit-message',
//         //   type: 'post',
//         //   dataType: 'json',
//           // data: {
//           //   "name": name,
//           //   "email": email,
//           //   "phone": phone,
//           //   "message": message
//           // },
//         //   // data: $('#contact-form').serialize(),
//         //   success: function (response) {
//         //     console.log("sent")
//         //     console.log(response);
//         //     $("#alert").removeClass("alert alert-danger text-center");
//         //     $("#alert").addClass("alert alert-success text-center");
//         //     $("#alert").html(response);
//         //     $("#contact-form").reset();

//         //   },
//         //   error: function (error) {
//         //     console.log(error);
//         //     $("#alert").removeClass("alert alert-success text-center");
//         //     $("#alert").addClass("alert alert-danger text-center");
//         //     $("#alert").html("Message Failed");
//         //     // $("#contact-form").reset();
//         //   }
//         // });
//     });
//   });
// // }

// // function submitMessage() {
// //   // console.log(form);
// //   // var form = document.getElementById('contact-form');
// //   // form.onsubmit= function(e){
// //     // e.preventDefault();
// //   //   var alert = document.getElementById('alert');
// //   //   alert.className = "alert alert-success text-center";
// //   //   alert.innerHTML = 'Message Sent'
// //   //   form.reset();
// //   // }


// //   fetch(`http://localhost:3000/submit-message`)
// //   .then(function (response) {
// //     return response.text();
// //   }, function () {
// //     return 'failed';
// //   })
// //   .then(function (text) {
// //     let alert = document.getElementById('alert');

// //     if (text !== 'failed') {
// //       alert.className = "alert alert-success text-center";
// //       alert.innerHTML = text
// //     }
// //     else {
// //       alert.className = "alert alert-danger text-center";
// //       alert.innerHTML = "Message Failed"
// //     }
// //   });

// // }



