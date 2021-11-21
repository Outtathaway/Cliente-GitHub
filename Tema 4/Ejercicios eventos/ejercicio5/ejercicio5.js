    document.getElementById("laranjo").addEventListener("mouseover", laranjourl, false);
    document.getElementById("limao").addEventListener("mouseover", limaourl, false);


        function laranjourl()
        {
            let elemento = document.getElementById('laranjo').src;
            alert(elemento);
        }
        function limaourl()
        {
            let elemento = document.getElementById('limao').src;
            alert(elemento);
        }