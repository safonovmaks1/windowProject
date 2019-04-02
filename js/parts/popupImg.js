let popupImg = () => {

    let modal = document.querySelector('.overlay'),
        img = document.querySelectorAll('.myImg');


    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        for (let i = 0; i < img.length; i++) {
            if (target.classList.contains('myImg')) {
                if (target == img[i]) {
                    modal.style.display = "block";
                    document.body.style.overflow = 'hidden';
                let pic = document.createElement("img");
                    pic.classList.add('big_img');
                    pic.src = `img/our_works/big_img/${i+1}.png`;
                    modal.appendChild(pic);
                }  
            }   
        }
    });

    window.addEventListener('click', (e) => {
        let target = e.target;
        if (target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        } 
    });

};

module.exports = popupImg;