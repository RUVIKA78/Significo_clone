function homePageAnimation() {

    gsap.set(".bullets", {
        scale: 5
    })
    var tl = gsap.timeline(
        {
            scrollTrigger: {
             
                trigger: ".home",
                scrub: 1,
                start: "top top",
                end: "bottom top",
            }

        })
        
    
    tl
    .to(".video-div",
        {
            '--clip': "0%", ease: Power2,

        }, 'a'
    )
    .to(".bullets", {
        scale: 1,
        ease: Power2
    }, 'a')

    .to(".lft", {
        stagger: 0.3,
        xPercent: -10,
        ease: Power4,
    }, 'b')
    .to(".rgt", {
        stagger: 0.3,
        xPercent: 10,
        ease: Power4,
    }, 'b')
}
homePageAnimation()

function horizontalscroll() {
    gsap.to(".slide", {
        scrollTrigger: {
            scrub: 2,
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
        },
        xPercent: -200,
        ease: "power4"
    })
}

horizontalscroll()

function hovereffect() {
    document.querySelectorAll(".listelement")
        .forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            var picture=this.querySelector(".picture")

            gsap.to(picture, {
                opacity: 1,
                y:100,
                x: gsap.utils.mapRange(0, window.innerWidth, -900, -200, dets.clientX),
                ease: Power4,
                duration: 0.5,
            })
        })
        el.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5,
            })
        })


        })
        
}

hovereffect()

function hovereffect2() {
    document.querySelectorAll(".listelement")
        .forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            var picture=this.querySelector(".bluelayer")

            gsap.to(picture, {
                opacity: 1,
                y:100,
                x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
                ease: Power4,
                duration: 0.5,
            })
        })
        el.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".bluelayer"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5,
            })
        })


        })
        
}
hovereffect2()

function textopacity() {
    var clutter = ""
    document.querySelector(".text-para")
        .textContent.split("")
        .forEach(function (e) {

            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span class="char">${e}</span>`

        })
    document.querySelector(".text-para").innerHTML = clutter;
    gsap.set(".text-para span", { opacity: .2 })
    gsap.to(".text-para span", {
        scrollTrigger: {
            color:"blue", 
            trigger: ".about-founder",
            start: "top 70%",
            end: "bottom 90%", scrub: 1,

        },
        opacity: 1,
        stagger: 0.3,
        ease: Power4,
    })
}

textopacity() 

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

loco()

function capsuleanimation() {
    gsap.to(".capsule2", {
        scrollTrigger: {
            trigger: ".right-side",
            start: "top 70%",
            end: "bottom bottom",
            scrub:1,
        },
        y: 0,
        ease: Power4,
        duration:.2
    })
}

capsuleanimation()


document.querySelectorAll(".section")
    .forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color)
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color)

            }
        })
    })






gsap.to(".card", {
        scrollTrigger: {
            trigger: ".card-parent",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
        },
    backgroundColor: "#000",
    color:"#AEDEE0", 
    width: "80%",
    duration:0.1
    
})


        gsap.to(".text", {
            scrollTrigger: {
                trigger: ".card-parent",
                start: "top 60%",
                end: "bottom 70%",
                scrub: 1,
            },
            color: "#AEDEE0", 
        duration:0.1
        })

