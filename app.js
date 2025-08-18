const donationPopup = document.createElement('div');
donationPopup.id = 'donation-popup';
donationPopup.classList.add('donation-popup-hidden');
donationPopup.innerHTML = `
  <div class="donation-modal">
    <button id="close-donation-popup" title="Fermer">&times;</button>
    <div class="donation-content">
      <h2>💝 Un petit don, même 1€, c’est un énorme soutien 💌</h2>
      <p style="font-style: italic; font-size: 1.1rem;">
        Chaque contribution m’aide concrètement à consacrer du temps pour créer et maintenir <b>des outils accessibles à tous, toujours gratuits et sans pub</b>.
      </p>
      <p>
        🙏 Je développe et partage ces projets avec <b>passion</b> et l’espoir de rendre le web plus ouvert et utile à chacun.<br>
        Votre générosité <b>change tout</b> : sans elle, cette aventure open source s’arrêterait.
      </p>
      <p style="font-weight:600;">
        <span style="color:#ff813f;">Vous êtes la raison pour laquelle ces projets restent vivants et progressent. Merci d’y croire – votre geste compte, vraiment.</span>
      </p>
      <a href="https://www.buymeacoffee.com/noebsc" target="_blank" rel="noopener noreferrer" class="donation-button">
        ☕ Faire un don sur BuyMeACoffee
      </a>
      <p class="donation-note">Merci du fond du cœur pour votre soutien précieux ❤️<br>
      Même 1€, c’est déjà énorme.</p>
    </div>
  </div>
`;
document.body.appendChild(donationPopup);

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    donationPopup.classList.remove('donation-popup-hidden');
  }, 1000);
});

// Fermeture via la croix ou clic sur l'arrière-plan
setTimeout(() => {
  const closeDonationBtn = document.getElementById('close-donation-popup');
  if (closeDonationBtn) {
    closeDonationBtn.addEventListener('click', () => {
      donationPopup.classList.add('donation-popup-hidden');
      donationPopup.style.display = 'none';
      console.log('Pop-up don fermé');
    });
  }
  donationPopup.addEventListener('click', (e) => {
    if (e.target === donationPopup) {
      donationPopup.classList.add('donation-popup-hidden');
      donationPopup.style.display = 'none';
      console.log('Pop-up don fermé via clic arrière-plan');
    }
  });
}, 100);
