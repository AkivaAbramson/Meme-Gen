'use strict'

function renderGallery() {
    var imgUrls = ['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg']
    var elGallery = document.querySelector('.gallery')
    for (var i = 0; i < imgUrls.length; i++) {
        var img = document.createElement('img')
        img.src = imgUrls[i]
        img.addEventListener("click", function (url) {
            return function () {
                setImg(url)
            }
        }(imgUrls[i])) 
        
        elGallery.appendChild(img)
    }
    
}


