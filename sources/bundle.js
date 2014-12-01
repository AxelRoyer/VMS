(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var parametersService = require("./parametersService");
var mainMenu = require("./main-menu");
require("./services/templateService");

var mainMenuItems = [
    {
        "link": "#/myProfile",
        "label": "My profile",
        "id": "1"
    },
    {
        "link": "#/volunteers",
        "label": "Volunteers",
        "id": "2"
    },
    {
        "link": "#/stock",
        "label": "Stock",
        "id": "3"
    },
    {
        "link": "#/parameters",
        "label": "Parameters",
        "id": "4"
    }
];

var Vms = function() {
    this.parameters = null;
    this.mainMenu = document.querySelector("#main-menu");
    this.mainMenu.addItems(mainMenuItems);

    var self = this;

    parametersService.getParameters()
        .then(function(parameters) {
            self.parameters = parameters;
        })
        .catch(function(error) {
            throw new Error("error during parameters request")
        });
};

document.addEventListener("DOMContentLoaded", function() {
    var vms = new Vms();
}, false);

},{"./main-menu":2,"./parametersService":3,"./services/templateService":4}],2:[function(require,module,exports){
var MainMenuProto = Object.create(HTMLElement.prototype);

MainMenuProto.createdCallback = function() {
    console.log("main menu create callback");
    this.menuItems = [];
};

MainMenuProto.attachedCallback = function() {
    console.log("main menu attached callback");
    this.appendChild(clone);
};

MainMenuProto.addItem = function(options) {
    this.menuItems.push(options);
};

MainMenuProto.addItems = function(items) {
    if (items && items.length) {
        items.forEach(this.addItem.bind(this));
    }
};

MainMenuProto.removeItem = function(label) {
    for (var i = 0, len = this.menuItems.length ; i < len ; i++) {
        if (this.menuItems[i].label === label) {
            this.menuItems.slice(i, 1);
            break;
        }
    }
};

MainMenu = document.registerElement('main-menu', {
    prototype: MainMenuProto
});

module.exports = MainMenuProto;
},{}],3:[function(require,module,exports){
var ParametersService = {};

ParametersService.parameters = null;

ParametersService.getParameters = function() {
    console.log("get parameters");
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("GET", "./data/parameters.json", true);

        request.addEventListener("readystatechange", function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(JSON.parse(this.responseText));
                }
            }
        });

        request.send(null);
    })
};

module.exports = ParametersService;
},{}],4:[function(require,module,exports){
var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector("template[id=" + id + "]");
    return template.content;
};

module.exports = templateService;
},{}]},{},[1]);
