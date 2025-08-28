// 햄버거 메뉴
let navEmojiBox = document.querySelector('.navEmojiBox svg')
let sideContainer = document.querySelector('.containerSide')
let sideClose = document.querySelector('.sideBox > .logoBox div:nth-child(2)')

navEmojiBox.addEventListener('click', () => {
    sideContainer.classList.add('activeS')
})

sideClose.addEventListener('click', () => {
    sideContainer.classList.remove('activeS')
})

//메인 이미지 슬라이드
    let slideBox = document.querySelector('.mainSlideImgBox')
    let slides = slideBox.children
    let prevBtn = document.querySelector('.prevBtn')
    let nextBtn = document.querySelector('.nextBtn')
    let pageIndex = document.querySelector('.pageIndex')

    let index = 1
    let slideWidth = slides[0].offsetWidth
    let autoSlideInterval
    slideBox.style.transform = `translateX(-${slideWidth * index}px)`

    function updatePageIndex() {
        let page = index
        if (index === 0) page = slides.length - 2
        if (index === slides.length - 1) page = 1
        pageIndex.textContent = `0${page} / 0${slides.length - 2}`
    }

    function moveSlide(i) {
        index = i
        slideBox.style.transition = 'transform 0.5s linear'
        slideBox.style.transform = `translateX(-${slideWidth * index}px)`
    }

    function nextSlide() { moveSlide(index + 1) }
    function prevSlide() { moveSlide(index - 1) }

    slideBox.addEventListener('transitionend', () => {
        if (index === slides.length - 1) {
            slideBox.style.transition = 'none'
            index = 1
            slideBox.style.transform = `translateX(-${slideWidth * index}px)`
        } else if (index === 0) {
            slideBox.style.transition = 'none'
            index = slides.length - 2
            slideBox.style.transform = `translateX(-${slideWidth * index}px)`
        }
        updatePageIndex()
    })

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextSlide()
        }, 3000)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval)
    }

    nextBtn.addEventListener('click', () => { stopAutoSlide(); nextSlide() })
    prevBtn.addEventListener('click', () => { stopAutoSlide(); prevSlide() })

    updatePageIndex()
    startAutoSlide()

//스크롤이벤트_아이콘
    window.addEventListener("scroll", function() {
        let icons = document.querySelectorAll(".iconBox")
        let triggerPoint = window.innerHeight * 0.8

        icons.forEach(icon => {
            let iconTop = icon.offsetTop
            if (window.scrollY + triggerPoint > iconTop) {
                icon.classList.add("active")
            } else {
                icon.classList.remove("active")
            }
        })
    })

//스크롤이벤트_제품
    window.addEventListener("scroll", function() {
        let prdBoxes = document.querySelectorAll(".prdBox0301, .prdBox0302")
        let trigger = window.innerHeight * 0.8

        prdBoxes.forEach(box => {
            let text = box.querySelector(".textBox0301, .textBox0302")
            let img = box.querySelector(".imgBox0302")

            if (window.scrollY + trigger > box.offsetTop) {
                if (text) {
                    text.style.transition = "all 0.8s linear"
                    text.style.opacity = "1"
                    text.style.transform = "translateX(0)"
                }
                if (img) {
                    img.style.transition = "all 0.8s linear"
                    img.style.opacity = "1"
                    img.style.transform = "scale(1)"
                }
            } else {
                if (text) {
                    if (text.classList.contains("textBox0301")) {
                        text.style.opacity = "0"
                        text.style.transform = "translateX(-50px)"
                    } else {
                        text.style.opacity = "0"
                        text.style.transform = "translateX(50px)"
                    }
                }
                if (img) {
                    img.style.opacity = "0"
                    img.style.transform = "scale(0.8)"
                }
            }
        })
    })

//스크롤이벤트_뉴스
    window.addEventListener("scroll", function() {
        let newsBox1 = document.querySelector(".newsBox0401")
        let news01 = newsBox1.querySelector(".news01")
        let news02 = newsBox1.querySelector(".news02")
        let news03 = newsBox1.querySelector(".news03")
        let svg = newsBox1.querySelector(".newsBox0401 > div:nth-child(5)")

        let newsBox2 = document.querySelector(".newsBox0402")
        let lines = newsBox2.querySelectorAll(".line0401")
        let textBoxes = newsBox2.querySelectorAll("[class^='textBox']")

        let trigger = window.innerHeight * 0.8
        let scrollY = window.scrollY

        if (scrollY + trigger > newsBox1.offsetTop) {
            // 뉴스 박스1 순차 애니메이션
            [news01, news02, news03, svg].forEach((el, i) => {
                el.style.transitionDelay = `${i * 0.3}s`
                el.classList.add(i < 2 ? "activeNews" : "activeNews2")
            })

            // 뉴스 박스2 라인 + 텍스트 순차 애니메이션
            lines.forEach((line, i) => {
                line.style.transitionDelay = `${i * 0.4}s`
                line.classList.add("activeLine")
            })
            textBoxes.forEach((box, i) => {
                box.style.transitionDelay = `${(i + 1) * 0.6}s`
                box.classList.add("active3")
            })
        } else {

            [news01, news02, news03, svg].forEach(el => {
                el.classList.remove("activeNews", "activeNews2")
                el.style.transitionDelay = "0s"
            })
            lines.forEach(line => {
                line.classList.remove("activeLine")
                line.style.transitionDelay = "0s"
            })
            textBoxes.forEach(box => {
                box.classList.remove("active3")
                box.style.transitionDelay = "0s"
            })
        }
    })

//스크롤이벤트_어바웃
    window.addEventListener("scroll", function() {
        let section = document.querySelector(".container05")
        let imgBoxes = section.querySelectorAll(".imgOutBox > div")
        let trigger = window.innerHeight * 0.8
        let scrollY = window.scrollY
        let sectionTop = section.offsetTop

        imgBoxes.forEach((box, i) => {
            let delay = i * 150

            if (scrollY + trigger > sectionTop) {
                setTimeout(() => {
                    box.style.transition = "transform 0.8s linear"
                    box.style.transform = "rotateY(0deg)"
                    box.style.opacity = "1"
                }, delay)
            } else {
                box.style.transition = "transform 0.8s linear"
                box.style.transform = "rotateY(90deg)"
                box.style.opacity = "0"
            }
        })
    })