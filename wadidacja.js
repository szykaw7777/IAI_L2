<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>

        .is-invalid {
            border: solid 1px red;
        }

        input {
            width: 300px;
        }
    </style>
</head>
<body>

<h2>Formularz</h2>

<input id="inputImie" placeholder="Pole nie może być puste, tylko litery">

<input id="inputNazwisko" placeholder="Pole nie może być pust, tylko text">

<input id="inputE-mail" placeholder="Pole nie może być pust, tylko text">

<input id="exampleFormControlTextarea1" placeholder="Pole nie może być pust, tylko text">


<button type="button" class="send">Wyslij</button>

<script>

    let send = document.querySelector(".send");

    send.addEventListener("click", checkForm);


    function addClass(element, className) {
        element.classList.add(className);
    }

    function removeClass(element, className) {
        element.classList.remove(className);
    }


    function checkForm() {

        let number = document.querySelector("#number");
        let text = document.querySelector("#text");


        let numberValue = number.value;

        let textValue = text.value;

        if (numberValue === '' || !parseInt(numberValue) || isNaN(numberValue) || numberValue < 1 || numberValue > 100) {
            addClass(number, 'is-invalid');
        } else {
            removeClass(number, 'is-invalid');
        }

        if(textValue === '' || parseInt(textValue)) {
            addClass(text, 'is-invalid');
        } else {
            removeClass(text, 'is-invalid');
        }

    }
</script>

</body>
</html>
