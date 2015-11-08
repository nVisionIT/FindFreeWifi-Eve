var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var PeopleComponent = (function () {
    function PeopleComponent(http) {
        // this.result = {friends:[]};
        var _this = this;
        http.get('http://www.findfreewifi.co.za/publicjson/getcities')
            .map(function (res) { return res.json(); })
            .subscribe(function (cities) { return _this.result = (cities.data); });
    }
    PeopleComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'City.html',
            directives: [angular2_1.NgFor, angular2_1.NgSelectOption]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleComponent);
    return PeopleComponent;
})();
angular2_1.bootstrap(PeopleComponent);
//# sourceMappingURL=app.js.map