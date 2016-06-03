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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                    this._lastMessage = '';
                }
                LoggingService.prototype.log = function (message) {
                    console.log('Current Message:' + message + ', Last Message: ' + this._lastMessage);
                    this._lastMessage = message;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUVZLGlCQUFZLEdBQUcsRUFBRSxDQUFDO2dCQU85QixDQUFDO2dCQUxHLDRCQUFHLEdBQUgsVUFBSyxPQUFlO29CQUVoQixPQUFPLENBQUMsR0FBRyxDQUFFLGtCQUFrQixHQUFHLE9BQU8sR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2dCQUNoQyxDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVdiLHFCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwyQ0FTQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBfbGFzdE1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBsb2coIG1lc3NhZ2U6IHN0cmluZyApXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdDdXJyZW50IE1lc3NhZ2U6JyArIG1lc3NhZ2UgKyAnLCBMYXN0IE1lc3NhZ2U6ICcgKyB0aGlzLl9sYXN0TWVzc2FnZSApO1xyXG4gICAgICAgIHRoaXMuX2xhc3RNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
