const form = document.getElementById('form');
const username = document.getElementById('username');
const username1 = document.getElementById('username1');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();

});

function checkInputs() {
	const usernameValue = username.value.trim();
	const username1Value = username1.value.trim();
	const username2Value = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Please enter your First name');
	} else {
		setSuccessFor(username);
	}

		if(username1Value === '') {
			setErrorFor(username1, 'Please enter your Last name');
		} else {
			setSuccessFor(username1);
		}

	if(username2Value === '') {
		setErrorFor(username2, 'Please enter your User-id');
	} else {
		setSuccessFor(username2);

	}



	if(emailValue === '') {
		setErrorFor(email, 'Please enter your Email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'email not valid');
	} else {
		setSuccessFor(email);

	}

	if(passwordValue === '') {
		setErrorFor(password, 'Please enter your Password');
	} else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Please confirm your Password');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
		window.location.href='cal/calindex.html'
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;

}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
