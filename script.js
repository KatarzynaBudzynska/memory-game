
function checkBoardParity(colsAmount, rowsAmount) {
    return true;
    // @todo @aniax
}

function getRandomListOfPairsId(colsAmount, rowsAmount) {
    return [1,4,3,4,2,3,2,1];
    // @todo
}

function generateBoxHtml(pictureId) {
    return '<div class="game-tile" data-card-type="'+pictureId+'"></div>';
}

function renderBoard(colsAmount, rowsAmount) {
    if (!checkBoardParity(colsAmount, rowsAmount)) {
        alert("WTF?");
        return false;
    }

    let listOfIds = getRandomListOfPairsId(colsAmount, rowsAmount);


    let numberOfBoxes = colsAmount * rowsAmount;
    for (boxNr = 1; boxNr <= numberOfBoxes; boxNr++) {
        $('.game-board').append(generateBoxHtml(1));
    }

}

$(() => {
    renderBoard(4, 4);
    // @todo Make sure that size of the box is proper for cols and rows
});





// const memoryGame = {
//     tileCount : 20,
//     tileOnRow : 5,
//     divBoard : null,
//     divScore : null,
//     tiles : [],
//     tilesChecked : [],
//     moveCount : 0,
//     tilesImg :
//     [
//         'title_1.png',
//         'title_2.png',
//         'title_3.png',
//         'title_4.png',
//         'title_5.png',
//         'title_6.png',
//         'title_7.png',
//         'title_8.png',
//         'title_9.png',
//         'title_10.png'
//     ],
//     canGet : true,
//     tilePairs : 0,
//
//     tileClick : function(e) {
//         if (this.canGet) {
//             if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
//                 this.tilesChecked.push(e.target);
//                 e.target.style.backgroundImage = 'url(' + this.tilesImg[e.target.dataset.cardType] + ')';
//             }
//
//         if (this.tilesChecked.length === 2) {
//             this.canGet = false;
//
//             if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
//                 setTimeout(this.deleteTiles.bind(this), 500);
//             } else {
//                 setTimeout(this.resetTiles.bind(this), 500);
//             }
//
//             this.moveCount++;
//             this.divScore.innerHTML = this.moveCount;
//         }
//         }
//     },
//
// deleteTiles : function() {
//     this.tilesChecked[0].remove();
//     this.tilesChecked[1].remove();
//
//     this.canGet = true;
//     this.tilesChecked = [];
//
//     this.tilePairs++;
//     if (this.tilePairs >= this.tileCount / 2) {
//         alert('gameOver!');
//     }
// },
//
// resetTiles : function() {
//     this.tilesChecked[0].style.backgroundImage = 'url(img/title.png)';
//     this.tilesChecked[1].style.backgroundImage = 'url(img/title.png)';
//
//     this.tilesChecked = [];
//     this.canGet = true;
// },
//
// startGame : function() {
//
//     this.divBoard = document.querySelector('.game-board');
//     this.divBoard.innerHTML = '';
//
//     this.divScore = document.querySelector('.game-score');
//     this.divScore.innerHTML = '';
//
//     this.tiles = [];
//     this.tilesChecked = [];
//     this.moveCount = 0;
//     this.canGet = true;
//     this.tilePairs = 0;
//
//     for (let i=0; i<this.tileCount; i++) {
//         this.tiles.push(Math.floor(i/2));
//     }
//
//     for (let i=this.tileCount-1; i>0; i--) {
//         const swap = Math.floor(Math.random()*i);
//         const tmp = this.tiles[i];
//         this.tiles[i] = this.tiles[swap];
//         this.tiles[swap] = tmp;
//     }
//
//     for (let i=0; i<this.tileCount; i++) {
//         const tile = document.createElement('div');
//         tile.classList.add("game-tile");
//         this.divBoard.appendChild(tile);
//
//         tile.dataset.cardType = this.tiles[i];
//         tile.dataset.index = i;
//         console.log(5+(tile.offsetWidth+5)*(i%this.tileOnRow));
//
//         tile.style.left = 5+(tile.offsetWidth+10) * (i%this.tileOnRow) + 'px'
//         tile.style.top = 5+(tile.offsetHeight+10) * (Math.floor(i/this.tileOnRow)) + 'px';
//
//         tile.addEventListener('click', this.tileClick.bind(this));
//     }
//  }
// };
//
// document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('.game-start').addEventListener('click',function() {
//         memoryGame.startGame();
//     });
// });