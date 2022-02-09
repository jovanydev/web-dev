let emailCollectForm = document.getElementById('email-info');
emailCollectForm.addEventListener('submit', event => {
  console.log("the event is firing!");

  let ourFormData = new FormData(event.target);

  let userFirstName = ourFormData.get('firstName');

  let updatedHtmlContent = `
                    <h2>Congratulations, ${userFirstName}!</h2>

                    <p>You're on your way to becoming a BBQ Master!</p>
                    
                    <p class="fine-print">We'll never share your information without your permission</p>
                `
                let ourMainContent = document.getElementById("main-el")
                ourMainContent.innerHTML = updatedHtmlContent
})