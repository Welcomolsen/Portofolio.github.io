document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Afficher les informations dans la console (ou faire autre chose)
    console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);
    
    // Réinitialiser le formulaire
    this.reset();
    alert('Message envoyé avec succès !');
});
