document.getElementById("buttonTambahMenu").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
  
  document.getElementById("buttonSunting").addEventListener("click", function () {
    document.querySelector(".popupSunting").style.display = "flex";
  });
  
  document.querySelector("#closeSunting").addEventListener("click", function () {
    document.querySelector(".popupSunting").style.display = "none";
  });
  