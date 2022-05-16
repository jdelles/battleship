const player = () => {

    const playerBoard; 
    const enemyBoard; 
    const boardSize; 

    const initialize = (playerBoard, enemyBoard) => {
        playerBoard = playerBoard; 
        enemyBoard = enemyBoard; 
        boardSize = playerBoard.getBoardSize(); 
    }

    const attack = (row, col) => {
        return enemyBoard.receiveAttack(row, col); 
    }

    const aiAttack = () => {
        let isTargetAvailable = false; 
        let row, col; 
        while (!isTargetAvailable) {
            row = Math.floor(Math.random() * boardSize); 
            col = Math.floor(Math.random() * boardSize); 
            isTargetAvailable = aiCheckAttack(row, col); 
        }
        return attack(row, col); 
    }

    const hasPlayerLost = () => {
        return playerBoard.checkAllShipsSunk(); 
    }

    return { initialize, attack, aiAttack, hasPlayerLost }
}

module.exports = player; 