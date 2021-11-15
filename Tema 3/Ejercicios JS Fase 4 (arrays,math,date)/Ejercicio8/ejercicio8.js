function seRepite(){

    let array=["repetido", 3, 2, "palabro",1 ,1 ,"repetido", "a", "repetido", "b", "b"];
    let masFrecuente = 1;
    let repite = 0;
    let objFrec;

    for (let i=0; i<array.length; i++)
    {
            for (let j=i; j<array.length; j++)
            {
                    if (array[i] == array[j])
                    repite++;
                    if (masFrecuente<repite)
                    {
                        masFrecuente=repite; 
                        objFrec = array[i];
                    }
            }
            repite=0;
    }

    alert("El elemento que mas se repite en el array es: "+objFrec)

    }