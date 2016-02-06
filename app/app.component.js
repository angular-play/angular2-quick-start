(function(app){
    app.AppCompoent =
        ng.core.Component({
            selector: "my-app",
            template: "<h1>My First Angualr 2 App</h1>"
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));