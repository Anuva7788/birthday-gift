/* =========================================
   PAGE SYSTEM
========================================= */

const pages = document.querySelectorAll(".page");
const progress = document.getElementById("pageNumber");
const transition = document.getElementById("transition");

let currentPage = 0;

/* =========================================
   BUTTONS
========================================= */

const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(currentPage >= pages.length - 1) return;

        changePage(currentPage + 1);

    });

});

/* =========================================
   CHANGE PAGE
========================================= */

function changePage(index){

    transition.classList.add("show");

    setTimeout(() => {

        pages[currentPage].classList.remove("active");

        currentPage = index;

        pages[currentPage].classList.add("active");

        progress.textContent = currentPage + 1;

        transition.classList.remove("show");

    },600);

}

/* =========================================
   PAGE 2 QUESTION
========================================= */

const meBtn = document.getElementById("meBtn");
const youBtn = document.getElementById("youBtn");

const answerMessage = document.getElementById("answerMessage");
const continueBtn = document.getElementById("continueBtn");

if(meBtn){

    meBtn.addEventListener("click", () => {

        answerMessage.innerHTML =
        "Wrong answer 😂<br>Try again.";

    });

}

if(youBtn){

    youBtn.addEventListener("click", () => {

        answerMessage.innerHTML =
        "Exactly 😌❤️ I knew you'd choose yourself.";

        continueBtn.style.display = "inline-block";

    });

}

if(continueBtn){

    continueBtn.addEventListener("click", () => {

        changePage(2);

    });

}

/* =========================================
   LOVE LETTER
========================================= */

const letter = `

Happy Birthday, My Love ❤️

Hey my love... ❤️

It’s your first birthday with me, and I want to wish you the happiest birthday.

I know I can’t give you something grand or expensive right now, but this is a small gift from my heart. I wanted to remind you that your girl will always be here — to celebrate every special moment, every little progress you make, and every success you achieve.

I want you to know that I’m here, and I’ll always be here.

If there is ever a storm in your life, I’ll be there to stand beside you and protect you. So run to me when something happens, when you need peace, or even when you just want somewhere to rest. I’ll always be here to catch you if you fall.

I know you have so much potential, and I know the beautiful things you are capable of. I also know that you are someone who will always be there for me.

And jaan, your girl is never going to leave you.

Let me be your home.

I know people may have disappointed you before, but I promise I won’t betray you or walk away from you. I might not be perfect, and sometimes I may hurt you, but please always remember that I love you deeply.

Never think that showing me your messy sides will make me leave. I would rather sit beside you and listen to you vent, see you break down, and hold your hand through the difficult moments than let you be alone with thousands of thoughts, wondering, “What if she judges me? What if she leaves?”

I’m your partner.

Everything you carry, I want to carry with you.

I love everything about you — even the parts you think are difficult to love.

So my dear, don’t overthink. ❤️

Your birthdays won’t be dull from now on.

I’ll be here to make them a little more special.

With all my love,
Your girl ❤️


Happy 23rd Birthday.

I love you.
Always. ❤️

`;

const letterText = document.getElementById("loveLetter");

if(letterText){

    letterText.textContent = letter;

}
/* =========================================
   ENVELOPE OPENING
========================================= */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");

if(envelope && paper){

    envelope.addEventListener("click", openEnvelope);

}

function openEnvelope(){

    envelope.classList.add("open");

    setTimeout(() => {

        paper.classList.add("open");

    },700);

}

/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage < pages.length-1){

            changePage(currentPage+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>0){

            changePage(currentPage-1);

        }

    }

});

/* =========================================
   TOUCH SWIPE
========================================= */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    if(touchEndX < touchStartX - 80){

        if(currentPage < pages.length-1){

            changePage(currentPage+1);

        }

    }

    if(touchEndX > touchStartX + 80){

        if(currentPage>0){

            changePage(currentPage-1);

        }

    }

}

/* =========================================
   PAGE LOAD ANIMATION
========================================= */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

/* =========================================
   SMALL BUTTON ANIMATION
========================================= */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mousedown",()=>{

        button.style.transform="scale(.96)";

    });

    button.addEventListener("mouseup",()=>{

        button.style.transform="";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

/* =========================================
   PREVENT DOUBLE CLICKS DURING TRANSITION
========================================= */

let transitioning = false;



changePage = function(index){

    if(transitioning) return;

    transitioning = true;

    transition.classList.add("show");

    setTimeout(()=>{

        pages[currentPage].classList.remove("active");

        currentPage = index;

        pages[currentPage].classList.add("active");

        progress.textContent = currentPage + 1;

        transition.classList.remove("show");

        transitioning = false;

    },600);

};
/* =========================================
   REPLAY BUTTON
========================================= */

const restartBtn = document.getElementById("restartBtn");

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        changePage(0);

    });

}
/* =========================================
   END
========================================= */

console.log("❤️ Happy Birthday Website Loaded ❤️");