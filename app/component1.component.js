System.register(['@angular/core', './services/logging.service', './services/calculator.service', './services/data.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component1Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n    <div>\n        <h1>Logging service</h1>\n        <input type=\"text\" #message>\n        <button (click)=\"onLog(message.value)\">Send</button>\n    </div>\n    <div>\n        <h1>Calculator Service</h1>\n        <p>Add or multiply these two numbers:</p>\n        <input type=\"text\" #num1>\n        <input type=\"text\" #num2>\n        <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply </button>\n        <button (click)=\"onAdd(num1.value, num2.value)\">Add </button>\n        <p>Result: {{result}}</p>\n    </div>\n    <div>\n        <h1>Data Service</h1>\n        <button (click)=\"onGetData()\">Get some data</button>\n        <p>Data: {{data}}</p>    \n        <input type=\"text\" #newData>\n        <button (click)=\"onInsert(newData.value)\">Insert new data</button>\n    </div>\n",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQUtJLDZCQUFxQixlQUErQixFQUFVLGtCQUFxQyxFQUMzRixZQUF5QjtvQkFEWixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDM0YsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUksQ0FBQztnQkFFdEMsbUNBQUssR0FBTCxVQUFPLE9BQWU7b0JBRWxCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBWSxJQUFZLEVBQUUsSUFBWTtvQkFFbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxDQUFDO2dCQUVELG1DQUFLLEdBQUwsVUFBTyxJQUFZLEVBQUUsSUFBWTtvQkFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDO2dCQUNuRSxDQUFDO2dCQUVELHVDQUFTLEdBQVQ7b0JBRUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFhO29CQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztnQkFDdEMsQ0FBQztnQkEzREw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDR5QkFzQmI7d0JBQ0csU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxzQ0FBaUIsRUFBRSwwQkFBVyxDQUFDO3FCQUM5RCxDQUFDOzt1Q0FBQTtnQkFrQ0YsMEJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELHFEQWdDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCgge1xyXG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+TG9nZ2luZyBzZXJ2aWNlPC9oMT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oMT5cclxuICAgICAgICA8cD5BZGQgb3IgbXVsdGlwbHkgdGhlc2UgdHdvIG51bWJlcnM6PC9wPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0xPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseSA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkRhdGEgU2VydmljZTwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXREYXRhKClcIj5HZXQgc29tZSBkYXRhPC9idXR0b24+XHJcbiAgICAgICAgPHA+RGF0YToge3tkYXRhfX08L3A+ICAgIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuZXdEYXRhPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSW5zZXJ0KG5ld0RhdGEudmFsdWUpXCI+SW5zZXJ0IG5ldyBkYXRhPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuYCxcclxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLCBDYWxjdWxhdG9yU2VydmljZSwgRGF0YVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudFxyXG57XHJcbiAgICByZXN1bHQ6IHN0cmluZztcclxuICAgIGRhdGE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG9uTG9nKCBtZXNzYWdlOiBzdHJpbmcgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyggbWVzc2FnZSApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTXVsdGlwbHkoIG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnICsgdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UubXVsdGlwbHkoK251bTEsK251bTIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkKCBudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyArIHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCggK251bTEsICtudW0yICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HZXREYXRhKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCh2YWx1ZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydCggdmFsdWUgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
