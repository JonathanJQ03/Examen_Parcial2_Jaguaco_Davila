class Biblioteca {
    constructor() {
        this.libros = [
            new Libro("Don Quijote", "Miguel de Cervantes", "Novela"),
            new Libro("Cien Años de Soledad", "Gabriel García Márquez", "Novela"),
            new Libro("El Principito", "Antoine de Saint-Exupéry", "Infantil")
        ];
        this.notificaciones = new SistemaNotificaciones();
    }

    listarLibros() {
        return this.libros.map(libro => 
            ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})
        ).join('\n');
    }

    agregarLibro(titulo, autor, genero) {
        const nuevoLibro = new Libro(titulo, autor, genero);
        this.libros.push(nuevoLibro);
        this.notificaciones.mostrar(Libro "${titulo}" agregado);
        return Libro "${titulo}" agregado exitosamente;
    }

    prestarLibro(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.disponible) {
            libro.disponible = false;
            this.notificaciones.mostrar(Libro "${titulo}" prestado);
            return Libro "${titulo}" prestado exitosamente;
        }
        this.notificaciones.mostrar(El libro "${titulo}" no está disponible, 'error');
        return El libro "${titulo}" no está disponible;
    }

    devolverLibro(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);
        if (libro && !libro.disponible) {
            libro.disponible = true;
            this.notificaciones.mostrar(Libro "${titulo}" devuelto);
            return Libro "${titulo}" devuelto exitosamente;
        }
        return El libro "${titulo}" no está prestado;
    }

    buscarLibro(termino) {
        return this.libros
            .filter(libro => 
                libro.titulo.toLowerCase().includes(termino.toLowerCase()) ||
                libro.autor.toLowerCase().includes(termino.toLowerCase()) ||
                libro.genero.toLowerCase().includes(termino.toLowerCase())
            )
            .map(libro => ${libro.titulo} - ${libro.autor} (${libro.genero}))
            .join('\n');
    }
}