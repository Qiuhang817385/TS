"use strict";
var Components;
(function (Components) {
    var Nav = /** @class */ (function () {
        function Nav() {
            var elem = document.createElement('div');
            elem.innerHTML = 'Nav';
            document.body.appendChild(elem);
        }
        return Nav;
    }());
    Components.Nav = Nav;
})(Components || (Components = {}));
