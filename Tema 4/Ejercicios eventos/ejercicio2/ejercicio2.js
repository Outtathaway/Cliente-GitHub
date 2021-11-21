
            document.getElementById("texto").addEventListener("click", amarillo, false);
            document.getElementById("texto").addEventListener("keydown", azul, true);
            document.getElementById("texto").addEventListener("mousemove", blanco, false);

            function amarillo()
            {
                document.getElementById("texto").style.backgroundColor = 'red';
            }
            function azul()
            {
                document.getElementById("texto").style.backgroundColor = 'blue';
            }
            function blanco()
            {
                document.getElementById("texto").style.backgroundColor = 'white';
            }
