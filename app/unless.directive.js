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
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless']
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSx5QkFBcUIsWUFBeUIsRUFBVSxpQkFBbUM7b0JBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBRTNGLENBQUM7Z0JBRUQsc0JBQUkscUNBQVE7eUJBQVosVUFBYyxTQUFrQjt3QkFFNUIsRUFBRSxDQUFDLENBQUUsQ0FBQyxTQUFVLENBQUMsQ0FDakIsQ0FBQzs0QkFDRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO3dCQUNuRSxDQUFDO3dCQUFDLElBQUksQ0FDTixDQUFDOzRCQUNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDbkMsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDdkIsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJ1bmxlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoIHtcclxuICAgIHNlbGVjdG9yOiAnW215VW5sZXNzXScsXHJcbiAgICBpbnB1dHM6IFsnbXlVbmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVubGVzc0RpcmVjdGl2ZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmIClcclxuICAgIHsgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbXlVbmxlc3MoIGNvbmRpdGlvbjogYm9vbGVhbiApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhY29uZGl0aW9uIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KCB0aGlzLl90ZW1wbGF0ZVJlZiApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
