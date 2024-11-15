// script.js
function toggleFacts() {
    const factsDiv = document.getElementById('facts');
    if (factsDiv.classList.contains('hidden')) {
        factsDiv.classList.remove('hidden');
    } else {
        factsDiv.classList.add('hidden');
    }
}
