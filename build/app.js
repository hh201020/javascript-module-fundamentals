'use strict';

var _player = require('./player.js');

var _game = require('./game.js');

console.log('reverting to ES2015');

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    (0, _player.setName)(document.getElementById('playername').value);
    (0, _game.printGame)();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    (0, _game.calculateScore)();
});

// set the default number of problems
document.getElementById('problemCount').value = (0, _game.getProblemCount)();