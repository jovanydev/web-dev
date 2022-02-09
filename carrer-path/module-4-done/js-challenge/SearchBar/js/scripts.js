const userNameInput = document.getElementById("searchInput");

userNameInput.addEventListener("keyup", function() {
  let searchQuery = event.target.value.toLowerCase();

  let allNamesDOMCollection = document.getElementsByClassName("name");

  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
    
    // if(searchQuery === currentName.substring(0, searchQuery.length)) {
    //   allNamesDOMCollection[i].style.display = "block";
    // } else {
    //   allNamesDOMCollection[i].style.display = "none";
    // }
    // console.log(allNamesDOMCollection[i]);

    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[i].style.display = "block";
    } else {
      allNamesDOMCollection[i].style.display = "none";
    }
}
});

