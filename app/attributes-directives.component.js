System.register(['@angular/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n        <div [myHighlight]=\"'red'\">\n            Highlight me\n        </div>\n        <br>\n        <br>\n        <div [myHighlight]=\"'blue'\">\n            Another highlight me\n        </div>     \n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxRQUFRLEVBQUMsb05BU1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMsd0NBQWtCLENBQUM7cUJBQ25DLENBQUM7O3VDQUFBO2dCQUlGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZXMtZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWF0dHJpYnV0ZS1kaXJlY3RpdmVzJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IFtteUhpZ2hsaWdodF09XCIncmVkJ1wiPlxyXG4gICAgICAgICAgICBIaWdobGlnaHQgbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXYgW215SGlnaGxpZ2h0XT1cIidibHVlJ1wiPlxyXG4gICAgICAgICAgICBBbm90aGVyIGhpZ2hsaWdodCBtZVxyXG4gICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0hpZ2hsaWdodERpcmVjdGl2ZV0gICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVEaXJlY3RpdmVzIHtcclxuXHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
