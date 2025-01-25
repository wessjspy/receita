const toggleButton = document.getElementById('toggleButton');

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Claro';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Claro';
        localStorage.setItem('darkMode', 'true');
    } else {
        toggleButton.textContent = 'Escuro';
        localStorage.setItem('darkMode', 'false');
    }
});

