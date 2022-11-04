
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");


// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box

    // document.querySelector(".start_btn").style.setProperty("backgroundImage", "url('https://th.bing.com/th/id/OIP.ClC3grGpNUBJKf3tJrsUGwHaE7?pid=ImgDet&rs=1')")
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    // startTimer(15); //calling startTimer function
    // startTimerLine(0); //calling startTimerLine function
}

// let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let option_tag;
let val001;
let val002;
let val003;
let val004;
let val005;
let val006;
let val007;
let perrr;
let val01;
let val02;
let val03;
let val04;
let val05;
let val06;
let val07;
let perc;


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    console.log("restared");
    // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';


    // let option_tag =
    //     '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
    //     '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

    if (questions[index].options.length == 2) {

        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[1] + '</span></div>';

        // document.getElementById("option_listid").style.marginTop = "45px";
        // document.getElementById("quiz_boxid").style.height = "390px";
        // margin - top: 30 px;
        // margin - bottom: 50 px;
    }
    if (questions[index].options.length == 3) {
        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[2] + '</span></div>';

    }

    if (questions[index].options.length == 4) {
        option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

    }



    // if (questions[index].options.length > 3) {
    //     console.log("2");
    // } else {
    //     console.log("7");
    // }

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag;

/* prayag (npm_backup) edited 15/4  6.00 pm */

function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option

    console.log("que " + que_numb + userAns);
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    // option_list.children[i].setAttribute("class", "option clicked");
    answer.classList.add("correct"); //adding green color to correct selected option
    // answer.insertAdjacentHTML("beforeend", tickIconTag);
    /* over pp */

    // if (que_numb == 1) {
    //     val001 = answer.textContent;
    //     // val01 = val001;
    //     updateOne(val001, 1);

    // }

    // if (que_numb == 2) {
    //     val002 = answer.textContent;
    //     // val01 = val001;
    //     updateOne(val002, 2);
    // }

    // if (que_numb == 3) {
    //     val003 = answer.textContent;
    //     // val03 = val003;
    //     updateOne(val003, 3);

    // }
    // if (que_numb == 4) {
    //     val004 = answer.textContent;
    //     // val04 = val004;
    //     updateOne(val004, 4);

    // }
    // if (que_numb == 5) {
    //     val005 = answer.textContent;
    //     // val05 = val005;
    //     updateOne(val004, 4);

    // }

    // if (que_numb == 6) {
    //     val006 = answer.textContent;
    //     // val06 = val006;
    //     updateOne(val004, 4);

    // }
    // if (que_numb == 7) {
    //     val007 = answer.textContent;
    //     // val07 = val007;
    //     updateOne(val004, 4);

    // }


if (perrr < 50){
    let html = document.getElementById("timer_secid").innerHTML="🤓";
}

if (perrr > 50){
    let html = document.getElementById("timer_secid").innerHTML="😰";
}

    if (que_numb == 1) {

        if (answer.textContent == "Female") {
            val001 = 0;
            updateOne(val001, 1);
        }

        if (answer.textContent == "Male") {
            val001 = 1;
            updateOne(val001, 1);
        }

        // val01 = val001;


    }

    if (que_numb == 2) {

        if (answer.textContent == "94-120") {
            val002 = 107;
            updateOne(val002, 2);
        }

        if (answer.textContent == "120-150") {
            val002 = 135;
            updateOne(val002, 2);
        }
        if (answer.textContent == "150-180") {
            val002 = 165;
            updateOne(val002, 2);
        }
        if (answer.textContent == "180-200") {
            val002 = 190;
            updateOne(val002, 2);
        }

    }

    if (que_numb == 3) {

        if (answer.textContent == "71-90") {
            val003 = 81;
            updateOne(val003, 3);
        }

        if (answer.textContent == "90-140") {
            val003 = 115;
            updateOne(val003, 3);
        }
        if (answer.textContent == "140-160") {
            val003 = 150;
            updateOne(val003, 3);
        }
        if (answer.textContent == "160-202") {
            val003 = 181;
            updateOne(val003, 3);
        }


    }

    if (que_numb == 4) {

        val004 = answer.textContent;
        // val07 = val007;
        updateOne(val004, 4);
    }

    if (que_numb == 5) {

        if (answer.textContent == "typical angina") {
            val005 = 1;
            updateOne(val005, 5);
        }

        if (answer.textContent == "atypical angina") {
            val005 = 2;
            updateOne(val005, 5);
        }
        if (answer.textContent == "non-angina") {
            val005 = 3;
            updateOne(val005, 5);
        }
        if (answer.textContent == "160-202") {
            val005 = 4;
            updateOne(val005, 5);
        }


    }

    if (que_numb == 6) {

        if (answer.textContent == "flat or downsloping") {
            val006 = 0;
            updateOne(val006, 6);
        }

        if (answer.textContent == "upsloping") {
            val006 = 1;
            updateOne(val006, 6);
        }

    }

    if (que_numb == 7) {

        // val007 = answer.textContent;
        // // val07 = val007;
        // updateOne(val004, 4);
        if (answer.textContent == "normal or fixed defect") {
            val007 = 0;
            updateOne(val007, 7);
        }

        if (answer.textContent == "reversible defect") {
            val007 = 1;
            updateOne(val007, 7);
        }

    }

    // val01 = val001;
    // val02 = val002;
    // val03 = val003;
    // val04 = val004;
    // val05 = val005;
    // val06 = val006;
    // val07 = val007;

    // if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    //     userScore += 1; //upgrading score value with 1
    //     answer.classList.add("correct"); //adding green color to correct selected option
    //     // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //     console.log("Correct Answer");
    //     console.log("Your correct answers = " + userScore);
    // } else {
    //     answer.classList.add("incorrect"); //adding red color to correct selected option
    //     // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //     console.log("Wrong Answer");

    //     for (i = 0; i < allOptions; i++) {
    //         if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
    //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //             // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //             console.log("Auto selected correct answer.");
    //         }
    //     }
    // }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    // next_btn.classList.add("show"); //show the next button if user selected any option
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        // startTimer(timeValue); //calling startTimer function
        // startTimerLine(widthValue); //calling startTimerLine function
        // timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }

}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
   // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>You have  ' + '<p style="font-size: 20px;font-weight: bold;">'+perrr+'%  </p>' + ' chances of having Heart Disease<p>' + '</p><p>' + '</p></span>';
        scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
    

}

// function startTimer(time) {
//     counter = setInterval(timer, 1000);

//     function timer() {
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if (time < 9) { //if timer is less than 9
//             let addZero = timeCount.textContent;
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if (time < 0) { //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions[que_count].answer; //getting correct answer from array
//             for (i = 0; i < allOptions; i++) {
//                 if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for (i = 0; i < allOptions; i++) {
//                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//             }
//             next_btn.classList.add("show"); //show the next button if user selected any option
//         }
//     }
// }

// function startTimerLine(time) {
//     counterLine = setInterval(timer, 29);

//     function timer() {
//         time += 1; //upgrading time value with 1
//         time_line.style.width = time + "px"; //increasing width of time_line with px by time value
//         if (time > 549) { //if time value is greater than 549
//             clearInterval(counterLine); //clear counterLine
//         }
//     }
// }

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}


const width = 100;
const height = 400;

const holder = d3.select(".child2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// draw a rectangle
const y0 = 20;
const height0 = 380;
holder.append("rect")
    .attr("x", 5)
    .attr("y", y0 + height0)
    .style("fill", "rgb(0,255,0)")
    .attr("height", 0)
    .attr("width", 90);

// draw a container rectangle
holder.append("rect")
    .attr("x", 5)
    .attr("y", y0)
    .style("fill", "none")
    .style("stroke", "lightblue")
    .style("stroke-width", 4)
    .attr("height", height0)
    .attr("width", 90);

// add text inside rectangle
holder.append("text")
    .text("0.00%")
    .attr("x", 12)
    .attr("y", y0 + height0 - 10)
    .attr("fill", "black")
    .attr("font-family", "Verdana")
    .attr("font-size", "20");



val01 = document.getElementById("nSex1").value;
val02 = document.getElementById("nRestbp1").value;
val03 = document.getElementById("nThalach1").value;
val04 = document.getElementById("nCa1").value;
val05 = document.getElementById("nCp1").value;
val06 = document.getElementById("nSlope1").value;
val07 = document.getElementById("nThal1").value;


// let val01 = val001;
// let val02 = val002;
// let val03 = val003;
// let val04 = val004;
// let val05 = val005;
// let val06 = val006;
// let val07 = val007;

// Check for changes in the inputs and update output bar

d3.select("#nSex1").on("input", function() {
    updateOne(+this.value, 1);
});
d3.select("#nSex2").on("input", function() {
    updateOne(+this.value, 1);
});
d3.select("#nRestbp1").on("input", function() {
    updateOne(+this.value, 2);
});
d3.select("#nRestbp2").on("input", function() {
    updateOne(+this.value, 2);
});
d3.select("#nThalach1").on("input", function() {
    updateOne(+this.value, 3);
});
d3.select("#nThalach2").on("input", function() {
    updateOne(+this.value, 3);
});
d3.select("#nCa1").on("input", function() {
    updateOne(+this.value, 4);
});
d3.select("#nCa2").on("input", function() {
    updateOne(+this.value, 4);
});
d3.select("#nCp1").on("input", function() {
    updateOne(+this.value, 5);
});
d3.select("#nCp2").on("input", function() {
    updateOne(+this.value, 5);
});
d3.select("#nSlope1").on("input", function() {
    updateOne(+this.value, 6);
});
d3.select("#nSlope2").on("input", function() {
    updateOne(+this.value, 6);
});
d3.select("#nThal1").on("input", function() {
    updateOne(+this.value, 7);
});
d3.select("#nThal2").on("input", function() {
    updateOne(+this.value, 7);
});

// Update the heart disease probability
function updateOne(value, index) {

    if (index === 1) {
        val01 = value;
    } else if (index === 2) {
        val02 = value;
    } else if (index === 3) {
        val03 = value;
    } else if (index === 4) {
        val04 = value;
    } else if (index === 5) {
        val05 = value;
    } else if (index === 6) {
        val06 = value;
    } else if (index === 7) {
        val07 = value;
    } else if (index === -1) {
        // Set everything back to default state:
        val01 = document.getElementById("nSex1").defaultValue;
        document.getElementById("nSex1").value = val01;
        document.getElementById("nSex2").value = val01;
        val02 = document.getElementById("nRestbp1").defaultValue;
        document.getElementById("nRestbp1").value = val02;
        document.getElementById("nRestbp2").value = val02;
        val03 = document.getElementById("nThalach1").defaultValue;
        document.getElementById("nThalach1").value = val03;
        document.getElementById("nThalach2").value = val03;
        val04 = document.getElementById("nCa1").defaultValue;
        document.getElementById("nCa1").value = val04;
        document.getElementById("nCa2").value = val04;
        val05 = document.getElementById("nCp1").defaultValue;
        document.getElementById("nCp1").value = val05;
        document.getElementById("nCp2").value = val05;
        val06 = document.getElementById("nSlope1").defaultValue;
        document.getElementById("nSlope1").value = val06;
        document.getElementById("nSlope2").value = val06;
        val07 = document.getElementById("nThal1").defaultValue;
        document.getElementById("nThal1").value = val07;
        document.getElementById("nThal2").value = val07;
    }

    /* prayag (npm_backup) edited 15/4  6.00 pm */

    let srbp_val = (val02 - 131.7157) / 17.7478;
    let sthalach_val = (val03 - 149.3278) / 23.1211;
    let sca_val = (val04 - 0.6722) / 3.0;

    let cp_contr = 0.0;
    if (val05 === 1) {
        cp_contr = -2.2318;
    } else if (val05 === 2) {
        cp_contr = -1.2681;
    } else if (val05 === 3) {
        cp_contr = -2.1124;
    }
    let slope_contr = 0.0;
    if (val06 === 1) {
        slope_contr = -1.4726;
    }
    let thal_contr = 0.0;
    if (val07 === 1) {
        thal_contr = 1.5009;
    }

    let scprod = 1.4361 * val01 + 0.4415 * srbp_val - 0.4431 * sthalach_val + 3.7984 * sca_val + cp_contr + slope_contr + thal_contr;
    let drec = 1.0 / (1.0 + Math.exp(-scprod));
    let drecs = height0 * drec;
    drec *= 100;
    perrr = Math.round(drec * 100) / 100;
    // Update plot:
    let rcolor = percentToRGB(drec);
    holder.select("rect")
        .attr("y", y0 + height0 - drecs)
        .attr("height", drecs)
        .style("fill", rcolor);

    holder.select("text")
        .text(function() {

            return parseFloat(Math.round(drec * 100) / 100).toFixed(2) + "%";
        });

}



function percentToRGB(percent) {
    if (percent === 100) {
        percent = 99
    }
    let r, g, b;

    if (percent < 50) {
        // green to yellow
        r = Math.floor(255 * (percent / 50));
        g = 255;

    } else {
        // yellow to red
        r = 255;
        g = Math.floor(255 * ((50 - percent % 50) / 50));
    }
    b = 0;

    return "rgb(" + r + "," + g + "," + b + ")";
}