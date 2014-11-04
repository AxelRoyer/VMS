var MainMenuProto = Object.create(HTMLElement.prototype);

MainMenuProto.createdCallback = function() {
    console.log("main menu create callback");
};

MainMenuProto.attachedCallback = function() {
    console.log("main menu attached callback");
};

MainMenu = document.registerElement('main-menu', {
    prototype: MainMenuProto
});