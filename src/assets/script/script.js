// Start BurgerMenu
let BurgerBtn = document.getElementById('BurgerBtn');
let CloseBtn = document.getElementById('CloseBtn');
let Menu = document.getElementById('Menu');

BurgerBtn.addEventListener('click' , () => {
    Menu.classList.toggle('-left-96')
    Menu.classList.toggle('left-0')

})

CloseBtn.addEventListener('click' , () => {
    Menu.classList.toggle('-left-96')
    Menu.classList.toggle('left-0')

})
// End BurgerMenu
// Start Slider Code

// End Slider Code
// Start Timer Code 
    let showSec = document.getElementById('Second')
    let showMin = document.getElementById('Min')
    let showHor = document.getElementById('Hour')
    let showDay = document.getElementById('Day')


    let sec = 19;
    let min = 34;
    let hor = 19;
    let day = 29;

    showSec.textContent = sec;
    showMin.textContent = min;
    showHor.textContent = hor;
    showDay.textContent = day;

    setInterval(() => {
        
        if(sec == 0){
            min = min - 1
            sec = 60
        }else{
            --sec 
        }
        if(min == -1){
            hor = hor - 1;
            min = 60
        }
        if(hor == -0){
            day = day - 1;
            hor = 24;
        }

        showSec.textContent = sec;
        showMin.textContent = min;
        showHor.textContent = hor;
        showDay.textContent = day;
    } , 1000)
// End Timer Code
    
