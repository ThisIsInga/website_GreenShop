function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = (vol / 100) * 250 - 20 + 'px'; // обновление позиции
}