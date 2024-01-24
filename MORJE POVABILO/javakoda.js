const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
   
    // Preusmeri na zahvalno stran za "Da"
    window.location.href = "zahvala.html";
});

noButton.addEventListener('mouseover', () => {
    const newPosX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const newPosY = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = newPosX + 'px';
    noButton.style.top = newPosY + 'px';
});
