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
    var Component2Component;
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
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component2Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component2Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n    <div>\n        <h1>Logging service</h1>\n        <input type=\"text\" #message>\n        <button (click)=\"onLog(message.value)\">Send</button>\n    </div>\n    <div>\n        <h1>Calculator Service</h1>\n        <p>Add or multiply these two numbers:</p>\n        <input type=\"text\" #num1>\n        <input type=\"text\" #num2>\n        <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply </button>\n        <button (click)=\"onAdd(num1.value, num2.value)\">Add </button>\n        <p>Result: {{result}}</p>\n    </div>\n    <div>\n        <h1>Data Service</h1>\n        <button (click)=\"onGetData()\">Get some data</button>\n        <p>Data: {{data}}</p>    \n        <input type=\"text\" #newData>\n        <button (click)=\"onInsert(newData.value)\">Insert new data</button>\n    </div>\n",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQUtJLDZCQUFxQixlQUErQixFQUFVLGtCQUFxQyxFQUN2RixZQUF5QjtvQkFEaEIsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBQ3ZGLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFLLENBQUM7Z0JBRTNDLG1DQUFLLEdBQUwsVUFBTyxPQUFlO29CQUVsQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVksSUFBWSxFQUFFLElBQVk7b0JBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFDeEUsQ0FBQztnQkFFRCxtQ0FBSyxHQUFMLFVBQU8sSUFBWSxFQUFFLElBQVk7b0JBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCx1Q0FBUyxHQUFUO29CQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSLFVBQVUsS0FBYTtvQkFFbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7Z0JBQ3RDLENBQUM7Z0JBM0RMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw0eUJBc0JiO3dCQUNHLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLEVBQUUsMEJBQVcsQ0FBQztxQkFDOUQsQ0FBQzs7dUNBQUE7Z0JBa0NGLDBCQUFDO1lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtZQWhDRCxxREFnQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoIHtcclxuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkxvZ2dpbmcgc2VydmljZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XHJcbiAgICAgICAgPHA+QWRkIG9yIG11bHRpcGx5IHRoZXNlIHR3byBudW1iZXJzOjwvcD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbk11bHRpcGx5KG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+TXVsdGlwbHkgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgPHA+UmVzdWx0OiB7e3Jlc3VsdH19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5EYXRhIFNlcnZpY2U8L2gxPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IHNvbWUgZGF0YTwvYnV0dG9uPlxyXG4gICAgICAgIDxwPkRhdGE6IHt7ZGF0YX19PC9wPiAgICBcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3RGF0YT5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkluc2VydChuZXdEYXRhLnZhbHVlKVwiPkluc2VydCBuZXcgZGF0YTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbmAsXHJcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSwgQ2FsY3VsYXRvclNlcnZpY2UsIERhdGFTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnRcclxue1xyXG4gICAgcmVzdWx0OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSwgcHJpdmF0ZSBfY2FsY3VsYXRvclNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSApIHsgfVxyXG5cclxuICAgIG9uTG9nKCBtZXNzYWdlOiBzdHJpbmcgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyggbWVzc2FnZSApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTXVsdGlwbHkoIG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnICsgdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UubXVsdGlwbHkoICtudW0xLCArbnVtMiApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkKCBudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyArIHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCggK251bTEsICtudW0yICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HZXREYXRhKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCggdmFsdWU6IHN0cmluZyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0KCB2YWx1ZSApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
