window.onload = function () {
    const box = document.querySelector('#box')
    let x = null,
        y = null;
    box.addEventListener('mouseenter', function (e) {
        x = e.pageX;
        y = e.pageY;
        box.children[0].style.display = 'block';
        box.children[2].style.display = 'block';
        console.log(x);
        box.children[0].style.transform = 'translateX(' + x + 'px)'
        box.children[2].children[0].src = box.children[1].src
    })
    box.addEventListener('mouseleave', function (e) {
        box.children[0].style.display = 'none';
        box.children[2].style.display = 'none';

    })
}