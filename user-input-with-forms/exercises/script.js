//Code Your Solution Below
function init () {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, select');
    const paragraph = document.getElementById("statusReport");

    form.addEventListener('submit', function(event) {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.type != 'checkbox' && input.value === '') {
                allFilled = false;
            }
            if (input.type === 'checkbox' && !input.checked) {
                allFilled = false;
            }
        });

        //prevents form submisiion
        if (!allFilled) {
            event.preventDefault();
            paragraph.innerHTML = 'Please fill out all fields.'
        }
    });
}

window.addEventListener("load", init);