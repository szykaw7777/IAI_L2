<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            width: 100%;
        }

        .myButton {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 99;
            font-size: 18px;
            border: none;
            outline: none;
            background-color: blue;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 4px;
        }

        .myButton:hover {
            background-color: #555;
        }

        .header {
            background-color: black;
            color: white;
            padding: 40px;
        }

        .paragraph {
            background-color: lightgrey;
            padding: 30px 30px 2500px;
        }
    </style>
</head>
<body>

<button class="myButton" title="Wróć do góry">Do Góry</button>

<div class="header">Scroll do góry - przykład</div>
<div class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet earum exercitationem incidunt iste
    labore. Alias ipsam iure maxime nam quod, sit voluptate! Consequatur dicta laborum libero possimus quis. Lorem ipsum
    dolor sit amet, consectetur adipisicing elit. Consectetur culpa dolor eligendi facilis fugiat itaque iure molestiae
    nisi nostrum, officia optio, quia quod quos ratione, repellendus repudiandae similique voluptatem voluptates? Lorem
    ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis deleniti dignissimos eveniet harum
    id in ipsa, laudantium magnam maxime modi officia officiis perspiciatis porro quasi quia quos sunt. Lorem ipsum
    dolor sit amet, consectetur adipisicing elit. Dignissimos magnam, similique! A facere impedit incidunt labore
    laborum molestias optio placeat quisquam recusandae temporibus? Beatae consectetur natus nobis odio quidem quisquam.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consequuntur dicta dignissimos eveniet,
    mollitia nobis perspiciatis. Deserunt ex iure nostrum, odit quibusdam ut velit! Dolorem quod rem sapiente voluptas?
</div>
<script>
    window.onscroll = function () {
        showTopButton()
    };

    let buttonUp = document.querySelector('.myButton');

    buttonUp.addEventListener("click", goToTop);

    function showTopButton() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.querySelector(".myButton").style.display = "block";
        } else {
            document.querySelector(".myButton").style.display = "none";
        }
    }

    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>

</body>
</html>
