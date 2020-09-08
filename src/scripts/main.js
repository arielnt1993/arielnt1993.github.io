console.log('test de '+document.title)

function expander(x,bool){
    bool? x.style.width = "100px" : x.style.width = "50px";
}

fetch('https://api.getform.io/v1/forms/97727371-d58f-46ef-a827-dab4209b654a?token=NqibkSahVCDYgI91bhHW28VWNrfrNpt6GpGVMAKXzL5rY5du74z5LxSBN6Bo')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.data.submissions[0].nombre);
  });