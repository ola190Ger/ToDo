import { Component } from '@angular/core';
import { Task } from './task';
import { v4 as uuid } from 'uuid';


class Item{
  purchase: string;
  done: boolean;
  price: number;
   
  constructor(purchase: string, price: number) {

      this.purchase = purchase;
      this.price = price;
      this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text!: string;
  price: number = 0;
   
  tasks: Task[] = 
  [
      { id: '123wq', taskText: 'Task1', isCompleted: false},
      { id: 'stringId', taskText: 'Task2', isCompleted: true}
  ];
  addTask(text: string): void {
       
      if(text==null || text.trim()=="")
          return;
      this.tasks.push(new Task(uuid(), text, false));
      this.text = ''
  }
  
  // title = 'ToDo';
  // peremenna = '1213';
  // mass: Task[] = [];
  // rezulthandler(value: Task){
  //   console.log(value)
  //   this.mass.push(value)
  // }

  
}
