import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [{
    itemName : 'Coding',
    itemDueDate : '13-10-21',
    itemPriority : 'high',
    itemCategory : 'word'
  },
  {
    itemName : 'Design',
    itemDueDate : '28-10-21',
    itemPriority : 'low',
    itemCategory : 'work'
  },
  {
    itemName : 'Shopping',
    itemDueDate : '30-10-21',
    itemPriority : 'middle',
    itemCategory : 'personal'
  },
  {
    itemName : 'Workout',
    itemDueDate : '25-10-21',
    itemPriority : 'high',
    itemCategory : 'personal'
  },
]

today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })
    return await modal.present()
  }
}
