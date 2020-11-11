document.addEventListener('DOMContentLoaded', () => {
    search = document.getElementById("btn");
    const message = document.getElementById('result');

    const superName = document.getElementById('name');
    const superForm = document.getElementById('form');

    superform.addEventListener("submit", displaySuperhero);

    function displaySuperhero(e) {
        e.preventDefault();

        //var searchquery = document.getElementById('name').value;
        if (superName.value === '' || superName.value === null) {
            var httpRequest = new XMLHttpRequest();
            var url = "superheroes.php?query";
            var alias = "<?php $superheroe['alias']?>"
            var name2 = "<?php $superheroe['name']?>"

            httpRequest.onreadystatechange = function() {
                if(httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    message.innerHTML = response;
                }
            }
        } else if (superName.value === alias || superName.value === name2) { //alias or name in list

        } else if () { //alias or name not in list
            message.innerHTML = "Superhero not found."
        }


        /*var httpRequest = new XMLHttpRequest();
        var url = "superheroes.php?query";

        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    message.innerHTML = response;
                } else {
                    message.innerHTML = "Superhero not found.";
                }
            }
        }

        httpRequest.open('GET', url, true);
        httpRequest.send();

    }

    /*const superName = document.getElementById('name');
    const superForm = document.getElementById('form');
    const error = document.getElementById('result');

    superForm.addEventListener("submit", displaySpecific);

    function displaySpecific(e) {

        let messages = []
        if (superName.value === '' || superName.value === null) {
            messages.push("Please enter a name or alias to proceed.")
        } /*else if(superName.value === ) {

        }

        if (messages.length > 0) {
            e.preventDefault();
            error.innerText = messages.join(', ')
        }

    }*/

});