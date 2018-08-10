'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;

// private members
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}