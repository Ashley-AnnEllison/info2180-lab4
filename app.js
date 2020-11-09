document.addEventListener('DOMContentLoaded', () => {
    search = document.getElementById("btn");
    search.addEventListener("click", displayNames);

    function displayNames() {
        var httpRequest = new XMLHttpRequest();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    alert(response);
                } else {
                    alert("Unable to display superheroes.");
                }
            }
        }
        httpRequest.open('GET', url, true);
        httpRequest.send();

    }

});