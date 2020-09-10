function expander(x, bool) {
  bool ? (x.style.width = "100px") : (x.style.width = "50px");
}

async function projectShow() {
  let response = await fetch("https://api.github.com/users/arielnt1993/repos");
  let repos = await response.json();
  repos.map(function (x) {
    document.getElementById("projectos").innerHTML += `<a href="${x.html_url}" target="_blank">${x.name}</a>`;
  });
}

async function getNameOfContact() {
  let response = await fetch(
    "https://api.getform.io/v1/forms/97727371-d58f-46ef-a827-dab4209b654a?token=NqibkSahVCDYgI91bhHW28VWNrfrNpt6GpGVMAKXzL5rY5du74z5LxSBN6Bo"
  );
  let contact = await response.json();
  let subs = contact.data.submissions;
  subs.map(function (x) {
    document.getElementById("names").innerHTML += `<li>${x.nombre}</li>`;
  });
}
