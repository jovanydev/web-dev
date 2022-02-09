let mySites = []
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const siteList = document.getElementById("ul-el");
const deleteEl  = document.getElementById('del-btn');
const tabBtn = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  mySites = leadsFromLocalStorage;
  render(mySites);
}

deleteEl.addEventListener("dblclick", function() {
  localStorage.clear();
  mySites=[];
  render(mySites);

})

saveBtn.addEventListener("click", function() {
  mySites.push(inputEl.value);
  mySites.value = "";

  localStorage.setItem('myLeads', JSON.stringify(mySites))

  render(mySites);


  //Verify saved local storage:
  // console.log( localStorage.getItem("myLeads") )
})

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
    mySites.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
    
  })
    
})

function render(leads) {
  let siteItems = "";
  leads.forEach((item) =>{
    siteItems += `
    <li>
        <a target='_blank' href='${item}'> ${item}
        </a>
    </li>
`;
    

    // //Create list element
    // const liElement = document.createElement("li")
    // //List element content be item
    // liElement.textContent = item
    // //Append the list item
    // sites.append(liElement)
  });

  siteList.innerHTML = siteItems;

}