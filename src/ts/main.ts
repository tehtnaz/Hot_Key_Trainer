import "/src/scss/styles.scss"

const timer_el = document.getElementById("Timer")!;
const score = document.getElementById("Score")!;
const High_Score = document.getElementById("High_Score")!;
const elementArray = [
    document.getElementById("1")!,
    document.getElementById("2")!,
    document.getElementById("3")!,
    document.getElementById("4")!,
    document.getElementById("5")!,
    document.getElementById("6")!, 
    document.getElementById("7")!,
    document.getElementById("8")!, 
    document.getElementById("9")!
]

//bind click button
document.getElementById("start_btn")!.onclick = start;

//bind drop button
document.getElementById("dropbtn")!.onclick = myFunction;

//hotkeys
const hotkeyArray = [
    document.getElementById("1hk")!,
    document.getElementById("2hk")!,
    document.getElementById("3hk")!,
    document.getElementById("4hk")!,
    document.getElementById("5hk")!,
    document.getElementById("6hk")!,
    document.getElementById("7hk")!,
    document.getElementById("8hk")!,
    document.getElementById("9hk")!
] as HTMLInputElement[];


let time = Date.now();
let timer_on = false;
let score_count = 0;
let randomNum = Math.floor(Math.random() * 9) + 1;
const Scores_list = [0];
const audio = new Audio('press.wav');
const end_sound = new Audio('fart.wav');


function findGreatest(arr: number[]){
    let largestNum = 0;
    for(const item of arr){
        if(item > largestNum) largestNum = item;
    }
    return largestNum;
}

//keyboard listener
document.addEventListener('keydown', (event) => {
    if(timer_on === false) return;

    const name = event.key;
    let num = 0;
    elementArray.find((item, index) =>{
        if(name === item.innerHTML){
            num = index + 1;
            return true;
        }else{
            return false;
        }
    });

    console.log(name);

    if (score_count > findGreatest(Scores_list)){
        score.style.color = "#39ff14";
    } else{
        score.style.color = "white";
    }
    if (randomNum === num){
        audio.play();
        score_count += 1;
        randomNum = Math.floor(Math.random() * 9) + 1;
        for(const item of elementArray){
            item.style.color = "#1F2022";
        }
    }
}, false);


function start(){
    audio.play();
    timer_on = true;
    time = Date.now();
}
function updateClock(){
    //setting hotkeys
    for(let i = 0; i < elementArray.length; i++){
        elementArray[i].innerHTML = hotkeyArray[i].value!;
    }

    if(timer_on === true){
        elementArray[randomNum - 1].style.color = "green";

        timer_el.innerHTML = `Timer: ${Math.floor((time - Date.now()) / 1000) + 10}.${Math.floor((Date.now() - time)/10) % 100}`;
        score.innerHTML = "Score: " + score_count;
        High_Score.innerHTML = "High Score: " + findGreatest(Scores_list);
        if (time + 10000 < Date.now()){
            end_sound.play();
            Scores_list.unshift(score_count);
            score_count = 0;
            timer_on = false;
            timer_el.innerHTML = `Timer: 0.00`;
            High_Score.innerHTML = "High Score: " + findGreatest(Scores_list);
            score.style.color = "white";
            for(const item of elementArray){
                item.style.color = "#1F2022";
            }
        }
    }
    setTimeout(updateClock, 10);
}

let dropdwn = true;
//hot key droptdwnbtn 
function myFunction() {
    if (dropdwn == true){
        
        document.getElementById("myDropdown")!.classList.toggle("show");
        dropdwn = false;
    } else{
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        dropdwn = true;
    }
  }

updateClock();