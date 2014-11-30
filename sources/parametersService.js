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