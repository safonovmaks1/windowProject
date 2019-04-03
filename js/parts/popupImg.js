let popupImg = () => {

    let modal = document.querySelector('.overlay'),
        img = document.querySelectorAll('.myImg'),
        bigImg;


    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        for (let i = 0; i < img.length; i++) {
            if (target.classList.contains('myImg')) {
                if (target == img[i]) {
                    modal.style.display = "block";
                    document.body.style.overflow = 'hidden';
                    bigImg = document.createElement("img");
                    bigImg.classList.add('big_img');
                    bigImg.src = `img/our_works/big_img/${i+1}.png`;
                    modal.appendChild(bigImg);
                }  
            }   
        }
    });

    window.addEventListener('click', (e) => {
        let target = e.target;
        if (target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            bigImg.classList.remove('img_big');
            bigImg.src = '';
        } 
    });

};

module.exports = popupImg;