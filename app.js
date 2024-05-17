let gamePlayScreen = document.querySelector(".game-play-screen");
let dott = document.querySelector("#dott");
let playGameDiv = document.querySelector(".play-game-div");
let playGameBtn = document.querySelector("#play-game-id");

let targetVal = document.querySelector("#Target-value");
let durationDiv = document.querySelector(".duration-div");
let durationSpan1 = document.querySelector("#durationSpan1");


let gameModeDiv = document.querySelector(".game-modes");
let allGameModes = document.querySelectorAll(".game-modes button");
let easyModeVar = document.querySelector("#easy-mode");
let mediumModeVar = document.querySelector("#medium-mode");
let hardModeVar = document.querySelector("#hard-mode");

let countDownDiv = document.querySelector(".count-down-div");
let countDownId = document.querySelector("#count-down-id");

let reloadGameDiv = document.querySelector(".reload-game-div");
let reloadGameTilte = document.querySelector("#relaod-game-title-id");
let reloadGameId = document.querySelector("#relaod-game-id");



let gameModeDescArea = document.querySelector(".game-mode-description-area");
let targetSpan2 = document.querySelector("#target-2-span-id");
let durationSpan2 = document.querySelector("#duration-2-id");
let gameModeDescP = document.querySelector("#game-mode-desc-p");
let gamePlayEasyMode = document.querySelector("#play-easy-mode");
let gamePlayMediumMode = document.querySelector("#play-medium-mode");
let gamePlayHardMode = document.querySelector("#play-hard-mode");

let gameInfoId = document.querySelector("#game-info-id");
let howToPlayDescArea = document.querySelector(".how-to-play-desc-area");



let gameScore = document.querySelector("#score-value");
let gameHighScore = document.querySelector("#high-score-value");

const closeModeDescription = document.querySelector("#close-btn-div");


let scorePluser = 0;
let interval = 5000;

let target = 0;
let Duration = 0;

const modeArr = [easyModeVar, mediumModeVar, hardModeVar];
let playGameClick = true;


const tapNotification = new Audio("Sound_Effects/tap-notification-180637.mp3");
const multiPop1 = new Audio("Sound_Effects/multi-pop-1-188165.mp3");
const countDown1 = new Audio("Sound_Effects/countdown-sound-effect-8-bit-151797.mp3");
const cuteLevelUp = new Audio("Sound_Effects/cute-level-up-3-189853.mp3");
const swoosh2 = new Audio("Sound_Effects/swoosh-2-99245.mp3");
const error2 = new Audio("Sound_Effects/error-2-126514.mp3");

playGameBtn.addEventListener("click", () => {
    multiPop1.play();


    let randPosY = Math.floor(Math.random() * 90);
    let randPosX = Math.floor(Math.random() * 90);

    if (randPosY <= 100 - 12) {
        randPosY = Math.floor(Math.random() * 50);
    }

    if (randPosX <= 100 - 10) {
        randPosX = Math.floor(Math.random() * 50);
    }

    dott.style.top = `${randPosY}%`;
    dott.style.left = `${randPosX}%`;


    if (playGameClick) {
        modeArr.forEach((mode) => {
            mode.style.visibility = "visible";
            mode.style.opacity = "1";
            mode.style.top = "0";
        })
        playGameBtn.setAttribute("id", "new-play-game-id");
        playGameClick = false;
    } else {
        modeArr.forEach((mode) => {
            mode.style.visibility = "hidden";
            mode.style.opacity = "0";
            mode.style.top = "-71px";

            gameModeDescArea.style.display = "none";

        })
        playGameBtn.setAttribute("id", "play-game-id");
        playGameClick = true;
    }
})


// close mode description 
closeModeDescription.addEventListener("click", () => {
    gameModeDescArea.style.display = "none";
})

easyModeVar.addEventListener("click", () => {
    multiPop1.play();
    target = 50;
    Duration = 71;
    gameModeDescArea.style.display = "flex";
    targetSpan2.innerText = target;
    durationSpan2.innerText = Duration + "s";
    gameModeDescP.innerText = `This is Easy Mode. You have a simple target of ${target} Hits in Duration of ${Duration}s.`;
    gamePlayEasyMode.style.display = "inline-block";
    gamePlayMediumMode.style.display = "none";
    gamePlayHardMode.style.display = "none";

    gamePlayEasyMode.addEventListener("click", () => {
        multiPop1.play();
        gameModeDescArea.style.display = "none";
        playGameDiv.style.display = "none";
        targetVal.innerText = target;

        // timeout 
        setTimeout(() => {
            durationDiv.style.right = "-5rem";
            durationDiv.classList.add("duration-after-start");
            timer();
        }, 500);

        setTimeout(() => {
            dott.style.display = "block";
            const setIntervalEasy = setInterval(randPosForDott, 3000);
            setTimeout(() => {
                clearInterval(setIntervalEasy);
                error2.play();
                reloadGameDiv.style.opacity = "1";
                reloadGameDiv.style.visibility = "visible";
                reloadGameTilte.innerText = "Game Over";
                dott.style.display = "none";
                durationDiv.classList.remove("duration-after-start");

                console.log("clear");
            }, (Duration * 1000) + 1000);

        }, 5500);
    })

})

mediumModeVar.addEventListener("click", () => {
    multiPop1.play();
    target = 101;
    Duration = 111;
    gameModeDescArea.style.display = "flex";
    targetSpan2.innerText = target;
    durationSpan2.innerText = Duration + "s";
    gameModeDescP.innerText = `This is Medium Mode. You have more problems to complete target of ${target} Hits in Duration of ${Duration}s.`;
    gamePlayEasyMode.style.display = "none";
    gamePlayMediumMode.style.display = "inline-block";
    gamePlayHardMode.style.display = "none";

    gamePlayMediumMode.addEventListener("click", () => {
        multiPop1.play();
        gameModeDescArea.style.display = "none";
        playGameDiv.style.display = "none";
        targetVal.innerText = target;
        setTimeout(() => {
            durationDiv.style.right = "-5rem";
            durationDiv.classList.add("duration-after-start");

            timer();
        }, 500);

        setTimeout(() => {
            dott.style.display = "block";
            const setIntervalHard = setInterval(randPosForDott, 1000);
            setTimeout(() => {
                clearInterval(setIntervalHard);
                error2.play();
                reloadGameDiv.style.opacity = "1";
                reloadGameDiv.style.visibility = "visible";
                reloadGameTilte.innerText = "Game Over";
                dott.style.display = "none";
                durationDiv.classList.remove("duration-after-start");

                console.log("clear");
            }, (Duration * 1000) + 1000);
        }, 5500);
    })
})

hardModeVar.addEventListener("click", () => {
    multiPop1.play();
    target = 201;
    Duration = 201;
    gameModeDescArea.style.display = "flex";
    targetSpan2.innerText = target;
    durationSpan2.innerText = Duration + "s";
    gameModeDescP.innerText = `This is Hard Mode. You have more then more problems to complete target of ${target} Hits in Duration of ${Duration}s. I challange you, you can't complete this...`;
    gamePlayEasyMode.style.display = "none";
    gamePlayMediumMode.style.display = "none";
    gamePlayHardMode.style.display = "inline-block";

    gamePlayHardMode.addEventListener("click", () => {
        multiPop1.play();
        gameModeDescArea.style.display = "none";
        playGameDiv.style.display = "none";
        targetVal.innerText = target;
        setTimeout(() => {
            durationDiv.style.right = "-5rem";
            durationDiv.classList.add("duration-after-start");

            timer();

            setTimeout(() => {
                dott.style.display = "block";
                const setIntervalHard = setInterval(randPosForDott, 500);
                setTimeout(() => {
                    clearInterval(setIntervalHard);
                    error2.play();
                    reloadGameDiv.style.opacity = "1";
                    reloadGameDiv.style.visibility = "visible";
                    reloadGameTilte.innerText = "Game Over";
                    dott.style.display = "none";
                    durationDiv.classList.remove("duration-after-start");

                    console.log("clear");
                }, (Duration * 1000) + 1000);
            }, 5500);
        }, 500);
    })
})


gameInfoId.addEventListener("mouseover", () => {
    howToPlayDescArea.style.visibility = "visible";
    howToPlayDescArea.style.opacity = "1";
})


gameInfoId.addEventListener("mouseleave", () => {
    howToPlayDescArea.style.visibility = "hidden";
    howToPlayDescArea.style.opacity = "0";
})

howToPlayDescArea.addEventListener("mouseover", () => {
    howToPlayDescArea.style.visibility = "visible";
    howToPlayDescArea.style.opacity = "1";
})

howToPlayDescArea.addEventListener("mouseleave", () => {
    howToPlayDescArea.style.visibility = "hidden";
    howToPlayDescArea.style.opacity = "0";
})

const timer = () => {
    // Duration = 5;
    durationSpan1.innerText = Duration + "s";
    setTimeout(() => {
        countDown1.play();
    }, 1000)

    setTimeout(() => {
        const getInterval = setInterval(() => {
            durationSpan1.innerText = Duration + "s";
            Duration--;
            if (Duration === -1) {
                clearInterval(getInterval);
            }
        }, 1000);
    }, 3000);


    let counter = 3;
    const countDownInterval = setInterval(() => {
        countDownDiv.style.display = "flex";
        countDownId.innerText = counter;
        counter--;

        if (counter === -1) {
            countDownId.innerText = "Let's Start";
        }
        if (counter === -2) {
            clearInterval(countDownInterval);
            countDownDiv.style.display = "none";
        }

    }, 1000);

}



dott.addEventListener("click", () => {
    tapNotification.play()
    score();
    randPosForDott();
})

const randPosForDott = () => {
    let randPosY = Math.floor(Math.random() * 90);
    let randPosX = Math.floor(Math.random() * 90);

    if (randPosY <= 100 - 12) {
        randPosY = Math.floor(Math.random() * 80);
    }

    if (randPosX <= 100 - 10) {
        randPosX = Math.floor(Math.random() * 80);
    }

    dott.style.top = `${randPosY}%`;
    dott.style.left = `${randPosX}%`;
}
let saveHighScore = [];
let setToArr;
let GetArr;

// GetArr = localStorage.getItem("HighScore");

saveHighScore = localStorage.getItem("HighScore");
const score = () => {
    scorePluser++;
    gameScore.innerText = scorePluser;

    highScore = gameScore.innerText;
    if (gameScore.innerText == saveHighScore) {
        setToArr = localStorage.setItem("HighScore", scorePluser);
        gameHighScore.innerText = gameScore.innerText;
    }

    setToArr = localStorage.setItem("HighScore", scorePluser);

    if (target === 50) {
        levelForEasyMode();
    } else if (target === 101) {
        levelForMediumMode();
    } else if (target === 201) {
        levelForHardMode();
    }

    // complete target 
    const completeTarget = () => {
        if (scorePluser === target) {
            dott.style.display = "none";
            durationDiv.classList.remove("duration-after-start");
            reloadGameDiv.style.opacity = "1";
            reloadGameDiv.style.visibility = "visible";
            console.log(target);
            console.log(scorePluser);
            cuteLevelUp.play();
        }
    }
    completeTarget();

}

gameHighScore.innerText = saveHighScore;

const levelForEasyMode = () => {
    if (scorePluser > 10 && scorePluser < 31) {
        dott.style.width = "3rem";
        dott.style.height = "3rem";
    } else if (scorePluser > 30 && scorePluser < 41) {
        dott.style.width = "2rem";
        dott.style.height = "2rem";
    } else if (scorePluser > 40 && scorePluser < 51) {
        dott.style.width = "1rem";
        dott.style.height = "1rem";
    }

    // for sound effects 
    if (scorePluser > 10 && scorePluser < 12) {
        swoosh2.play();
    } else if (scorePluser > 30 && scorePluser < 32) {
        swoosh2.play();
    } else if (scorePluser > 40 && scorePluser < 42) {
        swoosh2.play();
    }
}


const levelForMediumMode = () => {
    if (scorePluser > 10 && scorePluser < 31) {
        dott.style.width = "3rem";
        dott.style.height = "3rem";
    } else if (scorePluser > 30 && scorePluser < 61) {
        dott.style.width = "2rem";
        dott.style.height = "2rem";
    } else if (scorePluser > 60 && scorePluser < 81) {
        dott.style.width = "1.5rem";
        dott.style.height = "1.5rem";
    } else if (scorePluser > 80 && scorePluser < 102) {
        dott.style.width = "1rem";
        dott.style.height = "1rem";
    }

    // for sound effects 
    if (scorePluser > 10 && scorePluser < 12) {
        swoosh2.play();
    } else if (scorePluser > 30 && scorePluser < 32) {
        swoosh2.play();
    } else if (scorePluser > 60 && scorePluser < 62) {
        swoosh2.play();
    } else if (scorePluser > 80 && scorePluser < 82) {
        swoosh2.play();
    }
}

const levelForHardMode = () => {
    if (scorePluser > 20 && scorePluser < 41) {
        dott.style.width = "3rem";
        dott.style.height = "3rem";
    } else if (scorePluser > 40 && scorePluser < 61) {
        dott.style.width = "2rem";
        dott.style.height = "2rem";
    } else if (scorePluser > 60 && scorePluser < 81) {
        dott.style.width = "1rem";
        dott.style.height = "1rem";
    } else if (scorePluser > 80 && scorePluser < 101) {
        dott.style.width = "0.8rem";
        dott.style.height = "0.8rem";
    } else if (scorePluser > 100 && scorePluser < 121) {
        dott.style.width = "4rem";
        dott.style.height = "4rem";
    } else if (scorePluser > 120 && scorePluser < 141) {
        dott.style.width = "3rem";
        dott.style.height = "3rem";
    } else if (scorePluser > 140 && scorePluser < 161) {
        dott.style.width = "2rem";
        dott.style.height = "2rem";
    } else if (scorePluser > 160 && scorePluser < 181) {
        dott.style.width = "1rem";
        dott.style.height = "1rem";
    } else if (scorePluser > 180 && scorePluser < 191) {
        dott.style.width = "0.8rem";
        dott.style.height = "0.8rem";
    } else if (scorePluser > 190 && scorePluser < 202) {
        dott.style.width = "0.4rem";
        dott.style.height = "0.4rem";
    }


    // for sound effects 
    if (scorePluser > 20 && scorePluser < 22) {
        swoosh2.play();
    } else if (scorePluser > 40 && scorePluser < 42) {
        swoosh2.play();
    } else if (scorePluser > 60 && scorePluser < 62) {
        swoosh2.play();
    } else if (scorePluser > 80 && scorePluser < 82) {
        swoosh2.play();
    } else if (scorePluser > 100 && scorePluser < 102) {
        swoosh2.play();
    } else if (scorePluser > 120 && scorePluser < 122) {
        swoosh2.play();
    } else if (scorePluser > 140 && scorePluser < 142) {
        swoosh2.play();
    } else if (scorePluser > 160 && scorePluser < 162) {
        swoosh2.play();
    } else if (scorePluser > 180 && scorePluser < 182) {
        swoosh2.play();
    } else if (scorePluser > 190 && scorePluser < 192) {
        swoosh2.play();
    }
}


reloadGameId.addEventListener("click", () => {
    location.reload();
})



