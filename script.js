const biblioteca = new Biblioteca();

function ejecutarComando() {
    const entrada = document.getElementById('inputComando');
    const comando = entrada.value.trim().toLowerCase();
    let resultado = '';

    try {
        if (comando === 'listar') {
            resultado = biblioteca.listarLibros();
        } else if (comando.startsWith('agregar ')) {
            const [, titulo, autor, genero] = comando.split(' ');
            resultado = biblioteca.agregarLibro(titulo, autor, genero);
        } else if (comando.startsWith('prestar ')) {
            const titulo = comando.substring(8);
            resultado = biblioteca.prestarLibro(titulo);
        } else if (comando.startsWith('devolver ')) {
            const titulo = comando.substring(9);
            resultado = biblioteca.devolverLibro(titulo);
        } else if (comando.startsWith('buscar ')) {
            const termino = comando.substring(7);
            resultado = biblioteca.buscarLibro(termino);
        } else if (comando === 'ayuda') {
            resultado = `Comandos disponibles:
- listar: Muestra todos los libros
- agregar [titulo] [autor] [genero]: Añade un nuevo libro
- prestar [titulo]: Presta un libro
- devolver [titulo]: Devuelve un libro
- buscar [termino]: Busca libros
- ayuda: Muestra esta ayuda`;
        } else {
            resultado = 'Comando no reconocido. Escribe "ayuda" para ver los comandos.';
        }

        mostrarEnConsola(comando);
        mostrarEnConsola(resultado);
    } catch (error) {
        mostrarEnConsola(`Error: ${error.message}`, true);
    }

    entrada.value = '';
}

function mostrarEnConsola(mensaje, esError = false) {
    const consola = document.getElementById('consola');
    const linea = document.createElement('div');
    linea.classList.add('comando');
    linea.textContent = `> ${mensaje}`;
    
    if (esError) {
        linea.classList.add('error');
    }
    
    consola.appendChild(linea);
    consola.scrollTop = consola.scrollHeight;
}

document.getElementById('inputComando').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ejecutarComando();
    }
});

mostrarEnConsola('Bienvenido a la Biblioteca Digital');
mostrarEnConsola('Escribe "ayuda" para ver los comandos disponibles');