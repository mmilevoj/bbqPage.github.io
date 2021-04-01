let emailCollectorForm = document.getElementById('Email-Collector');
emailCollectorForm.addEventListener('submit', event => {
    event.preventDefault()
let ourFormData = new FormData(event.target);
let userFirstName = ourFormData.get('fname');
    let userEmailAddress = ourFormData.get('email');
    let updatedHtmlContent = `<h1 class="title">Congratulations, ${userFirstName} </h1>
                    <p class="subtitle">You're on your way to becoming a BBQ Master!
                    </p>
                    <p class="desciption-footer">You will get weekly BBQ tips sent to: ${ userEmailAddress}</p> `;
    let ourMainContent = document.getElementById('Description-Title');
    ourMainContent.innerHTML = updatedHtmlContent;
})

