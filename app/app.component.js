System.register(['@angular/core', './bindings/input.component', './bindings/confirm.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = myself;
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = myself;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n            <my-input (submitted)=\"onSubmit($event)\"></my-input>\n        </div>\n        <div class=\"container\">\n            <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBRUksV0FBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQy9CLG9CQUFlLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFVNUMsQ0FBQztnQkFSRywrQkFBUSxHQUFSLFVBQVUsTUFBcUM7b0JBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVyxNQUFxQztvQkFFNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7Z0JBQ2xDLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwrUUFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFlRixtQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsdUNBYUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCgge1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaW5wdXQgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgkZXZlbnQpXCI+PC9teS1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1jb25maXJtIChjb25maXJtZWQpPVwib25Db25maXJtKCRldmVudClcIiBbbXlzZWxmXT1cIm15c2VsZlwiPjwvbXktY29uZmlybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnQsIENvbmZpcm1Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50XHJcbntcbiAgICBteXNlbGYgPSB7IG5hbWU6ICcnLCBhZ2U6ICcnIH07XG4gICAgY29uZmlybWVkTXlzZWxmID0geyBuYW1lOiAnJywgYWdlOiAnJyB9O1xuXG4gICAgb25TdWJtaXQoIG15c2VsZjogeyBuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nIH0pIHtcbiAgICAgICAgdGhpcy5teXNlbGYgPSBteXNlbGY7XG4gICAgfVxuXG4gICAgb25Db25maXJtKCBteXNlbGY6IHsgbmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZyB9KVxyXG4gICAge1xuICAgICAgICB0aGlzLmNvbmZpcm1lZE15c2VsZiA9IG15c2VsZjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
