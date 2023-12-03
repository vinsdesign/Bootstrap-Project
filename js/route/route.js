fetch("../../pages/layout/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-content").innerHTML = data;
  });
