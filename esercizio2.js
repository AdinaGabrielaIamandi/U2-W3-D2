class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

let p1 = new Person("Abigail Anderson", 30, "abigail.angel@example.com");
let p2 = new Person("Alexander Brown", 21, "alexander.brown@example.com");
let p3 = new Person("Ava Byrne", 55, "ava.byrne@example.com");
let p4 = new Person("Callum Byrne", 25, "callum.byrne@example.com");
let p5 = new Person("Carol Clark", 35, "carol.clark@example.com");
let p6 = new Person("Liam Lewis", 35, "liam.lewis@example.com");
let p7 = new Person("Mike Smith", 40, "mike.smith@example.com");
let p8 = new Person("Nathan Nash", 45, "nathan.nash@example.com");
let p9 = new Person("Peter Parker", 50, "peter.parker@example.com");
let p10 = new Person("John Smith", 49, "john.smith@example.com");

class Pagination {
  constructor(items = [], pageSize = 3) {
    this.items = items;
    this.pageSize = pageSize;
  }

  getTotalPages() {
    return Math.ceil(this.items.length / this.pageSize);
  }

  getPageItems(pageNumber) {
    let startIndex = (pageNumber - 1) * this.pageSize;
    console.log("Start index", startIndex);
    let endIndex = startIndex + this.pageSize;
    console.log("End index", endIndex);
    return this.items.slice(startIndex, endIndex);
  }
}
let listItems = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

let pagination = new Pagination(listItems);
console.log(pagination.getTotalPages()); // Output: 4
console.log(pagination.getPageItems(1)); // Output: [p1, p2, p3]

function displayPag(pageNumber) {
  let tBody = document.getElementById("t-body");
  let pageItems = pagination.getPageItems(pageNumber);
  tBody.innerHTML = "";
  for (let item of pageItems) {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.innerText = item.name;
    row.appendChild(nameCell);

    let ageCell = document.createElement("td");
    ageCell.innerText = item.age;
    row.appendChild(ageCell);

    let emailCell = document.createElement("td");
    emailCell.innerText = item.email;
    row.appendChild(emailCell);

    tBody.appendChild(row);
  }
}

let pageLinks = document.querySelectorAll(".page-link");
displayPag(1);
for (let link of pageLinks) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); //prevents the link from navigating to the href value
    let pageNumber = this.textContent;
    displayPag(pageNumber);
  });
}
