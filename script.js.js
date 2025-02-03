document.addEventListener('DOMContentLoaded', () => {
    // Funzioni per aprire il modal al clic dei pulsanti
    document.getElementById('btn-preventivo').addEventListener('click', () => {
        document.getElementById('modal-overlay').style.display = 'flex';
    });

    document.getElementById('btn-consulenza').addEventListener('click', () => {
        document.getElementById('modal-overlay').style.display = 'flex';
    });

    // Funzione per chiudere il modal
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('modal-overlay').style.display = 'none';
    });

    // Chiudere il modal cliccando al di fuori del contenuto
    document.getElementById('modal-overlay').addEventListener('click', (event) => {
        if (event.target === document.getElementById('modal-overlay')) {
            document.getElementById('modal-overlay').style.display = 'none';
        }
    });
});
