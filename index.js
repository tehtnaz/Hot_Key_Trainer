let timer_el = document.getElementById("Timer");
let score = document.getElementById("Score");
let High_Score = document.getElementById("High_Score");
let one_el = document.getElementById("1");
let two_el = document.getElementById("2");
let three_el = document.getElementById("3");
let four_el = document.getElementById("4");
let five_el = document.getElementById("5");
let z_el = document.getElementById("6"); 
let x_el = document.getElementById("7");
let c_el = document.getElementById("8"); 
let v_el = document.getElementById("9");

//hotkeys
let onehk = document.getElementById("1hk");
let twohk = document.getElementById("2hk");
let threehk = document.getElementById("3hk");
let fourhk = document.getElementById("4hk");
let fivehk = document.getElementById("5hk");
let sixhk = document.getElementById("6hk");
let sevenhk = document.getElementById("7hk");
let eighthk = document.getElementById("8hk");
let ninehk = document.getElementById("9hk");



let timer_count = 100;
let timer_on = false;
let score_count = 0;
let randomNum = Math.floor(Math.random() * 9) + 1;
let Scores_list = [0];
let audio = new Audio('press.wav');
let end_sound = new Audio('fart.wav');



function BubbleSort(arr){
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - i - 1; j++){

            if(arr[j + 1] < arr[j]){

                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr[arr.length - 1];
}

//keyboard listener
function keyboard_listener(){
    if (randomNum == 1){
        one_el.style.color = "green";
    } else if (randomNum == 2){
        two_el.style.color = "green";
    } else if (randomNum == 3){
        three_el.style.color = "green";
    } else if (randomNum == 4){
        four_el.style.color = "green";
    } else if (randomNum == 5){
        five_el.style.color = "green";
    } else if (randomNum == 6){
        z_el.style.color = "green"
    } else if (randomNum == 7){
        x_el.style.color = "green";
    } else if (randomNum == 8){
        c_el.style.color = "green";
    } else if (randomNum == 9){
        v_el.style.color = "green";
    }
    
    document.addEventListener('keyup', (event) => {
        let name = event.key;
        if (name == one_el.innerHTML){
            name = "1";
        } else if (name == two_el.innerHTML){
            name = "2";
        } else if (name == three_el.innerHTML){
            name = "3";
        } else if (name == four_el.innerHTML){
            name = "4";
        } else if(name == five_el.innerHTML){
            name = "5";
        }else if (name == z_el.innerHTML){
            name = "6";
        } else if (name == x_el.innerHTML){
            name = "7";
        } else if (name == c_el.innerHTML){
            name = "8";
        } else if (name == v_el.innerHTML){
            name = "9";
        } else{
            name = name;
        }
        console.log(name);
        if (score_count > BubbleSort(Scores_list)){
            score.style.color = "#39ff14";
        } else{
            score.style.color = "white";
        }
        if (randomNum == name){
            audio.play();
            score_count += 1;
            randomNum = Math.floor(Math.random() * 9) + 1;
            one_el.style.color = "#1F2022";
            two_el.style.color = "#1F2022";
            three_el.style.color = "#1F2022";
            four_el.style.color = "#1F2022";
            five_el.style.color = "#1F2022";
            z_el.style.color = "#1F2022";
            x_el.style.color = "#1F2022";
            c_el.style.color = "#1F2022";
            v_el.style.color = "#1F2022";

        }
      }, false);
}


function start(){
    
    audio.play();
    timer_on = true;

}

function updateClock(){
    setTimeout(updateClock,100);    

    //setting hotkeys
    one_el.innerHTML = onehk.value;
    two_el.innerHTML = twohk.value;
    three_el.innerHTML = threehk.value;
    four_el.innerHTML = fourhk.value;
    five_el.innerHTML = fivehk.value;
    z_el.innerHTML = sixhk.value;
    x_el.innerHTML = sevenhk.value;
    c_el.innerHTML = eighthk.value;
    v_el.innerHTML = ninehk.value;

    if(timer_on == true){
        keyboard_listener();

        timer_count -= 1;
        timer_el.innerHTML = "Timer: " + Math.floor(timer_count/10) + ":" + timer_count%10+ "0";
        score.innerHTML = "Score: " + score_count;
        High_Score.innerHTML = "High Score: " + BubbleSort(Scores_list);
        if (timer_count == 0){
            end_sound.play();
            Scores_list.unshift(score_count);
            score_count  = 0;
            timer_on = false;
            timer_count = 100;
            High_Score.innerHTML = "High Score: " + BubbleSort(Scores_list);
            score.style.color = "white";
            one_el.style.color = "#1F2022";
            two_el.style.color = "#1F2022";
            three_el.style.color = "#1F2022";
            four_el.style.color = "#1F2022";
            five_el.style.color = "#1F2022";
            z_el.style.color = "#1F2022";
            x_el.style.color = "#1F2022";
            c_el.style.color = "#1F2022";
            v_el.style.color = "#1F2022";
        }
    }

}

let dropdwn = true;
//hot key droptdwnbtn 
function myFunction() {
    if (dropdwn == true){
        
        document.getElementById("myDropdown").classList.toggle("show");
        dropdwn = false;
    } else{
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        dropdwn = true;
    }
  }

updateClock();