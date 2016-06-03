System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['Summer', 'Winter', 'Warm', 'Cold'];
                }
                DataService.prototype.getRandomString = function () {
                    var rdnNum = Math.floor(Math.random() * this._data.length);
                    return this._data[rdnNum];
                };
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUVZLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQWF6RCxDQUFDO2dCQVhHLHFDQUFlLEdBQWY7b0JBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztvQkFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFRLEtBQWE7b0JBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUM3QixDQUFDO2dCQWZMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWlCYixrQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscUNBZUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgX2RhdGEgPSBbJ1N1bW1lcicsICdXaW50ZXInLCAnV2FybScsICdDb2xkJ107XHJcblxyXG4gICAgZ2V0UmFuZG9tU3RyaW5nKClcclxuICAgIHtcclxuICAgICAgICBsZXQgcmRuTnVtID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIHRoaXMuX2RhdGEubGVuZ3RoICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbcmRuTnVtXTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnQoIHZhbHVlOiBzdHJpbmcgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCggdmFsdWUgKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
