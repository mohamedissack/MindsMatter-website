var i = 0;
var containers = [];
var time = 1000;


//container list
containers[0] = '#item-one'; 
containers[1] = '#item-two';
containers[0] = '#item-3';  

//change container
function changeContainer() {
  document.slide.src = containers[i];

  if(i < containers.length - 1){
    i++;
  } else {
    i = 0;
  }
    setTimeout('changeContainer()', time);
  }