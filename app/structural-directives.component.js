System.register(['@angular/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n        <section class=\"directive\">\n            <h2>*ngIf</h2>\n            <div>\n                Enter a number higher than 10\n                <br>\n                <input type=\"text\" #number (keyup)=\"0\">\n            </div>\n            <div *ngIf=\"number.value > 10\">\n                <h5>A heading</h5>\n                 Number is greater than 10\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul>\n                    <li *ngFor=\"let item of list,#i = index\">{{item}} {{i}}</li>\n                </ul>\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n            <div>\n                Enter red, blue or green\n                <br>\n                <input type=\"text\" #color (keyup)=\"0\">\n            </div>\n            <div [ngSwitch]=\"color.value\">\n                <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is Red</span></template>\n                <template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">Color is Blue</span></template>\n                <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is Green</span></template>\n                <template ngSwitchDefault><span>Don't know that color</span></template>\n            </div>\n        </section> \n        <section class=\"directive\">\n            <h2>Custom Directive: *myUnless</h2>\n            <div>\n                Enter true or false\n                <br>\n                <input type=\"text\" #condition (keyup)=\"0\">\n            </div>\n            <div *myUnless=\"condition.value != 'false'\">\n                Only shown if 'false' was entered!\n            </div>              \n        </section>           \n    ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3REE7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQztnQkFFcEMsQ0FBQztnQkF4REQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUscXpEQThDVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUNoQyxDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdURBSUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtVbmxlc3NEaXJlY3RpdmV9IGZyb20gJy4vdW5sZXNzLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KCB7XHJcbiAgICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj4qbmdJZjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+QSBoZWFkaW5nPC9oNT5cclxuICAgICAgICAgICAgICAgICBOdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEwXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxyXG4gICAgICAgICAgICA8aDI+Km5nRm9yPC9oMj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdCwjaSA9IGluZGV4XCI+e3tpdGVtfX0ge3tpfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEVudGVyIHJlZCwgYmx1ZSBvciBncmVlblxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbG9yIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2xvci52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3JlZCdcIj48c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIj5Db2xvciBpcyBSZWQ8L3NwYW4+PC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidibHVlJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj5Db2xvciBpcyBCbHVlPC9zcGFuPjwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInZ3JlZW4nXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIj5Db2xvciBpcyBHcmVlbjwvc3Bhbj48L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIG5nU3dpdGNoRGVmYXVsdD48c3Bhbj5Eb24ndCBrbm93IHRoYXQgY29sb3I8L3NwYW4+PC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPiBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxyXG4gICAgICAgICAgICA8aDI+Q3VzdG9tIERpcmVjdGl2ZTogKm15VW5sZXNzPC9oMj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEVudGVyIHRydWUgb3IgZmFsc2VcclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb25kaXRpb24gKGtleXVwKT1cIjBcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm15VW5sZXNzPVwiY29uZGl0aW9uLnZhbHVlICE9ICdmYWxzZSdcIj5cclxuICAgICAgICAgICAgICAgIE9ubHkgc2hvd24gaWYgJ2ZhbHNlJyB3YXMgZW50ZXJlZCFcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbVW5sZXNzRGlyZWN0aXZlXSAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJhbERpcmVjdGl2ZXNcclxue1xyXG4gICAgbGlzdCA9IFsnQXBwbGUnLCdNaWxrJywnQnJlYWQnXTtcclxuXHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
