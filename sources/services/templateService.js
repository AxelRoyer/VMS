var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector("#" + id);
    return template;
};

module.exports = templateService;