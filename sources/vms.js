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
