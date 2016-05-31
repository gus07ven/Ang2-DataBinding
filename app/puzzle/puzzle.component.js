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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //It's a good idea to name selector something that future html tags 
            // may not use.Something you are the only one using it.
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            <h2>Game Setup</h2>\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n\n        <section \n        [ngClass]=\"{\n            puzzle: true,\n            solved: switch1.value == switch1Number &&\n                    switch2.value == switch2Number &&\n                    switch3.value == switch3Number &&\n                    switch4.value == switch4Number \n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none':'block'}\">\n            <h2>The Puzzle |\n                {{switch1.value == switch1Number &&\n                    switch2.value == switch2Number &&\n                    switch3.value == switch3Number &&\n                    switch4.value == switch4Number? 'SOLVED':'NOT SOLVED'}}</h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span>. \n               <br>\n               Try to guess the right combination of 1's and 0's below.\n               <br>\n               Sample guess: 0011.\n               Good luck!</p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]= \"switch1.value != switch1Number ||\n                    switch2.value != switch2Number ||\n                    switch3.value != switch3Number ||\n                    switch4.value != switch4Number\">\n                    Congratulations {{name.value}}, you did it!</h2>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0Esb0VBQW9FO1lBQ3BFLHVEQUF1RDtZQWdEdkQ7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBVkcsa0NBQVEsR0FBUjtvQkFFSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFFLENBQUM7b0JBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBRSxDQUFDO29CQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFFLENBQUM7b0JBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUMvQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQztnQkFDakQsQ0FBQztnQkE5REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDh0REEwQ2I7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy9JdCdzIGEgZ29vZCBpZGVhIHRvIG5hbWUgc2VsZWN0b3Igc29tZXRoaW5nIHRoYXQgZnV0dXJlIGh0bWwgdGFncyBcclxuLy8gbWF5IG5vdCB1c2UuU29tZXRoaW5nIHlvdSBhcmUgdGhlIG9ubHkgb25lIHVzaW5nIGl0LlxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktcHV6emxlJywgIFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XHJcbiAgICAgICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cclxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIFxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgcHV6emxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciBcclxuICAgICAgICB9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZSc6J2Jsb2NrJ31cIj5cclxuICAgICAgICAgICAgPGgyPlRoZSBQdXp6bGUgfFxyXG4gICAgICAgICAgICAgICAge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXI/ICdTT0xWRUQnOidOT1QgU09MVkVEJ319PC9oMj5cclxuICAgICAgICAgICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+LiBcclxuICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICBUcnkgdG8gZ3Vlc3MgdGhlIHJpZ2h0IGNvbWJpbmF0aW9uIG9mIDEncyBhbmQgMCdzIGJlbG93LlxyXG4gICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgIFNhbXBsZSBndWVzczogMDAxMS5cclxuICAgICAgICAgICAgICAgR29vZCBsdWNrITwvcD5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICBTd2l0Y2ggMTpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XHJcbiAgICAgICAgICAgIFN3aXRjaCAyOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgICAgICAgICAgU3dpdGNoIDM6XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxyXG4gICAgICAgICAgICBTd2l0Y2ggNDpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoMiBbaGlkZGVuXT0gXCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gyLnZhbHVlICE9IHN3aXRjaDJOdW1iZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cclxuYCAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoIE1hdGgucmFuZG9tKCkgKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSApO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoIE1hdGgucmFuZG9tKCkgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuc3dpdGNoMU51bWJlciwgdGhpcy5zd2l0Y2gyTnVtYmVyLFxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIsIHRoaXMuc3dpdGNoNE51bWJlciApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
