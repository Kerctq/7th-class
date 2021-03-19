//npm install --global browserify
//npm init --force
//npm install jquery

//Команда компиляции:
//browserify main.js --outfile bundle.js

//Автосборка:
//npm install --global watchify
//watchify main.js --outfile bundle.js --verbose

var Vue = require("vue")
var App = require("./app.vue")

var vm = new Vue({
    el:"#root",
    render: function(createElement) {
        return createElement(App);
    }
})