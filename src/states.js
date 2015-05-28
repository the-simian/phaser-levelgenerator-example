

var bootState = require('./states/boot');
var gameState = require('./states/game');
var menuState = require('./states/menu');
var preloaderState = require('./states/preloader');


game.state.add('boot', bootState);
game.state.add('boot', gameState);
game.state.add('boot', menuState);
game.state.add('boot', preloaderState);


