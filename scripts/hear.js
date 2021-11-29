// $(window).bind( 'hashchange', function(e){
//
//   let hash = location.hash;
//   let details = null;
//
//   if (hash == "#hear"){
//     console.log('HEAR');
//     //Fetch all the details element.
//     details = document.querySelectorAll("details");
//
//     // Add the onclick listeners.
//     details.forEach((targetDetail) => {
//       targetDetail.addEventListener("click", () => {
//         // Close all the details that are not targetDetail.
//         details.forEach((detail) => {
//           if (detail !== targetDetail) {
//             detail.removeAttribute("open");
//           }
//         });
//           // Scroll to detail
//           console.log(targetDetail);
//           targetDetail.scrollIntoView({behavior: "smooth", block: "start"});
//       });
//     });
//   }
//   else {
//     if (details != null) {
//       details = null;
//     }
//   }
//  });




// $(document).on("click", "details" , () => {
//             //Fetch all the details element.
//             const details = document.querySelectorAll("details");
//
//             // Add the onclick listeners.
//             details.forEach((targetDetail) => {
//               targetDetail.addEventListener("click", () => {
//                 // Close all the details that are not targetDetail.
//                 details.forEach((detail) => {
//                   if (detail !== targetDetail) {
//                     detail.removeAttribute("open");
//                   }
//                 });
//                   // Scroll to detail
//                   console.log(targetDetail);
//                   targetDetail.scrollIntoView({behavior: "smooth", block: "start"});
//               });
//             });
//         });
