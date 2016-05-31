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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef, 'background-color', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFLSSw0QkFBcUIsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUg1RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztnQkFLaEMsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaO29CQUVJLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ2hFLENBQUM7Z0JBRUQseUNBQVksR0FBWjtvQkFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVPLHNDQUFTLEdBQWpCLFVBQW1CLEtBQWE7b0JBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFFLENBQUM7Z0JBQzdFLENBQUM7Z0JBL0JMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQUN0QyxJQUFJLEVBQUU7NEJBQ0YsY0FBYyxFQUFFLGdCQUFnQjs0QkFDaEMsY0FBYyxFQUFFLGdCQUFnQjt5QkFDbkM7cUJBQ0osQ0FBQzs7c0NBQUE7Z0JBMEJGLHlCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCxtREF3QkMsQ0FBQSIsImZpbGUiOiJoaWdobGlnaHQtZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSgge1xyXG4gICAgc2VsZWN0b3I6ICdbbXlIaWdobGlnaHRdJyxcclxuICAgIGlucHV0czogWydoaWdobGlnaHRDb2xvcjpteUhpZ2hsaWdodCddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAgICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZUxlYXZlKCknXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlXHJcbntcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdncmVlbic7XHJcbiAgICBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyIClcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCB0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvciApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWdobGlnaHQoIGNvbG9yOiBzdHJpbmcgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSggdGhpcy5fZWxSZWYsICdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IgKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
