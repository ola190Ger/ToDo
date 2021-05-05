import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  


  
  // @Input() MassS: Task[] = []
  
  // @Output() textemit = new EventEmitter<Task>()

  // clickhandler(){
  //   console.log('work')
  //   this.textemit.emit(new Task(uuid(), 'myTaskText', false))
  //   this.name=''
  // }
 
  // name = '';
}
