var templateService = {};

templateService.getTemplate = function(id) {
    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector("template[id=" + id + "]");
    return template.content;
};

module.exports = templateService;