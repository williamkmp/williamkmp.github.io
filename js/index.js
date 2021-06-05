let isAlphabet = false;
let alphabetString = "";

function woosh(){
    document.getElementById('Left').classList.add('wooshLeft');
    document.getElementById('Right').classList.add('wooshRight');
    document.getElementById('welcome').classList.add('delete');
}

function isLetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
   
function insertAslArea(char){
    char = char.toUpperCase();
    let aslArea = document.getElementById('aslArea');
    let newAslKey = document.createElement('div');
    newAslKey.classList.add('aslCard');
    newAslKey.classList.add(char);
    aslArea.appendChild(newAslKey);
}

function clearAslArea(){
    let aslArea = document.getElementById('aslArea');
    while(aslArea.firstChild){
        aslArea.removeChild(aslArea.lastChild);
    }
}

function updateTextArea(){
    let txtArea = document.getElementById('txtArea');
    txtArea.value = alphabetString.toUpperCase();
}

function updateAslArea(){
    clearAslArea();
    for(i=0; i<alphabetString.length; i++){
        if(isLetter(alphabetString[i]))insertAslArea(alphabetString[i]);
        else continue;
    }
}

function textChange(input){
    alphabetString = input.toUpperCase();
    updateTextArea();
    updateAslArea();
}

function delClick(){
    alphabetString = alphabetString.slice(0, -1);
    updateTextArea();
    updateAslArea();
}

document.getElementById('txtArea').addEventListener('input', function (event) {
    let input = event.target.value.toString();
    textChange(input);
});

function swapClick(){
    let letterKeys = document.getElementsByClassName('letterKey');
    let aslKeys = document.getElementsByClassName('aslKey');

    let txtArea = document.getElementById('txtArea');
    let aslArea = document.getElementById('aslArea');

    if(!isAlphabet){
        for (i = 0; i < letterKeys.length; i++) {
            letterKeys[i].style.display = "none";
        }
        for (i = 0; i < aslKeys.length; i++) {
            aslKeys[i].style.display = "flex";
        }

        txtArea.classList.add('swapTextGo');
        aslArea.classList.add('swapAslGo');
        
        if(txtArea.classList.contains('swapTextBack')) txtArea.classList.remove('swapTextBack');
        if(aslArea.classList.contains('swapAslBack')) aslArea.classList.remove('swapAslBack');
        
    }else{
        for (i = 0; i < aslKeys.length; i++) {
            aslKeys[i].style.display = "none";
        }
        for (i = 0; i < letterKeys.length; i++) {
            letterKeys[i].style.display = "flex";
        }
        txtArea.classList.add('swapTextBack');
        aslArea.classList.add('swapAslBack');
        
        if(txtArea.classList.contains('swapTextGo')) txtArea.classList.remove('swapTextGo');
        if(aslArea.classList.contains('swapAslGo')) aslArea.classList.remove('swapAslGo');
    }

    isAlphabet =  !isAlphabet;
}

function press(char){
    alphabetString = alphabetString + char + "";
    updateTextArea();
    updateAslArea();
}

function settingButton(){
    let menuContainer = document.getElementById('menuContainer');
    console.log('setting');

    if(menuContainer.classList.contains('menuExit')){
        menuContainer.classList.remove('menuExit');
        menuContainer.classList.add('menuShow');
        setTimeout
    }else if(menuContainer.classList.contains('menuShow')){
        menuContainer.classList.remove('menuShow');
        menuContainer.classList.add('menuExit');
    }
}

function updateFontLable(){
    let slider = document.getElementById('slider');
    let label = document.getElementById('sizeLabel');
    document.documentElement.style.setProperty('--font-size', slider.value.toString() + 'px');
    label.innerHTML = "Font Size : " + slider.value.toString() + " px";
}