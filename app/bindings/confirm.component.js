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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n    <h1>You submitted the following details. Is this correct?</h1>\n    <p>Your name is <span class=\"highlight\">{{myself.name}}</span> \n    and you're <span class=\"highlight\">{{myself.age}}</span> years old.\n    Please click on 'Confirm' if you have made any changes to this information.</p>\n    <div>\n         <label for=\"name\">Your Name</label>\n         <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n    </div>\n    <div>\n         <label for=\"age\">Your Age</label>\n         <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n    </div>\n        <br>\n        <div>Filled out: {{isFilled? 'Yes':'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes': 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Confirm</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUVJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUMzQixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQXlCaEUsQ0FBQztnQkF2Qkcsa0NBQU8sR0FBUDtvQkFFSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRyxDQUFDLENBQ3RELENBQUM7d0JBQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUNOLENBQUM7d0JBQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUNoRSxDQUFDO3dCQUNPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUM1QixDQUFDO29CQUFDLElBQUksQ0FDTixDQUFDO3dCQUNHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFFRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBdERMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxxMUJBa0JUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkFnQ0YsdUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELCtDQThCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KCB7XHJcbiAgICBzZWxlY3RvcjogJ215LWNvbmZpcm0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5Zb3Ugc3VibWl0dGVkIHRoZSBmb2xsb3dpbmcgZGV0YWlscy4gSXMgdGhpcyBjb3JyZWN0PzwvaDE+XHJcbiAgICA8cD5Zb3VyIG5hbWUgaXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e215c2VsZi5uYW1lfX08L3NwYW4+IFxyXG4gICAgYW5kIHlvdSdyZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bXlzZWxmLmFnZX19PC9zcGFuPiB5ZWFycyBvbGQuXHJcbiAgICBQbGVhc2UgY2xpY2sgb24gJ0NvbmZpcm0nIGlmIHlvdSBoYXZlIG1hZGUgYW55IGNoYW5nZXMgdG8gdGhpcyBpbmZvcm1hdGlvbi48L3A+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5Zb3VyIEFnZTwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZD8gJ1llcyc6J05vJ319PC9kaXY+XHJcbiAgICAgICAgPGRpdj5WYWxpZDoge3tpc1ZhbGlkID8gJ1llcyc6ICdObyd9fTwvZGl2PlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXHJcbiAgICBvdXRwdXRzOiBbJ2NvbmZpcm1lZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudFxyXG57XHJcbiAgICBteXNlbGYgPSB7bmFtZTonJywgYWdlOicnfTtcclxuICAgIGlzRmlsbGVkID0gZmFsc2U7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcclxuXHJcbiAgICBvbktleXVwKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QoIHRoaXMubXlzZWxmLmFnZSApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybSgpXHJcbiAgICB7XHJcbiAgICAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KHRoaXMubXlzZWxmKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
