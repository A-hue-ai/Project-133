img = "";
status = "";

function preload()
{
    image  = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detec(img, gotResult);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
}

function addUser1() {

    status_name = document.getElementById("status_name1").value;
  
    localStorage.setItem("status_name1", status_name1);
    
      window.location = "bedroom.html";
  }

  function addUser2() {

    status_name2 = document.getElementById("status_name2").value;
  
    localStorage.setItem("status_name2", status_name2);
    
      window.location = "dining.html";
  }

  function addUser3() {

    status_name3 = document.getElementById("status_name3").value;
  
    localStorage.setItem("status_name3", status_name3);
    
      window.location = "kitchen.html";
  }

  function addUser4() {

    status_name4 = document.getElementById("status_name4").value;

    localStorage.setItem("status_name4", status_name4);
    
      window.location = "friuts_basket.html";
  }