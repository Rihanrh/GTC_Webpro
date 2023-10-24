
/*Menu Kasir */
document.getElementById("buttonTambahMenu").addEventListener("click", function () {
    document.querySelector(".popupAdd").style.display = "flex";
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popupAdd").style.display = "none";
  });
  
  document.getElementById("buttonSunting").addEventListener("click", function () {
    document.querySelector(".popupSunting").style.display = "flex";
  });
  
  document.querySelector("#closeSunting").addEventListener("click", function () {
    document.querySelector(".popupSunting").style.display = "none";
  });
  document.getElementById("buttonHapus").addEventListener("click", function () {
    document.querySelector(".popupDelete").style.display = "flex";
  });
  document.getElementById("buttonNo").addEventListener("click", function () {
    document.querySelector(".popupDelete").style.display = "none";
  });
