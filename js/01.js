window.onload = function () {
    const box = document.querySelector('#box')
    let x = null,
        y = null,
        maskX = null,
        maskY = null;
    box.addEventListener('mousemove', function (e) {
        x = e.pageX - box.offsetLeft;
        y = e.pageY - box.offsetTop;
        box.children[0].style.left = x - box.children[0].offsetWidth / 2 + 'px'
        box.children[0].style.top = y - box.children[0].offsetHeight / 2 + 'px'
        maskX = x - box.children[0].offsetWidth / 2
        maskY = y - box.children[0].offsetHeight / 2
        box.children[0].style.display = 'block';
        box.children[2].style.display = 'block';
        if (maskX <= 0) {
            box.children[0].style.left = 0 
        }else if (maskX >= box.offsetWidth - box.children[0].offsetWidth) {
            box.children[0].style.left = box.offsetWidth - box.children[0].offsetWidth + 'px'
        }
        if (maskY <= 0) {
            box.children[0].style.top = 0 
        }else if (maskY >= box.offsetHeight - box.children[0].offsetHeight) {
            box.children[0].style.top = box.offsetHeight - box.children[0].offsetHeight + 'px'
        }
        box.children[2].children[0].src = box.children[1].src
    })
    box.addEventListener('mouseleave', function (e) {
        box.children[0].style.display = 'none';
        box.children[2].style.display = 'none';

    })
}