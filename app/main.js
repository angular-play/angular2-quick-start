//app.platform.browser.bootstrap(app.AppCompoent);

(function(app){
    document.addEventListener("DOMContentLoaded", function(){
        ng.platform.browser.bootstrap(app.AppCompoent);
    });
})(window.app || (window.app = {}));