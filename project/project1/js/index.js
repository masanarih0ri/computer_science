// <div class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
//     <div class="d-flex align-items-center col-md-7 col-10 m-1">
//         <div class="d-flex col-12 profile-card">
//
//             左半分
//             <div class="col-8 py-3">
//                 <h4>Kaiden Herman</h4>
//                 <div class="py-2">
//                     <p>Job : <br>Software Engineer</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Skill : <br>C++, C#, Java, PHP, JavaScript, Python</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Country :<br>United States</p>
//                 </div>
//             </div>

//         </div>
//     </div>
// </div>

let innerFlex = document.createElement("div");
innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1")

let cardDiv = document.createElement("div");
cardDiv.classList.add("d-flex", "col-12", "profile-card");
innerFlex.appendChild(cardDiv);

let leftInfo = document.createElement("div");
leftInfo.classList.add("col-8", "py-3");
cardDiv.appendChild(leftInfo);

let div1 = document.createElement("div");
div1.classList.add("py-2");
// div1を元にdiv2,3を作る
div2 = div1.cloneNode(true);
div3 = div1.cloneNode(true);

// div1-3にそれぞれの情報を入れていく


let nameTitle = document.createElement("h4");
nameTitle.innerHTML = "Kaiden Herman";

let employeeJob = document.createElement("p");
let employeeSkill = document.createElement("p");
let employeeCountry = document.createElement("p");

employeeJob.innerHTML = "Job : <br>Software Engineer";
employeeSkill.innerHTML = "Skill : <br>C++, C#, Java, PHP, JavaScript, Python";
employeeCountry.innerHTML = "Country :<br>United States";

div1.appendChild(employeeJob);
div2.appendChild(employeeSkill);
div3.appendChild(employeeCountry);


leftInfo.appendChild(nameTitle);
leftInfo.appendChild(div1);
leftInfo.appendChild(div2);
leftInfo.appendChild(div3);

let rightInfo = document.createElement("div");
let rightDiv = document.createElement("div");
rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");
let rightImage = document.createElement("img");
rightImage.classList.add("avatar");
rightImage.src = "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg";

rightDiv.appendChild(rightImage);
rightInfo.appendChild(rightDiv);

cardDiv.appendChild(leftInfo);
cardDiv.appendChild(rightInfo);

let profiles = document.getElementById("profiles");
profiles.appendChild(innerFlex);
console.log(profiles);
// profiles.appendChild(innerFlex);