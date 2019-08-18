var form = document.querySelector('form')
var requiredInput = {}

form.addEventListener("submit", function (event) {
        event.preventDefault()
        requiredInput['required'] = form.requiredField.value
        if (requiredInput['required'] === '') {
            document.getElementById('required-field-message-box').innerHTML = '<p class="error-message">This field is required. Please enter some text</p>'
        }
        else{
            document.getElementById('required-field-message-box').innerHTML = ''
        }
    }
)


