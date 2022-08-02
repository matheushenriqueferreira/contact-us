window.onload = function() {
  const body = document.querySelector('body');
  const flexSwitch = document.querySelector('#flexSwitchCheckChecked');
  const content = document.querySelector(".content");
  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "sendSucessMsg");
  const mySpan = document.createElement("span");

  const name = document.querySelector("#contactName");

  flexSwitch.addEventListener("change", (e) => {
    if(e.target.checked) {
      body.className = 'dark';
    }
    else {
      body.className = 'light';
    }
  });

  document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();//evita que o submit seja executado
    content.appendChild(myDiv);
    myDiv.appendChild(mySpan);
    mySpan.innerHTML = `Olá <strong>${name.value}</strong>, sua mensagem foi enviada com sucesso!`;
  });

}