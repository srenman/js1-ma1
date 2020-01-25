// Question 1

const cat = {
  complain: function() {
    console.log("Meow!");
  }
};

// Question 2

const heading = document.querySelector("h3");

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(cats[i].name);
  }
}

catNames(cats);

// Question 8

function catNames(catArray) {
  let wrapHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    wrapHTML += `<h5>${catArray[i].name}</h5>`;
  }
  return wrapHTML;
}

// Question 9

resultsContainer.innerHTML = catNames(cats);

// Question 10

function catNames(catArray) {
  let wrapHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    let ageValue = "Age unknown";
    if (catArray[i].age) {
      ageValue = catArray[i].age;
    }

    wrapHTML += `<div>
                  <h5>${catArray[i].name}</h5>
                  <p>${ageValue}</p>
                  </div>`;
  }

  return wrapHTML;
}
