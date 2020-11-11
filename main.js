const navbar = () => {
    let state = true;
    const divs = document.querySelectorAll(".navbar div");
    const openNav = document.querySelector(".open-nav");
    const openNavA = document.querySelectorAll(".open-nav a");
    const nav = () => {
      if (state) {
        // Step 1
        divs[1].classList.add("header-click-1");
        divs[2].classList.add("header-click-1");
        // Step 2
        setTimeout(() => {
          divs[0].classList.add("header-click-2-a");
          divs[2].classList.add("header-click-2-b");
        }, 300);
        // Step 3
        setTimeout(() => {
          divs[1].classList.add("header-click-3");
        }, 600);
        // Step 4
        setTimeout(() => {
          divs[0].classList.add("header-click-4-a");
          divs[2].classList.add("header-click-4-b");
        }, 600);
      } else {
        divs[0].classList.add("header-close-1");
        divs[2].classList.add("header-close-1");
        setTimeout(() => {
          divs[1].className = "";
          divs[0].className = "";
          divs[2].className = "";
        }, 300);
      }
      openNav.classList.toggle("open-nav-on");
      for (let i = 0; i < 4; i++) {
        openNavA[i].classList.toggle(`open-nav-a-${i + 1}`);
      }
      state = !state;
    };
    document.querySelector(".navbar").addEventListener("click", nav);
  };
navbar()

//
const headerRight = () => {
    let counter = 0;
    const observeEl = document.querySelector(".obesrve-api");
    const headerRight = document.querySelector(".header-right");
    const headerLeft = document.querySelector(".header-left");
    const spinner = document.querySelector(".spinner-loading");
    let resizeObserver = new ResizeObserver((entry) => {
      if (entry[0].contentRect.height > 5) {
        if (counter > 0) {
          spinner.classList.add("spinner-on");
          headerRight.style.display = "none";
          headerLeft.style.display = "none";
          setTimeout(() => {
            spinner.classList.remove("spinner-on");
            headerRight.style.display = "flex";
            headerLeft.style.display = "flex";
          }, 500);
        }
      }
      counter++;
    });
    // Add a listener to body
    resizeObserver.observe(observeEl);
  };
 headerRight()
 
 //

 const projectsObserve = () => {
    const observeEl = document.querySelector(".observe-projects");
    const projectsWrapper = document.querySelector(".projects-title-wrapper");
    const recomTitle = document.querySelector(".recom-title");
    let resizeObserver = new ResizeObserver((entry) => {
      projectsWrapper.style.display = "none";
      recomTitle.style.display = "none";
      setTimeout(() => {
        projectsWrapper.style.display = "flex";
        recomTitle.style.display = "unset";
      }, 500);
    });
    resizeObserver.observe(observeEl);
  };
projectsObserve()

//
const recom = () => {
    let counter = 3;
    let pastCounter = 0;
    const leftArrow = document.querySelector(".recom-arrow-left-svg");
    const rightArrow = document.querySelector(".recom-arrow-right-svg");
    const clients = document.querySelectorAll(".recom-inside-inside");
    const arrowClick = (direction) => {
      direction === 'left' ? counter++ : counter--
      counter = Math.abs(counter % 3);
      clients[pastCounter].className = `recom-inside-inside recom-inside-active recom-inside-move-${direction}`;
      clients[counter].className = `recom-inside-inside recom-inside-${direction}-center`;
      pastCounter = counter;
    };
    leftArrow.addEventListener("click", () => arrowClick('left'));
    rightArrow.addEventListener("click", () => arrowClick('right'));
  };
recom()

//

const awards = () => {
    const awards = document.querySelector('.awards-wrapper')
    const awardsObserve = document.querySelector('.awards-observer')
    const callback = function(entries) {
        if(entries[0].isIntersecting === true) {   
               return awards.className = 'awards-wrapper awards-wrapper-on'
        } awards.className = 'awards-wrapper'
    }
   new IntersectionObserver(callback).observe(awardsObserve)
   
    // Resize Observer
     const resizeCallback = new ResizeObserver(() => {
         awards.style.display = 'none'
         setTimeout(() => {
             awards.style.display = 'flex'
         }, 500)
     })
     resizeCallback.observe(awardsObserve)
   }
   awards()

   //

   const workWith = () => {
    const titleWrapper = document.querySelector('.work-with-title-wrapper')
    const titleLine = document.querySelector('.work-with-title-div')
    const titleObserve = document.querySelector('.work-with-observe')
    const titleH2 = document.querySelector('.work-with-title-h2')
    const returnFcun = () => {
        titleLine.classList.add('work-with-title-div-on')
        titleH2.classList.add('work-with-title-h2-on')
    }
    const callback = function(entry) {
        if (entry[0].isIntersecting === true) {
            return returnFcun()
        }
        titleLine.className = 'work-with-title-div'
        titleH2.className = 'work-with-title-h2'
    }
    new IntersectionObserver(callback).observe(titleObserve)

    const resizeCallback = new ResizeObserver(() => {
        titleWrapper.style.display = 'none'
        setTimeout(() => {
            titleWrapper.style.display = 'flex'
        }, 500)
    })
    resizeCallback.observe(titleObserve)
}
workWith()

//

const contact = () => {
    const btn = document.querySelector('.contact-btn')
    const fullName = document.querySelector('#input-text')
    const email = document.querySelector('#input-email')
    let testEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let observeCounter = 0
    const formDiv = document.querySelector('.contact-right-form')
    const spinner = document.querySelector('.contact-spinner')
    const sentMsg = document.querySelector('.contact-msg-sent')
    const btnClick = () => {
     let counter = 0
     if (email.value.match(testEmail)) {
         counter++
     } else {
         email.classList.add('input-red-line')
     }
     if (fullName.value.length > 5) {
         counter++
     } else {
        fullName.classList.add('input-red-line')
     }
     if (counter == 2) {
         btn.classList.add('btn-on-click')
         spinner.classList.add('contact-spinner-on')
         setTimeout(() => {             
             formDiv.classList.add('contact-right-click')
             spinner.classList.remove('contact-spinner-on')
             setTimeout(() => {
             sentMsg.classList.add('contact-msg-sent-on')
             }, 0)
         }, 1500)
     } else {console.log('Something is not completed')}
    }
    const typing = (e) => {
        if (e.target.classList.contains('input-red-line')) {
            e.target.classList.remove('input-red-line')
        }
    }
    btn.addEventListener('click', btnClick)
    fullName.addEventListener('keyup', typing)
    email.addEventListener('keyup', typing)

    // InterSection observe starts from here below
    const formFunction = (e) => {
      if (e.keyCode === 13) {
          btnClick()
      }
    }
    const callback = function(entry) {
        if (entry[0].isIntersecting === true) {
            observeCounter++
          return formDiv.addEventListener('keyup', formFunction)
        }
        if (observeCounter > 0) {
            formDiv.removeEventListener('keyup', formFunction)
        }
    }
    new IntersectionObserver(callback).observe(formDiv)
}
contact()

//

const loadingPage = () => {
  const img = document.querySelector('.header-img')
  img.src = './media/header/01.jpg'
  const headerRight = document.querySelector('.header-right')
  const headerLeft = document.querySelector('.header-left')
  const spinner = document.querySelector('.spinner-loading')
  img.onload = function() {
   spinner.className='spinner-loading'
   headerRight.style.display = 'flex'
   headerLeft.style.display = 'flex'
  }
 }
 loadingPage()