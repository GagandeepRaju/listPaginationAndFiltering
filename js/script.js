/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.querySelector(".student-list");
const students = list.children;
const ul = list.parentNode;

const div = document.createElement("div");
showPage();

function showPage(index = 0) {
  console.log(index);
  for (let i = 0; i < students.length; i++) {
    if (i > index && i < index + 10) {
      students[i].style.display = "";
    } else {
      students[i].style.display = "none";
    }
  }
}
appendPageLinks();

function appendPageLinks() {
  div.className = "pagination";
  ul.appendChild(div);
  for (let i = 0; i < Math.floor(students.length / 10); i++) {
    const li = document.createElement("li");
    const pageIndexBtn = document.createElement("a");
    pageIndexBtn.href = "#";
    pageIndexBtn.textContent = i + 1;
    if (i == 0) {
      pageIndexBtn.className = "active";
    }
    li.appendChild(pageIndexBtn);
    div.appendChild(li);
  }
}

div.addEventListener("click", (event) => {
  const aList = div.children;
  for (let i = 0; i < aList.length; i++) {
    if (event.target.textContent == i) {
      event.target.className = "active";
    }
    if (aList[i].firstChild.className === "active") {
      aList[i].firstChild.className = "";
    }
  }
  showPage((event.target.textContent - 1) * 10);
});
