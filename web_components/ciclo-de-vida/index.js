class customElement extends HTMLElement {
  static get observedAttribute() {
    return ["att"];
  }

  constructor() {
    super();
    console.log("compoennte construido");
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
    <p att="0">Soy un web component</p>`;
    console.log("Conectado");
  }

  disconnectedCallback() {
    console.log("Desconectado");
  }

  adoptedCallback() {
    console.log("Creado");
  }

  attributeChangedCallback() {
    console.log("Atributo cambiado");
  }
}
var add = document.getElementById("add");
add.innerHTML = "Añadir webcomponent";
add.onclick = function () {
  webcomp = document.createElement("custom-element");
  document.body.appendChild(webcomp);
};

var del = document.getElementById("delete");
del.innerHTML = "Borrar webcomponent";
del.onclick = function () {
  document.querySelector("custom-element").remove();
};

var change = document.getElementById("change");
change.innerHTML = "Modificar webcomponent";
change.onclick = function () {
  element = document.querySelector("custom-element");
  element.setAttribute("att", "");
};

customElements.define("custom-element", customElement);
