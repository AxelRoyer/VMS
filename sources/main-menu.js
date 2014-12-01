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