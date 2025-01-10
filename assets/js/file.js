// Game logic ----------------------- Starts
let answer = 'INDIA';
let level = '1';
let themeaudio = document.getElementById('themeSong');
let musicButton = document.getElementById('music');
let musicstats = "mute";

  // theme song
  function playmusic() {
    if (musicstats == "mute") {
        themeaudio.loop = true;
        themeaudio.play();
        musicstats = "play";
        musicButton.innerHTML = '&#128362;';
    } else if (musicstats == "play") {
        themeaudio.loop = false;
        themeaudio.pause();
        musicstats = "mute";
        musicButton.innerHTML = '&#128360;';
    }
}

function Logic () {
    let game = document.getElementById('game');
    let scorelog = document.getElementById('score_log');
    let levelstats = document.getElementById('levelstats');
    let image = document.getElementById('image');
    let answerscreen = document.getElementById('answer');
    let audioone = document.getElementById('audioOne');

    // setInterval(()=>{
    //     themeaudio.play();
    // }, 1000);

    // next level
    function nextlevel () {
                function bgDetails() {
                    image.style.backgroundSize = 'contain';
                    image.style.backgroundRepeat = 'no-repeat';
                    image.style.backgroundPositionX = 'center';
                }

                function gameDetails() {
                    game.style.display = 'flex';
                    scorelog.style.display = 'none';
                }

        switch (level) {
            case '1' :
                levelstats.innerHTML = 'Level 2'
                image.style.background = 'url("../../assets/src/Flag_of_China.png")';
                bgDetails()
                answer = 'CHINA';
                level = '2';
                gameDetails()
                break;
            case '2' :
                levelstats.innerHTML = 'Level 3'
                image.style.background = 'url("../../assets/src/Flag_of_Indonesia.png")';
                bgDetails()
                answer = 'INDONESIA';
                level = '3';
                gameDetails()
                break;
            case '3' :
                levelstats.innerHTML = 'Level 4'
                image.style.background = 'url("../../assets/src/Flag_of_Pakistan.png")';
                bgDetails()
                answer = 'PAKISTAN';
                level = '4';
                gameDetails()
                break;
            case '4' :
                levelstats.innerHTML = 'Level 5'
                image.style.background = 'url("../../assets/src/Flag_of_Bangladesh.png")';
                bgDetails()
                answer = 'BANGLADESH';
                level = '5';
                gameDetails()
                break;
            case '5' :
                levelstats.innerHTML = 'Level 6'
                image.style.background = 'url("../../assets/src/Flag_of_Japan.png")';
                bgDetails()
                answer = 'JAPAN';
                level = '6';
                gameDetails()
                break;
            case '6' :
                levelstats.innerHTML = 'Level 7'
                image.style.background = 'url("../../assets/src/Flag_of_Philippines.png")';
                bgDetails()
                answer = 'PHILIPPINES';
                level = '7';
                gameDetails()
                break;
            case '7' :
                levelstats.innerHTML = 'Level 8'
                image.style.background = 'url("../../assets/src/Flag_of_Vietnam.png")';
                bgDetails()
                answer = 'VIETNAM';
                level = '8';
                gameDetails()
                break;
            case '8' :
                levelstats.innerHTML = 'Level 9'
                image.style.background = 'url("../../assets/src/Flag_of_Iran.png")';
                bgDetails()
                answer = 'IRAN';
                level = '9';
                gameDetails()
                break;
            case '9' :
                levelstats.innerHTML = 'Level 10'
                image.style.background = 'url("../../assets/src/Flag_of_Turkey.png")';
                bgDetails()
                answer = 'TURKEY';
                level = '10';
                gameDetails()
                break;
            case '10' :
                levelstats.innerHTML = 'Level 11'
                image.style.background = 'url("../../assets/src/Flag_of_Thailand.png")';
                bgDetails()
                answer = 'THAILAND';
                level = '11';
                gameDetails()
                break;
            case '11' :
                levelstats.innerHTML = 'Level 12'
                image.style.background = 'url("../../assets/src/Flag_of_Myanmar.png")';
                bgDetails()
                answer = 'MYANMAR';
                level = '12';
                gameDetails()
                break;
            case '12' :
                levelstats.innerHTML = 'Level 13'
                image.style.background = 'url("../../assets/src/Flag_of_SouthKorea.png")';
                bgDetails()
                answer = 'SOUTHKOREA';
                level = '13';
                gameDetails()
                break;
            case '13' :
                levelstats.innerHTML = 'Level 14'
                image.style.background = 'url("../../assets/src/Flag_of_Iraq.png")';
                bgDetails()
                answer = 'IRAQ';
                level = '14';
                gameDetails()
                break;
            case '14' :
                levelstats.innerHTML = 'Level 15'
                image.style.background = 'url("../../assets/src/Flag_of_Afghanistan.png")';
                bgDetails()
                answer = 'AFGHANISTAN';
                level = '15';
                gameDetails()
                break;
            case '15' :
                levelstats.innerHTML = 'Level 16'
                image.style.background = 'url("../../assets/src/Flag_of_Yemen.png")';
                bgDetails()
                answer = 'YEMEN';
                level = '16';
                gameDetails()
                break;
            case '16' :
                levelstats.innerHTML = 'Level 17'
                image.style.background = 'url("../../assets/src/Flag_of_Uzbekistan.png")';
                bgDetails()
                answer = 'UZBEKISTAN';
                level = '17';
                gameDetails()
                break;
            case '17' :
                levelstats.innerHTML = 'Level 18'
                image.style.background = 'url("../../assets/src/Flag_of_Malaysia.png")';
                bgDetails()
                answer = 'MALAYSIA';
                level = '18';
                gameDetails()
                break;
            case '18' :
                levelstats.innerHTML = 'Level 19'
                image.style.background = 'url("../../assets/src/Flag_of_SaudiArabia.png")';
                bgDetails()
                answer = 'SAUDIARABIA';
                level = '19';
                gameDetails()
                break;
            case '19' :
                levelstats.innerHTML = 'Level 20'
                image.style.background = 'url("../../assets/src/Flag_of_Nepal.png")';
                bgDetails()
                answer = 'NEPAL';
                level = '20';
                gameDetails()
                break;
            case '20' :
                levelstats.innerHTML = 'Level 21'
                image.style.background = 'url("../../assets/src/Flag_of_NorthKorea.png")';
                bgDetails()
                answer = 'NORTHKOREA';
                level = '21';
                gameDetails()
                break;
            case '21' :
                levelstats.innerHTML = 'Level 22'
                image.style.background = 'url("../../assets/src/Flag_of_Syria.png")';
                bgDetails()
                answer = 'SYRIA';
                level = '22';
                gameDetails()
                break;
            case '22' :
                levelstats.innerHTML = 'Level 23'
                image.style.background = 'url("../../assets/src/Flag_of_SriLanka.png")';
                bgDetails()
                answer = 'SRILANKA';
                level = '23';
                gameDetails()
                break;
            case '23' :
                levelstats.innerHTML = 'Level 24'
                image.style.background = 'url("../../assets/src/Flag_of_Kazakhstan.png")';
                bgDetails()
                answer = 'KAZAKHSTAN';
                level = '24';
                gameDetails()
                break;
            case '24' :
                levelstats.innerHTML = 'Level 25'
                image.style.background = 'url("../../assets/src/Flag_of_.png")';
                bgDetails()
                answer = 'CAMBODIA';
                level = '25';
                gameDetails()
                break;
            case '25' :
                levelstats.innerHTML = 'Level 26'
                image.style.background = 'url("../../assets/src/Flag_of_Jordan.png")';
                bgDetails()
                answer = 'JORDAN';
                level = '26';
                gameDetails()
                break;
            case '26' :
                levelstats.innerHTML = 'Level 27'
                image.style.background = 'url("../../assets/src/Flag_of_UnitedArabEmirates.png")';
                bgDetails()
                answer = 'UNITEDARABEMIRATES';
                level = '27';
                gameDetails()
                break;
            case '27' :
                levelstats.innerHTML = 'Level 28'
                image.style.background = 'url("../../assets/src/Flag_of_Tajikistan.png")';
                bgDetails()
                answer = 'TAJIKISTAN';
                level = '28';
                gameDetails()
                break;
            case '28' :
                levelstats.innerHTML = 'Level 29'
                image.style.background = 'url("../../assets/src/Flag_of_Azerbaijan.png")';
                bgDetails()
                answer = 'AZERBAIJAN';
                level = '29';
                gameDetails()
                break;
            case '29' :
                levelstats.innerHTML = 'Level 30'
                image.style.background = 'url("../../assets/src/Flag_of_Laos.png")';
                bgDetails()
                answer = 'LAOS';
                level = '30';
                gameDetails()
                break;
            case '30' :
                levelstats.innerHTML = 'Level 31'
                image.style.background = 'url("../../assets/src/Flag_of_Turkmenistan.png")';
                bgDetails()
                answer = 'TURKMENISTAN';
                level = '31';
                gameDetails()
                break;
            case '31' :
                levelstats.innerHTML = 'Level 32'
                image.style.background = 'url("../../assets/src/Flag_of_Kyrgyzstan.png")';
                bgDetails()
                answer = 'KYRGYZSTAN';
                level = '32';
                gameDetails()
                break;
            case '32' :
                levelstats.innerHTML = 'Level 33'
                image.style.background = 'url("../../assets/src/Flag_of_Singapore.png")';
                bgDetails()
                answer = 'SINGAPORE';
                level = '33';
                gameDetails()
                break;
            case '33' :
                levelstats.innerHTML = 'Level 34'
                image.style.background = 'url("../../assets/src/Flag_of_Lebanon.png")';
                bgDetails()
                answer = 'LEBANON';
                level = '34';
                gameDetails()
                break;
            case '34' :
                levelstats.innerHTML = 'Level 35'
                image.style.background = 'url("../../assets/src/Flag_of_Palestine.png")';
                bgDetails()
                answer = 'PALESTINE';
                level = '35';
                gameDetails()
                break;
            case '35' :
                levelstats.innerHTML = 'Level 36'
                image.style.background = 'url("../../assets/src/Flag_of_Oman.png")';
                bgDetails()
                answer = 'OMAN';
                level = '36';
                gameDetails()
                break;
            case '36' :
                levelstats.innerHTML = 'Level 37'
                image.style.background = 'url("../../assets/src/Flag_of_Kuwait.png")';
                bgDetails()
                answer = 'KUWAIT';
                level = '37';
                gameDetails()
                break;
            case '37' :
                levelstats.innerHTML = 'Level 38'
                image.style.background = 'url("../../assets/src/Flag_of_Georgia.png")';
                bgDetails()
                answer = 'GEORGIA';
                level = '38';
                gameDetails()
                break;
            case '38' :
                levelstats.innerHTML = 'Level 39'
                image.style.background = 'url("../../assets/src/Flag_of_Mongolia.png")';
                bgDetails()
                answer = 'MONGOLIA';
                level = '39';
                gameDetails()
                break;
            case '39' :
                levelstats.innerHTML = 'Level 40'
                image.style.background = 'url("../../assets/src/Flag_of_Qatar.png")';
                bgDetails()
                answer = 'QATAR';
                level = '40';
                gameDetails()
                break;
            case '40' :
                levelstats.innerHTML = 'Level 41'
                image.style.background = 'url("../../assets/src/Flag_of_Armenia.png")';
                bgDetails()
                answer = 'ARMENIA';
                level = '41';
                gameDetails()
                break;
            case '41' :
                levelstats.innerHTML = 'Level 42'
                image.style.background = 'url("../../assets/src/Flag_of_Bahrain.png")';
                bgDetails()
                answer = 'BAHRAIN';
                level = '42';
                gameDetails()
                break;
            case '42' :
                levelstats.innerHTML = 'Level 43'
                image.style.background = 'url("../../assets/src/Flag_of_Timor.png")';
                bgDetails()
                answer = 'TIMORLESTE';
                level = '43';
                gameDetails()
                break;
            case '43' :
                levelstats.innerHTML = 'Level 44'
                image.style.background = 'url("../../assets/src/Flag_of_Cyprus.png")';
                bgDetails()
                answer = 'CYPRUS';
                level = '44';
                gameDetails()
                break;
            case '44' :
                levelstats.innerHTML = 'Level 45'
                image.style.background = 'url("../../assets/src/Flag_of_Bhutan.png")';
                bgDetails()
                answer = 'BHUTAN';
                level = '45';
                gameDetails()
                break;
            case '45' :
                levelstats.innerHTML = 'Level 46'
                image.style.background = 'url("../../assets/src/Flag_of_Maldives.png")';
                bgDetails()
                answer = 'MALDIVES';
                level = '46';
                gameDetails()
                break;
            case '46' :
                levelstats.innerHTML = 'Level 47'
                image.style.background = 'url("../../assets/src/Flag_of_Brunei.png")';
                bgDetails()
                answer = 'BRUNEI';
                level = '47';
                gameDetails()
                break;
            case '47' :
                levelstats.innerHTML = 'Level 48'
                image.style.background = 'url("../../assets/src/Flag_of_Taiwan.png")';
                bgDetails()
                answer = 'TAIWAN';
                level = '48';
                gameDetails()
                break;
            case '48' :
                levelstats.innerHTML = 'Level 49'
                image.style.background = 'url("../../assets/src/Flag_of_HongKong.png")';
                bgDetails()
                answer = 'HONGKONG';
                level = '49';
                gameDetails()
                break;
            case '49' :
                levelstats.innerHTML = 'Level 50'
                image.style.background = 'url("../../assets/src/Flag_of_Macau.png")';
                bgDetails()
                answer = 'MACAU';
                level = '50';
                gameDetails()
                break;
            case '50' :
                window.open('../../components/pages/final.html','_self');
                break;
        }

        // if (level == '2') {alert('hi')}
    }

    // checks answer
    setInterval(()=>{
            if (answerscreen.value == answer) {
                game.style.display = 'none'
                scorelog.style.display = 'flex';
                answerscreen.value = '';
                audioone.play();
            }
        },500);

    return {
        nextlevel : nextlevel
    };
};

Logic();
let logic = Logic();

// Game logic ----------------------- Ends

// retry
function retry () {
    document.getElementById('game').style.display = 'flex';
    document.getElementById('score_log').style.display = 'none';
}

// how to 
function howto(stats) {
    if (stats == 'display') {
        document.getElementById('how_to').style.display = 'flex';
    } else if (stats == 'hide') {
        document.getElementById('how_to').style.display = 'none';
    }
}

// keyboard
function keyboard(letter) {
    let display = document.getElementById('answer');
    if (display.value.length <= 15) {
        switch (letter) {
        case 'q' :
            display.value += 'Q';
            break;
        case 'w' :
            display.value += 'W';
            break;
        case 'e' :
            display.value += 'E';
            break;
        case 'r' :
            display.value += 'R';
            break;
        case 't' :
            display.value += 'T';
            break;
        case 'y' :
            display.value += 'Y';
            break;
        case 'u' :
            display.value += 'U';
            break;
        case 'i' :
            display.value += 'I';
            break;
        case 'o' :
            display.value += 'O';
            break;
        case 'p' :
            display.value += 'P';
            break;
        case 'a' :
            display.value += 'A';
            break;
        case 's' :
            display.value += 'S';
            break;
        case 'd' :
            display.value += 'D';
            break;
        case 'f' :
            display.value += 'F';
            break;
        case 'g' :
            display.value += 'G';
            break;
        case 'h' :
            display.value += 'H';
            break;
        case 'j' :
            display.value += 'J';
            break;
        case 'k' :
            display.value += 'K';
            break;
        case 'l' :
            display.value += 'L';
            break;
        case 'z' :
            display.value += 'Z';
            break;
        case 'x' :
            display.value += 'X';
            break;
        case 'c' :
            display.value += 'C';
            break;
        case 'v' :
            display.value += 'V';
            break;
        case 'b' :
            display.value += 'B';
            break;
        case 'n' :
            display.value += 'N';
            break;
        case 'm' :
            display.value += 'M';
            break;
        case 'clear' :
            display.value = display.value.slice(0, -1);
            break;
    }
    }
} 
