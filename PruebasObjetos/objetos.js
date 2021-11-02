let cad="Jhonny:Melavo:123456"
let tlf;
cad=cad.toUpperCase();
alert(cad);
splitTodosCampos=cad.split(":");
split1Campo=cad.split(":",1);
alert(splitTodosCampos);
alert(split1Campo);
tlf=splitTodosCampos[2];
tlf=tlf.replace("2","9");
alert(tlf);
alert(tlf.charAt(4));
alert("Bienvenido al CEEDCV")