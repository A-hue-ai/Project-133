function addUser2() {

    status_back_dining_room1 = document.getElementById("status_back_dining_room1").value;
  
    localStorage.setItem("status_back_dining_room1", status_back_dining_room1);
    
      window.location = "index.html";
  }