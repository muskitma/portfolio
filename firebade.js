// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
//                 import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
            
//                 const appSetting = {
//                     databaseURL: "https://mudiyalla-a1c67-default-rtdb.firebaseio.com/",
//                 };
            
//                 const app = initializeApp(appSetting);
//                 const database = getDatabase(app);
//                 const usersListInDB = ref(database, "users");
            
//                 const idlEl = document.querySelector("#idl");
//                 const nameEl = document.querySelector("#name");
//                 const emailEl = document.querySelector("#email");
//                 const passwordEL=document.querySelector("#password");
//                 const messagesEl = document.querySelector("#message");
//                 const contactForm = document.querySelector("#contact");
            
//                 contactForm.addEventListener("submit", function (e) {
//                     e.preventDefault(); // Prevent default form submission behavior
            
//                     // If there is a hidden ID, exit the function
//                     if (idlEl.value) {
//                         return;
//                     }
            
//                     // Create a new user object
//                     const newUser = {
//                         name: nameEl.value.trim(),
//                         email: emailEl.value.trim(),
//                         password:passwordEL.value.trim(),
//                         message: messagesEl.value.trim()
                       
                        
//                     };
            
//                     // Push the new user data to Firebase
                    
//                     push(usersListInDB, newUser)
//                         .then(() => {
//                             alert("Message submitted successfully!");
                            
//                         })
//                     clearElements();    
//                 });
//                 function clearElements(){
//                     nameEl.value = "";
//                     emailEl.value = "";
//                     passwordEL.value = "";
//                     messagesEl.value = "";
//                   }
        

//                 //  !------ !password-------->
// //                 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// // import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// // const appSetting = {
// //     databaseURL: "https://mudiyalla-a1c67-default-rtdb.firebaseio.com/",
// // };

// // const app = initializeApp(appSetting);
// // const database = getDatabase(app);
// // const usersListInDB = ref(database, "users");

// // const idlEl = document.querySelector("#idl");
// // const nameEl = document.querySelector("#name");
// // const emailEl = document.querySelector("#email");
// // const passwordEL = document.querySelector("#password");
// // const messagesEl = document.querySelector("#message");
// // const contactForm = document.querySelector("#contact");

// // contactForm.addEventListener("submit", function (e) {
// //     e.preventDefault(); // Prevent default form submission behavior

// //     // Check if hidden ID field has a value
// //     if (idlEl.value) {
// //         return;
// //     }

// //     // Password length validation
// //     if (passwordEL.value.trim().length < 8) {
// //         alert("Password must be at least 8 characters long.");
// //         return; // Exit if password is too short
// //     }

// //     // Create a new user object
// //     const newUser = {
// //         name: nameEl.value.trim(),
// //         email: emailEl.value.trim(),
// //         password: passwordEL.value.trim(),
// //         message: messagesEl.value.trim(),
// //     };

// //     // Push the new user data to Firebase
// //     push(usersListInDB, newUser)
// //         .then(() => {
// //             alert("Message submitted successfully!");
// //             clearElements(); // Clear form inputs after successful submission
// //         })
// //         .catch((error) => {
// //             console.error("Error saving data:", error.message);
// //             alert("Error saving data: " + error.message);
// //         });
// // });

// // // Function to clear input fields
// // function clearElements() {
// //     nameEl.value = "";
// //     emailEl.value = "";
// //     passwordEL.value = "";
// //     messagesEl.value = "";
// // }
