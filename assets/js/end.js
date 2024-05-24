document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('responseMessage').classList.add('hidden');
    }, 5000);
});
