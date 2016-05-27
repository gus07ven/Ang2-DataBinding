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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please</h1>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled? 'Yes':'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes': 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFFSSxXQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBZ0MsQ0FBQztnQkEwQmpFLENBQUM7Z0JBeEJHLGdDQUFPLEdBQVA7b0JBRUksRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUcsQ0FBQyxDQUN0RCxDQUFDO3dCQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FDTixDQUFDO3dCQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FDaEUsQ0FBQzt3QkFDTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDNUIsQ0FBQztvQkFBQyxJQUFJLENBQ04sQ0FBQzt3QkFDRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQWxETDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsMm1CQWVUO3dCQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7a0NBQUE7Z0JBaUNGLHFCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCwyQ0ErQkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoIHtcclxuICAgIHNlbGVjdG9yOiAnbXktaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+WW91ciBkZXRhaWxzLCBwbGVhc2U8L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBBZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkPyAnWWVzJzonTm8nfX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJzogJ05vJ319PC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgbXlzZWxmID0geyBuYW1lOiAnJywgYWdlOiAnJyB9O1xyXG4gICAgaXNGaWxsZWQgPSBmYWxzZTtcclxuICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXIgPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcclxuXHJcbiAgICBvbktleXVwKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QoIHRoaXMubXlzZWxmLmFnZSApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KCB0aGlzLm15c2VsZiApO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
