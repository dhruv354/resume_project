/* code to introduce slow scrolling effect towards section */

var navbarAnchorTags = document.querySelectorAll('.nav-menu a');
var Sections = document.querySelectorAll('section');
// console.log(navbarAnchorTags);
for(let navbarAnchorTag of navbarAnchorTags){
    navbarAnchorTag.addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId)
        // console.log(targetSection);
        // var targetSectionCoor = targetSection.getBoundingClientRect();
        // var sectionTop = targetSectionCoor.top;
        //  console.log(SectionTop);
        var interval = setInterval(function(){
            var targetSectionCoor = targetSection.getBoundingClientRect();
            if(targetSectionCoor.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20)
    })
}

/* code to introduce animation in the skill section */


var SkillsDisplay = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.skill-progress > div');
var isAnimationDone = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
        console.log('called initializeBars');
    }
}

//initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(targetWidth <= currentWidth){
                clearInterval(interval);
                return;
            }
            currentWidth += 1;
            bar.style.width = currentWidth + '%';
        }, 10)
    }
}

document.addEventListener('scroll', function(){
    var elementCoor = SkillsDisplay.getBoundingClientRect();
    if(isInViewPort(SkillsDisplay) && !isAnimationDone){
        console.log('skill section is visible');
        isAnimationDone = true;
        fillBars();
    }
    else if(isInViewPort(SkillsDisplay) == false){
        isAnimationDone = false;
        initializeBars();
    }
})

function onScroll(){
    let elementCoor = SkillsDisplay.getBoundingClientRect();
    if(!isAnimationDone && elementCoor.top < window.innerheight){
        console.log('skill section is visible');
        isAnimationDone = true;
        fillBars();
    }
    if(!elementCoor.top < window.innerheight){
        isAnimationDone = false;
        initializeBars();
    }
}


function isInViewPort(element){
    let elementCoor = element.getBoundingClientRect();
    let isViewPort = elementCoor.top <= window.innerHeight;
    return isViewPort;
}