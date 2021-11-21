    document.addEventListener("keyup", izq, false);



        function izq(evento)
        {

            if(evento.altKey)
            {
                alert("Alt + " + evento.key)
            }
            if(evento.ctrlKey)
            {
                alert("Control + " + evento.key)
            }
            if(evento.shiftKey)
            {
                alert("Shift + " + evento.key)
            }
            if(!evento.altKey && !evento.ctrlKey && !evento.shiftKey)
            {
            alert(evento.key);
            }
        }
