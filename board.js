function checkBoardParity(colsAmount, rowsAmount) {
    let multiplication = colsAmount * rowsAmount;
    if (multiplication % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function getRandomNumberFromRange(min, max) {
    let randomNumber;
    do {
        randomNumber = Math.random() * max+1;
        randomNumber = Math.floor(randomNumber);

    }
    while (!(randomNumber >= min && randomNumber <= max));
    return randomNumber;
}

function getRandomListOfPairsId(colsAmount, rowsAmount) {
    let amountOfAllTiles = colsAmount * rowsAmount;
    let amountOfPairs = amountOfAllTiles / 2;
    let randomListOfPairsId = []; 

    //wykonuj dopoki tablica randomListOfPairsId sie nie zapelni (randomListOfPairsId.length < amountOfAllTiles)
    do {
        // wylosowac losowa liczbe 
        let randomNumber = getRandomNumberFromRange(1, amountOfPairs);

        // zobaczyc ile jest wystapien wylosowanej liczby w tablicy randomListOfPairsId
        let occurencesCount = 0;
        for (let i=0; i < randomListOfPairsId.length; i++){
            let currentlyCheckingNumber = randomListOfPairsId[i];
            if (currentlyCheckingNumber==randomNumber) {
                occurencesCount++;
            }
        }

        //jesli jest mniej niz 2 to dodac randomNumber do tablicy randomListOfPairs, inaczej nie dodawac
        if (occurencesCount < 2) {
            randomListOfPairsId.push(randomNumber);
        }
    }
    while (randomListOfPairsId.length < amountOfAllTiles);
    return randomListOfPairsId; 

}

function generateBoxHtml(pictureId) {
    return '<div class="game-tile" data-card-type="' + pictureId + '"></div>';
}

function unCover(clickedId) {

}

function disappearBoth(clickedId, clickedPictureId) {

    //$('.game-tile'+clickedId).css('opacity', '0');
    //$('.game-tile'+clickedPictureId).css('opacity', '0');
}

function hideBoth(clickedId, whatWasClickedPreviously) {
    // todo
}

function renderBoard(colsAmount, rowsAmount) {
    if (!checkBoardParity(colsAmount, rowsAmount)) {
        alert("The number of tiles should be even!");
        return false;
    }

    let listOfIds = getRandomListOfPairsId(colsAmount, rowsAmount);

console.log(listOfIds);

    let numberOfBoxes = colsAmount * rowsAmount;
    for (boxNr = 0; boxNr < numberOfBoxes; boxNr++) {
        $('.game-board').append(
            generateBoxHtml(listOfIds[boxNr])
        );
    }

    $('.game-tile').click(function (e) {
        // todo Chceck if element clicked is not exact the same tile. If it is, there shouldn't be any action at all


        let clickedPictureId = $(this).attr('data-card-type');
        console.log(clickedPictureId);

        unCover(clickedPictureId);

        if (isCheckRequired()) { // czy to jest 2gie klikniecie
            if (checkIfSuccess(clickedPictureId)) {
                addPoint();
                disappearBoth(clickedPictureId, whatWasClickedPreviously());
                console.log("SUCCESS");
            } else {
                addFail();
                hideBoth(clickedPictureId, whatWasClickedPreviously());
                console.log("FAILE");
            }
            updatePointsAndFails();
        } else {
            remember(clickedPictureId);
        }

    });
}
