const allInputs = document.querySelectorAll('input');

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup', validateInput);
}

const checkCheckbox = document.querySelector('input[name="rules"]');
checkCheckbox.addEventListener('change', validateInput);

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', sendForm);



function validateInput() {
    const parentElement = this.parentNode;

    if (this.name == 'name' || this.name == 'surname') {
        const lengthResult = checkLenght(this.value, 3);
        const letterResult = checkLetter(this.value);

        if (lengthResult == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
        }

        if (letterResult == true) {
            parentElement.getElementsByTagName('p')[1].style.display = 'none';
        } else {
            parentElement.getElementsByTagName('p')[1].style.display = 'block';
        }

        if (lengthResult == true && letterResult == true) {
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'age') {
        const checkAge = checkNumber(this.value);
        if (checkAge == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'login') {
        const checkLogin = checkLenght(this.value, 3);

        if (checkLogin == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'email') {
        const checkEmailStruct = checkEmail(this.value);
        if (checkEmailStruct == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'password') {
        const checkPasswordLenght = checkLenght(this.value, 8);
        const checkLetterPassowrd = countLetterInString(this.value);
        const checkPassowrdNumber = countNumberInString(this.value);

        if (checkLetterPassowrd == true) {
            parentElement.getElementsByTagName('p')[2].style.display = 'none';
        } else {
            parentElement.getElementsByTagName('p')[2].style.display = 'block';
        }

        if (checkPasswordLenght == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
        }

        if (checkPassowrdNumber == true) {
            parentElement.getElementsByTagName('p')[1].style.display = 'none';
        } else {
            parentElement.getElementsByTagName('p')[1].style.display = 'block';
        }

        if (checkPasswordLenght && checkLetterPassowrd && checkPassowrdNumber) {
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'password_repeat') {
        const passwordInput = document.querySelector('input[name="password"]');
        const checkPasswordReapate = compareText(passwordInput.value, this.value);
        if (checkPasswordReapate == true) {
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
            this.classList.remove('success');
            this.classList.add('error');
        }
    }

    if (this.name == 'rules') {
        if (this.checked == true) {
            parentElement.classList.remove('label-error');
            parentElement.getElementsByTagName('p')[0].style.display = 'none';
            this.classList.add('success');
        } else {
            parentElement.classList.add('label-error');
            parentElement.getElementsByTagName('p')[0].style.display = 'block';
            this.classList.remove('success');
        }

    }

}


function checkLenght(text, minLenght) {
    if (text.length >= minLenght) {
        return true;
    }
    return false;
}

function checkLetter(text) {
    if (/^[a-zA-Z]+$/.test(text)) {
        return true;
    }
    return false;
}

function checkNumber(number) {
    number = parseInt(number);
    if (Number.isInteger(number)) {
        return true;
    }
    return false;
}

function checkEmail(text) {
    if (/^[\w\.\-]{1,}@[\w\.\-]{1,}.[a-zA-Z]/.test(text)) {
        return true;
    }
    return false;
}

function countLetterInString(text) {
    if (text.replace(/[^a-zA-Z]/g, "").length > 0) {
        return true;
    }
    return false;
}

function countNumberInString(text) {
    if (text.replace(/[^0-9]/g, "").length > 0) {
        return true;
    }
    return false;
}

function compareText(firstText, secondText) {
    if (firstText === secondText) {
        return true;
    }
    return false;
}

function sendForm(e) {
    e.preventDefault();
    const checkSendForm = document.querySelectorAll('input');
    const checkSendButton = document.querySelectorAll('input.success');
    if (checkSendForm.length === checkSendButton.length) {
        const form = document.querySelector('form');
        form.submit();
    } else {
        document.getElementById('form_not_send').style.display = 'block';
    }


}