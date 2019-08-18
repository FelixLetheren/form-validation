var form = document.querySelector('form')
var requiredInput = {}

form.addEventListener("submit", function (event) {
        event.preventDefault()
        document.querySelectorAll('.message-box').innerHTML = ''
        requiredInput['required'] = form.requiredField.value
        if (requiredInput['required'] === '') {
            document.getElementById('requiredFieldMessageBox').innerHTML = '<p class="error-message">This field is required. Please enter some text</p>'
        }
        else{
            document.getElementById('requiredFieldMessageBox').innerHTML = ''
        }
    }
)


