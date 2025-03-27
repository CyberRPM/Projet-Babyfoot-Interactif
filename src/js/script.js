function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.textContent = playerName;
    playerList.appendChild(li);
    document.getElementById('playerName').value = '';
}

document.getElementById('endGameBtn').addEventListener('click', function() {
    const score = prompt("Entrez le score final:");
    if (score) {
        alert("Score enregistré: " + score);
        // Ici, vous pouvez ajouter une fonction pour envoyer le score à la base de données
    }
});
