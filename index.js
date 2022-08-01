window.onload = function() {
  const body = document.querySelector('body');
  const flexSwitch = document.querySelector('#flexSwitchCheckChecked');
  const btnSend = document.querySelector("#btnSend");

  flexSwitch.addEventListener("change", (e) => {
    if(e.target.checked) {
      body.className = 'dark';
    }
    else {
      body.className = 'light';
    }
  })

}