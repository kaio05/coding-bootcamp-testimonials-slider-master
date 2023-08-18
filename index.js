const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')

const tanya = document.querySelectorAll('.tanya')
const john = document.querySelectorAll('.john')

const pictures = document.querySelectorAll('.picture-wrapper__picture')

nextBtn.addEventListener('click', () => {goToNextSlide()})
previousBtn.addEventListener('click', () => {goToNextSlide()})

function goToNextSlide() {
    john.forEach(item => item.classList.toggle('hidden'))
    tanya.forEach(item => item.classList.toggle('hidden'))
}

pictures.forEach(picture => picture.addEventListener('touchend', () => {goToNextSlide()}))

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 39 || e.keyCode == 37) {
        goToNextSlide()
    }
}) 