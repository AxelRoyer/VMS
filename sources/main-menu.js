var MainMenuProto = Object.create(HTMLElement.prototype);

MainMenuProto.createdCallback = function() {
    console.log("main menu create callback");
};

MainMenuProto.attachedCallback = function() {
    console.log("main menu attached callback toto");

    var content = document.createElement("div");
    content.textContent = "inside main menu";
    this.appendChild(content);
};

MainMenuProto.addItem = function(label, link, position) {

};

MainMenuProto.addItems = function(items) {

};

MainMenuProto.removeItem = function(label) {

};

MainMenu = document.registerElement('main-menu', {
    prototype: MainMenuProto
});

module.exports = MainMenuProto;