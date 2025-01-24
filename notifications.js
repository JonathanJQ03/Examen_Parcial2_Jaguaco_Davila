class SistemaNotificaciones {
    constructor() {
        this.contenedor = document.getElementById('notificaciones');
    }

    mostrar(mensaje, tipo = 'exito') {
        const notificacion = document.createElement('div');
        notificacion.className = notificacion ${tipo};
        notificacion.innerHTML = `
            <span>${mensaje}</span>
            <span class="cerrar" onclick="this.parentElement.remove()">×</span>
        `;

        this.contenedor.appendChild(notificacion);
        
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.remove();
            }
        }, 5000);
    }
}