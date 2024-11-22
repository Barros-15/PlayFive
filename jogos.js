
const draggables = document.querySelectorAll('.paginas img'); 
const boxes = document.querySelectorAll('.box');

draggables.forEach((img) => {
    img.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.src);
        e.dataTransfer.effectAllowed = 'copy';
    });
});

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.classList.add('drag-over');
    });

    box.addEventListener('dragleave', () => {
        box.classList.remove('drag-over');
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.classList.remove('drag-over');

        const imgSrc = e.dataTransfer.getData('text/plain');

        const newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.style.maxWidth = '100%';
        newImg.style.height = 'auto';
        newImg.style.borderRadius = '10px';

        box.appendChild(newImg);
    });
});

