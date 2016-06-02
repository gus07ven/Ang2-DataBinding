System.register(['@angular/core', './shopping-list-new-item.component', './shopping-list-item.component'], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul> \n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>    \n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7b0JBRUksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBa0J0QyxDQUFDO2dCQWZHLDJDQUFXLEdBQVgsVUFBYSxJQUFjO29CQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVUsSUFBYztvQkFFcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUixVQUFVLElBQWM7b0JBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLHNuQkFlYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBQztxQkFDeEUsQ0FBQzs7eUNBQUE7Z0JBc0JGLDRCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx5REFvQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuLi9saXN0LWl0ZW0nO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KCB7XHJcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgzPk15IExpc3Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj57e2xpc3RJdGVtLm5hbWV9fSAoe3tsaXN0SXRlbS5hbW91bnR9fSk8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XHJcbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHJlbW92ZWQpPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1pdGVtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50LCBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudFxyXG57XHJcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XHJcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xyXG5cclxuICAgIG9uSXRlbUFkZGVkKCBpdGVtOiBMaXN0SXRlbSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaCggeyBuYW1lOiBpdGVtLm5hbWUsIGFtb3VudDogaXRlbS5hbW91bnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoIGl0ZW06IExpc3RJdGVtIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmUoIGl0ZW06IExpc3RJdGVtIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UoIHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoIGl0ZW0gKSwgMSApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
