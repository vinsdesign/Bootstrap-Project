fetch("../../pages/layout/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-content").innerHTML = data;
  });

fetch("../../pages/layout/main.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-content").innerHTML = data;
  });

  fetch("../../pages/layout/main-footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-footer").innerHTML = data;
  });


  fetch("../../pages/layout/content-center.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content-center").innerHTML = data;
  });