"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var works = [
    {
        title: 'Задание 1',
        description: 'Решить общие задачи',
        comlete: false
    },
    {
        title: 'Задание 2',
        description: 'Закупить ссылки для раскрутки',
        comlete: true
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'New Temlate Free';
        this.works = works;
        // toggle(work:any){
        //   work.comlete = !work.comlete;
        // }
        // delete(work:any){
        //   let index = this.works.indexOf(work)
        //
        //   if (index > -1) {
        //       this.works.splice(index, 1);
        //
        //   }
        // }
        // create(title:string) {
        //   this.works.push({title:title, description:'213', complete:true})
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: '/views/modules/component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map