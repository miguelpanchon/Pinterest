// Get the footer element
const footerElement = document.getElementById("footer");

// Create the first p element
const p1 = document.createElement("p");
p1.textContent = "by Miguel Panchón, 2024 ";

// Create the second p element
const p2 = document.createElement("p");
const a1 = document.createElement("a");
a1.href = "https://github.com/miguelpanchon/Pinterest/blob/main/README.md";
a1.textContent = "readme.md";
p2.appendChild(a1);

// Create the third p element
const p3 = document.createElement("p");
const a2 = document.createElement("a");
a2.href = "https://github.com/miguelpanchon/Pinterest";
a2.textContent = "this code in GitHub";
p3.appendChild(a2);

// Create the fourth p element
const p4 = document.createElement("p");
const a3 = document.createElement("a");
a3.href = "https://miguelpanchon-porfolio.netlify.app/";
a3.textContent = "My porfolio";
p4.appendChild(a3);

// Create the fifth p element
const p5 = document.createElement("p");
const a4 = document.createElement("a");
a4.href = "https://www.mozilla.org/es-ES/firefox/new/";
a4.textContent = "Optimized for Firefox";
p5.appendChild(a4);

// Append the p elements to the footer element
footerElement.appendChild(p1);
footerElement.appendChild(p2);
footerElement.appendChild(p3);
footerElement.appendChild(p4);
footerElement.appendChild(p5);