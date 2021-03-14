class Employee {
  constructor(firstName, lastName, job, skills, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = skills;
    this.country = country;
    this.avatarUrl = avatarUrl
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let employee1 = new Employee("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg")

let employee2 = new Employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
let employee3 = new Employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

function createEmployeeCard(employee) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1")
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("d-flex", "col-12", "profile-card")
  innerFlex.append(cardDiv);

  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");
  cardDiv.append(leftInfo);

  let div1 = document.createElement("div");
  div1.classList.add("py-2");
  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);
  
  let nameTitle = document.createElement("h4");
  nameTitle.innerHTML = employee.getFullName();
  
  let employeeJob = document.createElement("p");
  let employeeSkill = document.createElement("p");
  let employeeCountry = document.createElement("p");
  
  employeeJob.innerHTML = `Job : <br>${employee.job}`;
  employeeSkill.innerHTML = `Skill : <br>${employee.skills}`;
  employeeCountry.innerHTML = `Country :<br>${employee.country}`;
  
  div1.append(employeeJob);
  div2.append(employeeSkill);
  div3.append(employeeCountry);


  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);
  
  let rightInfo = document.createElement("div");
  let rightDiv = document.createElement("div");
  rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");
  let rightImage = document.createElement("img");
  rightImage.classList.add("avatar");
  rightImage.src = employee.avatarUrl;

  rightDiv.append(rightImage);
  rightInfo.append(rightDiv);

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  let profiles = document.getElementById("profiles");
  profiles.append(innerFlex);
}

createEmployeeCard(employee1);
createEmployeeCard(employee2);
createEmployeeCard(employee3);
