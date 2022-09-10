// Video

const popup = document.querySelector('.popup')

document.querySelectorAll('.video__item').forEach(video => {
    video.addEventListener('click', () => {

        popup.style.display = 'block'

        popup.innerHTML = `
            <div></div>
            <video controls autoplay muted src=${video.src}></video>
        `

        document.querySelector('.popup div').addEventListener('click', () => {

            popup.style.display = 'none'

            popup.innerHTML = ''

        })

    })
})

// Hamburger

const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_status_active')
    navigation.classList.toggle('navigation_status_visible')
    body.classList.toggle('static')
})

// Slideshow

const tape = document.querySelector('.slideshow__tape')

const slideshowButtons = document.querySelectorAll('.slideshow-buttons__item')
const slides = document.querySelectorAll('.slideshow__container')

let counter = 0

slideshowButtons.forEach((item, index) => {
    item.addEventListener('click', () => {

        tape.style.transition = '.5s all ease-in-out'

        counter = index

        remove()
        set(item)

        toSlide(counter)

    })
})

const toSlide = index => tape.style.transform = `translateX(-${slides[index].clientWidth * index}px)`

const set = item => item.classList.toggle('slideshow-buttons__item_status_fill')
const remove = () => {
    slideshowButtons.forEach(item => {
        item.classList.remove('slideshow-buttons__item_status_fill')
    })
}

setInterval(() => {

    remove()
    set(slideshowButtons[counter])

    if (counter === 0) {
        tape.style.transition = '0s'
    } else {
        tape.style.transition = '.5s all ease-in-out'
    }

    toSlide(counter)

    counter++

    if (counter === slides.length) {
        counter = 0
    }

}, 5000)
