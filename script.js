const caraters = ['e', 'i', 'a', 'o', 'u'];
const encryptCaracters = ['enter', 'imes', 'ai', 'ober', 'ufat']; 


const encryptCode = () => {
    const input = document.getElementById("info-input").value;

    if(input.trim() === "") return alert("No se a escrito nada");

    const newValue = input.split('').map(caracter => {
        if(caraters.includes(caracter.toLowerCase())){
            const indice = caraters.indexOf(caracter.toLowerCase());
            return encryptCaracters[indice];
        }
        return caracter
    }).join('');

    document.getElementById("content-empty").style.display = "none";
    document.getElementById("content-result").style.display = "flex";
    document.getElementById("result-encrypt").textContent = newValue;
}

const decryptCode = () => {
    const encryptedString = document.getElementById("info-input").value;

    if(encryptedString.trim() === "") return alert("No se a escrito nada");

    let decryptedString = '';
    for (let i = 0; i < encryptedString.length; i++) {
        let currentChar = encryptedString[i];
        for (let j = 0; j < encryptCaracters.length; j++) {
            if (encryptedString.startsWith(encryptCaracters[j], i)) {
                decryptedString += caraters[j];
                i += encryptCaracters[j].length - 1;
                break;
            }
        }

        if (currentChar === encryptedString[i]) {
            decryptedString += currentChar;
        }
    }

    document.getElementById("content-empty").style.display = "none";
    document.getElementById("content-result").style.display = "flex";
    document.getElementById("result-encrypt").textContent = decryptedString;
}

const copyCode = () => {
        const contenidoACopiar = document.getElementById("result-encrypt");
        const elementoTemporal = document.createElement("textarea");
    
        elementoTemporal.value = contenidoACopiar.textContent;
        document.body.appendChild(elementoTemporal);
    
        elementoTemporal.select();
        document.execCommand("copy");
    
        document.body.removeChild(elementoTemporal);
    
        alert("El contenido se ha copiado al portapapeles");
}