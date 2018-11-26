(function () {

    let sender = document.querySelector(".send");

    sender.addEventListener("click", validate);


    const feedback = {
        empty: 'Pole nie może być puste!',
        minLenght: 'Pole musi zawierać do najmniej 3 znaki!',
        numbers: 'Pole nie może składać się tylko z liczb',
        letters: 'Pole puste lub zły format!',
        correct: ''
    };

    function validate(event) {

        //zapobiegnięcie domyślnej akcji wysłania formularza
        event.preventDefault();


        //operacje na name
        let name = document.getElementById('name').value;

        let nameField = document.getElementById('name-info');

        if (name === '') {
            nameField.innerHTML = feedback.empty;
            nameField.style.display = 'block';
        }

        else if (!isNaN(name)) {
            nameField.innerHTML = feedback.numbers;
            nameField.style.display = 'block';
        }

        else if ((name.length <= 2) || (name.length > 20)) {
            nameField.innerHTML = feedback.minLenght;
            nameField.style.display = 'block';
        }

        else {
            nameField.innerHTML = feedback.correct;
            nameField.style.display = 'none';
        }


        //operacje na surname
        let surname = document.getElementById('surname').value;

        let surnameField = document.getElementById('surname-info');

        if (surname === '') {
            surnameField.innerHTML = feedback.empty;
            surnameField.style.display = 'block';
        }

        else if ((surname.length <= 2) || (surname.length > 20)) {
            surnameField.innerHTML = feedback.minLenght;
            surnameField.style.display = 'block';
        }

        else if (!isNaN(surname)) {
            surnameField.innerHTML = feedback.numbers;
            surnameField.style.display = 'block';
        }

        else {
            surnameField.innerHTML = feedback.correct;
            surnameField.style.display = 'none';
        }

        //operacje na email
        let email = document.getElementById('email').value;

        let emailField = document.getElementById('email-info');

        if (email === '') {
            emailField.innerHTML = feedback.empty;
            emailField.style.display = 'block';
        }

        else if ((email.length <= 2) || (email.length > 20)) {
            emailField.innerHTML = feedback.minLenght;
            emailField.style.display = 'block';
        }

        else if (!isNaN(email)) {
            emailField.innerHTML = feedback.numbers;
            emailField.style.display = 'block';
        }

        else {
            emailField.innerHTML = feedback.correct;
            emailField.style.display = 'none';
        }

        //operacja na płci
        let sex = document.querySelector('input[name="sex"]:checked') || null;

        let sexField = document.getElementById('sex-info');

        if (!sex) {
            sexField.innerHTML = feedback.empty;
            sexField.style.display = 'block';
        }

        else {
            emailField.innerHTML = feedback.correct;
            emailField.style.display = 'none';
        }

        //operacja na wiadomosci
        let message = document.getElementById('message').value;

        let messField = document.getElementById('mess-info');

        if (!message) {
            messField.innerHTML = feedback.empty;
            messField.style.display = 'block';
        }

        else {
            messField.innerHTML = feedback.correct;
            messField.style.display = 'none';
        }

        //operacja na wieku
        let age = document.getElementById('age').value;

        let ageField = document.getElementById('age-info');

        if (!age) {
            ageField.innerHTML = feedback.letters;
            ageField.style.display = 'block';
        }

        else if (age < 18) {
            ageField.innerHTML = feedback.letters;
            ageField.style.display = 'block';
        }

        else {
            ageField.innerHTML = feedback.correct;
            ageField.style.display = 'none';
        }

    }

})();