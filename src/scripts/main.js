console.log('test de '+document.title)

function expander(x,bool){
    bool? x.style.width = "100px" : x.style.width = "50px";
}

function projectShow(){
  fetch('https://api.github.com/users/arielnt1993/repos').then(function(response){
    return response.json();
  }).then(function(myJson){
    myJson.map(function(x){
      console.log(x)
      document.getElementById('projectos').innerHTML += `<a href="${x.html_url}" target='_blank'>${x.name}</a>`
    })
  })
}

fetch('https://api.getform.io/v1/forms/97727371-d58f-46ef-a827-dab4209b654a?token=NqibkSahVCDYgI91bhHW28VWNrfrNpt6GpGVMAKXzL5rY5du74z5LxSBN6Bo')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    console.log(myJson.data.submissions[0].nombre);
    myJson.data.submissions.forEach(element => {
      console.log(element.nombre)
    });
  });


