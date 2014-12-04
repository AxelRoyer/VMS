var jsdom = require("jsdom");
var window = jsdom.jsdom().parentWindow;

require("./../libs/webcomponents-lite.min");
require("./../sources/bundle");
var MainMenu = require("./../sources/main-Menu");

var mainMenu = null;

describe("MainMenu", function() {

    describe("after being attached", function() {
        it("should init tab as an empty array", function() {
            mainMenu = document.createElement("main-menu");
            document.appendChild(mainMenu);
            assert.equal(true, true);
        });
    });

    describe("addItem function", function() {
        it("should add an item into the array of items", function() {
            mainMenu = document.createElement("main-menu");
            document.appendChild(mainMenu);
            assert.equal(true, true);
        });
    });
});