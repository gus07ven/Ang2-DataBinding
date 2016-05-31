System.register(['@angular/core', './test.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Max";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes'? 'red':''\"> {{name}} </span> and this is my very first Angular 2 component!\n        <span [class.is-awesome]=\"inputElement.value === 'yes'\">\n        It's so awesome!</span>\n        <br>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br><br>\n        <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was \n        entered</button>\n        <test></test>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsd2dCQVlUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgSGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJz8gJ3JlZCc6JydcIj4ge3tuYW1lfX0gPC9zcGFuPiBhbmQgdGhpcyBpcyBteSB2ZXJ5IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQhXHJcbiAgICAgICAgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPlxyXG4gICAgICAgIEl0J3Mgc28gYXdlc29tZSE8L3NwYW4+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICBJcyBpdCBhd2Vzb21lP1xyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIj5Pbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIFxyXG4gICAgICAgIGVudGVyZWQ8L2J1dHRvbj5cclxuICAgICAgICA8dGVzdD48L3Rlc3Q+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIk1heFwiO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
