var MainMenuProto = Object.create(HTMLElement.prototype);
var templateService = require("./services/templateService");

MainMenuProto.createdCallback = function() {
    this.menuItems = [];
};

MainMenuProto.attachedCallback = function() {
    this.template = templateService.getTemplate("mainMenu");
    this.appendChild(this.template);

    var vue = new Vue({
        el: this.template,
        data: {
            menuItems: this.menuItems
        }
    })
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