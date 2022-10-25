class customElement extends HTMLElement {
  constructor() {
    super();
    new Promise((res, rej) => {
      fetch(`http://localhost:3000/animales/${this.getAttribute("number")}`)
        .then((data) => data.json())
        .then((json) => {
          this.handle(json);
          res();
        })
        .catch((error) => rej(error));
    });
  }
  connectedCallback() {}

  handle(response) {
    console.log(response);
    this.id = response.id;
    var container = document.createElement("div");
    container.innerHTML = `
    <div style="margin: 1rem; width: 50%;">
      <h2>${response.n}</h2>
      <h2 style="color: red;">${response.nc}</h2>
      <img src="${response.img}">
      <div>
        <button onclick="toggleRef(${this.id})">Referencias</button>
        <button onclick="toggleTax(${this.id})">Taxonomia</button>
      </div>
      <p id=${response.id + "ref"} style="display: none;">
        ${response.referencias}
      </p>
      <p id=${response.id + "tax"} style="display: none;">
        ${response.taxonomia}
      </p>
    </div>
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(container);

    console.log(container);
  }
}

function toggleTax(id) {
  const roots = document.getElementsByTagName("custom-element");
  console.log(roots[id].shadowRoot.getElementById(`${id + "tax"}`));
  var x = roots[id].shadowRoot.getElementById(`${id + "tax"}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleRef(id) {
  const roots = document.getElementsByTagName("custom-element");
  console.log(roots[id].shadowRoot.getElementById(`${id + "ref"}`));
  var x = roots[id].shadowRoot.getElementById(`${id + "ref"}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

customElements.define("custom-element", customElement);
