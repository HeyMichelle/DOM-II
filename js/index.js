// Mouseover
const navHov= document.querySelectorAll('.nav-link');
navHov.forEach(function(anchor){
    anchor.addEventListener('mouseenter', function(event){
        event.target.style.color= 'yellow';
        event.target.style.textTransform= 'uppercase';
        event.target.style.transform = "scale(1.2)";
    })    
    anchor.addEventListener('mouseleave', function(event){
        event.target.style.color= '';
        event.target.style.textTransform= '';
        event.target.style.transform = "scale(1.2)";
    })
})

// click event, applied to multiple example
document.querySelectorAll("h2").forEach((el) => {
    el.addEventListener("click", function() {
        el.style.color="hotpink";
    })
})

// * [ ] `keydown`
const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
        body.style.backgroundColor = "lightblue";
    })

// * [ ] `keyup`
const body2 = document.querySelector('body');
body.addEventListener('keyup', (e) => {
        body.style.backgroundColor = '';
    })

// * [ ] `wheel` this is if wheeling while hovering over "fun bus" words in nav area
const container = document.querySelector('.container');
console.log(container)
container.addEventListener('wheel', (e) => {
    container.style.backgroundColor='red'
    })

// * [ ] `drag / drop` how do you make the alert box go away after click?
const busPic = document.querySelector(".intro img");
busPic.addEventListener('drag', (e) => {
    alert('You are such a drag queen.')
}, false);


// * [ ] `load`
// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//     }); 

// * [ ] `double click` (doesn't work with QSAll)

const changeImg = document.querySelector('.img-content img');

changeImg.addEventListener('dblclick', function (e) {
  changeImg.src = "img/citylights.jpg";
});



// * [ ] `focus`
        // el.addEventListener('focus', ()=>{
        //     el.style.background ='pink';
        // })
        // el.addEventListener('blur', ()=>{
        //     el.style.background = '';
        // });
// * [ ] `blur`

// password.addEventListener('focus', (event) => {
    // event.target.style.background = 'pink';    
    // });

    // password.addEventListener('blur', (event) => {
    // event.target.style.background = '';    
    // }); 


// * [ ] `resize` window.addEventListener('resize', reportWindowSize);
// here, when window resizes image will change, in example
// const newVar = document.querySelector("");
// window.addEventListener('resize', () => {
//     newVar.src="";
// })

// const bigPic = document.querySelector('.container home .intro img');
// window.addEventListener('resize', () => {
//         bigPic.src="../img/citylights.jpg";
//     });



// * [ ] `select` I don't understand the example

    /** function logSelection(event) {
     const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
    }

    const input = document.querySelector('input');
    input.addEventListener('select', logSelection); */


// * [ ] `scroll`

        // window.addEventListener('scroll', () =>{
        //     const scrolled = window.scrollX;
        // });

    // to throttle scroll event, use requestAnimationFrame(), setTimeout(), or CustomEvent, example below
        /** 

        let last_known_scroll_position = 0;
        let ticking = false;

        function doSomething(scroll_pos) {
        // Do something with the scroll position
        }

        window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
            });

            ticking = true;
        }
        }); */




// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// What does it mean by nesting similar events? 

    const para = document.querySelector('.text-content p');
    para.addEventListener('click', (e) => {
        console.log('clicked the paragraph');
    })

    const textDiv = document.querySelector('.text-content');
    textDiv.addEventListener('click', (event) => {
        console.log('Clicked div');
    })


// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

const stopTheLink = document.querySelector('.nav-link');
stopTheLink.addEventListener('click', (event) => {
    console.log('Stopping the link!');
      if (true === false) {
      event.preventDefault();
    }
  })


//   stretch
const advImg = document.querySelector(".img-fluid-rounded");

gsap.to(advImg, {
    duration: 4, 
    y: 100,
    ease: "elastic", 
});
// how to return to original position?
gsap.to(advImg, {
    duration: 5, 
    y: -90,
    ease: "elastic", 
});