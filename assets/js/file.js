// Game logic ----------------------- Starts
let answer = 'INDIA';
let level = '1';

function Logic () {
    let game = document.getElementById('game');
    let scorelog = document.getElementById('score_log');
    let levelstats = document.getElementById('levelstats');
    let image = document.getElementById('image');
    let answerscreen = document.getElementById('answer');
    audioone = document.getElementById('audio_one');

    // next level
    function nextlevel () {
        switch (level) {
            case '1' :
                levelstats.innerHTML = 'Level 2'
                image.style.background = 'url("../../assets/src/Flag_of_China.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'CHINA';
                level = '2';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '2' :
                levelstats.innerHTML = 'Level 3'
                image.style.background = 'url("../../assets/src/Flag_of_Indonesia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'INDONESIA';
                level = '3';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '3' :
                levelstats.innerHTML = 'Level 4'
                image.style.background = 'url("../../assets/src/Flag_of_Pakistan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'PAKISTAN';
                level = '4';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '4' :
                levelstats.innerHTML = 'Level 5'
                image.style.background = 'url("../../assets/src/Flag_of_Bangladesh.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'BANGLADESH';
                level = '5';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '5' :
                levelstats.innerHTML = 'Level 6'
                image.style.background = 'url("../../assets/src/Flag_of_Japan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'JAPAN';
                level = '6';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '6' :
                levelstats.innerHTML = 'Level 7'
                image.style.background = 'url("../../assets/src/Flag_of_Philippines.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'PHILIPPINES';
                level = '7';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '7' :
                levelstats.innerHTML = 'Level 8'
                image.style.background = 'url("../../assets/src/Flag_of_Vietnam.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'VIETNAM';
                level = '8';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '8' :
                levelstats.innerHTML = 'Level 9'
                image.style.background = 'url("../../assets/src/Flag_of_Iran.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'IRAN';
                level = '9';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '9' :
                levelstats.innerHTML = 'Level 10'
                image.style.background = 'url("../../assets/src/Flag_of_Turkey.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'TURKEY';
                level = '10';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '10' :
                levelstats.innerHTML = 'Level 11'
                image.style.background = 'url("../../assets/src/Flag_of_Thailand.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'THAILAND';
                level = '11';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '11' :
                levelstats.innerHTML = 'Level 12'
                image.style.background = 'url("../../assets/src/Flag_of_Myanmar.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'MYANMAR';
                level = '12';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '12' :
                levelstats.innerHTML = 'Level 13'
                image.style.background = 'url("../../assets/src/Flag_of_SouthKorea.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'SOUTHKOREA';
                level = '13';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '13' :
                levelstats.innerHTML = 'Level 14'
                image.style.background = 'url("../../assets/src/Flag_of_Iraq.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'IRAQ';
                level = '14';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '14' :
                levelstats.innerHTML = 'Level 15'
                image.style.background = 'url("../../assets/src/Flag_of_Afghanistan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'AFGHANISTAN';
                level = '15';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '15' :
                levelstats.innerHTML = 'Level 16'
                image.style.background = 'url("../../assets/src/Flag_of_Yemen.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'YEMEN';
                level = '16';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '16' :
                levelstats.innerHTML = 'Level 17'
                image.style.background = 'url("../../assets/src/Flag_of_Uzbekistan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'UZBEKISTAN';
                level = '17';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '17' :
                levelstats.innerHTML = 'Level 18'
                image.style.background = 'url("../../assets/src/Flag_of_Malaysia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'MALAYSIA';
                level = '18';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '18' :
                levelstats.innerHTML = 'Level 19'
                image.style.background = 'url("../../assets/src/Flag_of_SaudiArabia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'SAUDIARABIA';
                level = '19';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '19' :
                levelstats.innerHTML = 'Level 20'
                image.style.background = 'url("../../assets/src/Flag_of_Nepal.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'NEPAL';
                level = '20';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '20' :
                levelstats.innerHTML = 'Level 21'
                image.style.background = 'url("../../assets/src/Flag_of_NorthKorea.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'NORTHKOREA';
                level = '21';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '21' :
                levelstats.innerHTML = 'Level 22'
                image.style.background = 'url("../../assets/src/Flag_of_Syria.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'SYRIA';
                level = '22';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '22' :
                levelstats.innerHTML = 'Level 23'
                image.style.background = 'url("../../assets/src/Flag_of_SriLanka.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'SRILANKA';
                level = '23';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '23' :
                levelstats.innerHTML = 'Level 24'
                image.style.background = 'url("../../assets/src/Flag_of_Kazakhstan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'KAZAKHSTAN';
                level = '24';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '24' :
                levelstats.innerHTML = 'Level 25'
                image.style.background = 'url("../../assets/src/Flag_of_.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'CAMBODIA';
                level = '25';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '25' :
                levelstats.innerHTML = 'Level 26'
                image.style.background = 'url("../../assets/src/Flag_of_Jordan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'JORDAN';
                level = '26';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '26' :
                levelstats.innerHTML = 'Level 27'
                image.style.background = 'url("../../assets/src/Flag_of_UnitedArabEmirates.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'UNITEDARABEMIRATES';
                level = '27';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '27' :
                levelstats.innerHTML = 'Level 28'
                image.style.background = 'url("../../assets/src/Flag_of_Tajikistan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'TAJIKISTAN';
                level = '28';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '28' :
                levelstats.innerHTML = 'Level 29'
                image.style.background = 'url("../../assets/src/Flag_of_Azerbaijan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'AZERBAIJAN';
                level = '29';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '29' :
                levelstats.innerHTML = 'Level 30'
                image.style.background = 'url("../../assets/src/Flag_of_Laos.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'LAOS';
                level = '30';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '30' :
                levelstats.innerHTML = 'Level 31'
                image.style.background = 'url("../../assets/src/Flag_of_Turkmenistan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'TURKMENISTAN';
                level = '31';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '31' :
                levelstats.innerHTML = 'Level 32'
                image.style.background = 'url("../../assets/src/Flag_of_Kyrgyzstan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'KYRGYZSTAN';
                level = '32';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '32' :
                levelstats.innerHTML = 'Level 33'
                image.style.background = 'url("../../assets/src/Flag_of_Singapore.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'SINGAPORE';
                level = '33';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '33' :
                levelstats.innerHTML = 'Level 34'
                image.style.background = 'url("../../assets/src/Flag_of_Lebanon.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'LEBANON';
                level = '34';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '34' :
                levelstats.innerHTML = 'Level 35'
                image.style.background = 'url("../../assets/src/Flag_of_Palestine.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'PALESTINE';
                level = '35';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '35' :
                levelstats.innerHTML = 'Level 36'
                image.style.background = 'url("../../assets/src/Flag_of_Oman.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'OMAN';
                level = '36';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '36' :
                levelstats.innerHTML = 'Level 37'
                image.style.background = 'url("../../assets/src/Flag_of_Kuwait.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'KUWAIT';
                level = '37';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '37' :
                levelstats.innerHTML = 'Level 38'
                image.style.background = 'url("../../assets/src/Flag_of_Georgia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'GEORGIA';
                level = '38';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '38' :
                levelstats.innerHTML = 'Level 39'
                image.style.background = 'url("../../assets/src/Flag_of_Mongolia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'MONGOLIA';
                level = '39';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '39' :
                levelstats.innerHTML = 'Level 40'
                image.style.background = 'url("../../assets/src/Flag_of_Qatar.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'QATAR';
                level = '40';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '40' :
                levelstats.innerHTML = 'Level 41'
                image.style.background = 'url("../../assets/src/Flag_of_Armenia.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'ARMENIA';
                level = '41';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '41' :
                levelstats.innerHTML = 'Level 42'
                image.style.background = 'url("../../assets/src/Flag_of_Bahrain.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'BAHRAIN';
                level = '42';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '42' :
                levelstats.innerHTML = 'Level 43'
                image.style.background = 'url("../../assets/src/Flag_of_Timor.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'TIMORLESTE';
                level = '43';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '43' :
                levelstats.innerHTML = 'Level 44'
                image.style.background = 'url("../../assets/src/Flag_of_Cyprus.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'CYPRUS';
                level = '44';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '44' :
                levelstats.innerHTML = 'Level 45'
                image.style.background = 'url("../../assets/src/Flag_of_Bhutan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'BHUTAN';
                level = '45';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '45' :
                levelstats.innerHTML = 'Level 46'
                image.style.background = 'url("../../assets/src/Flag_of_Maldives.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'MALDIVES';
                level = '46';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '46' :
                levelstats.innerHTML = 'Level 47'
                image.style.background = 'url("../../assets/src/Flag_of_Brunei.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'BRUNEI';
                level = '47';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '47' :
                levelstats.innerHTML = 'Level 48'
                image.style.background = 'url("../../assets/src/Flag_of_Taiwan.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'TAIWAN';
                level = '48';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '48' :
                levelstats.innerHTML = 'Level 49'
                image.style.background = 'url("../../assets/src/Flag_of_HongKong.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'HONGKONG';
                level = '49';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
                break;
            case '49' :
                levelstats.innerHTML = 'Level 50'
                image.style.background = 'url("../../assets/src/Flag_of_Macau.png")';
                image.style.backgroundSize = 'contain';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundPositionX = 'center';
                answer = 'MACAU';
                level = '50';
                game.style.display = 'flex';
                scorelog.style.display = 'none';
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