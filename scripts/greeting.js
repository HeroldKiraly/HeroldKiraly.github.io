const greetings = ['Hello.', 'Hola.', 'Bonjour.', 'Hallo.', 'Salve.', '你好.', 'Olá.', 'مرحبا.', 'こんにちは.', 'Szia.'];
let timer;
let i = 0;

function app() {    
    function typer() {
        let word = greetings[i].split('');
        let typing = function() {
            if (word.length > 0) {
                document.getElementById('greeting').innerHTML += word.shift();
            } else {
                setTimeout(deleter, 1500);
                return false;
            }
            timer = setTimeout(typing, 150);
        };
        typing();
    };
    
    function deleter() {
        let word = greetings[i].split("");
        var deleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('greeting').innerHTML = word.join("");
            } else {
                if (greetings.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typer();
                return false;
            };
            timer = setTimeout(deleting, 150);
        };
        deleting();   
    }
    typer();
}
window.onload = app();