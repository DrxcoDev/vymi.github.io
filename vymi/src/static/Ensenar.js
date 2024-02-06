function EnsenarEnDestop() {
    var name_file = document.getElementById("name-file").value;

    var ensenar = document.getElementById("actually-file");

    ensenar.textContent = name_file;
}

function highlightWord() {
    var inputText = document.getElementById("texto");
    var texto = inputText.value;

    // Palabra que quieres destacar
    var palabraClave = 'print';

    // Reemplazar todas las ocurrencias de la palabra clave con el estilo
    inputText.value = texto.replace(new RegExp(palabraClave, 'g'), '[!word!]');
    inputText.innerHTML = inputText.value.replace(new RegExp('\\[!word!\\]', 'g'), '<span class="text-primary-emphasis">' + palabraClave + '</span>');
}