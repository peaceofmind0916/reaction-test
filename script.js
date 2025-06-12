let start;
function move (){
    let random_left= Math.random()*400;
    let random_top= Math.random()*400;
    let random_height= ((Math.random()*600)+300)
     function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
    document.getElementById("square").style.left= random_left + "px" ;
      document.getElementById("square").style.top= random_top + "px";
    document.getElementById("square").style.height= random_height+ "px";
        document.getElementById("square").style.width= random_height+ "px";
    document.getElementById("square").style.backgroundColor=getRandomColor();
    document.getElementById("square").style.visibility="visible";
 start=new Date().getTime();
}

move();
document.getElementById("square").onclick= function(){
    document.getElementById("square").style.visibility="hidden";
    let end = new Date().getTime();
    let result = (end - start)/1000;
    alert(result);
    
    move();
}