import {Component} from '@angular/core';

const works = [
  {
    title:'Задание 1',
    description:'Решить общие задачи',
    comlete: false
  },
  {
    title:'Задание 2',
    description:'Закупить ссылки для раскрутки',
    comlete: true
  }
];

@Component({
  selector: 'app',
  templateUrl: '/views/modules/component.html'
})

export class AppComponent {
    title:string = 'New Temlate Free';
    works = works;

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
