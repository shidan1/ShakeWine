function checkShakes() {
    if (shakeCount === 1 || shakeCount === 2) {
        // Animate the bottle to show it's cracking
        anime({
            targets: '#bottle',
            keyframes: [
                {rotate: '1turn'},
                {rotate: '0turn'}
            ],
            duration: 2000
        });
    } else if (shakeCount >= 3) {
        // Animate the bottle to show it's broken and show the message
        anime({
            targets: '#bottle',
            opacity: [1, 0],
            duration: 2000,
            complete: function() {
                document.getElementById('message').classList.remove('hidden');
            }
        });
    }
}
