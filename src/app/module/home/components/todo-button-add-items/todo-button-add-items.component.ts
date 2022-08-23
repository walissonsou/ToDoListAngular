import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-add-items',
  templateUrl: './todo-button-add-items.component.html',
  styleUrls: ['./todo-button-add-items.component.scss']
})
export class TodoButtonAddItemsComponent implements OnInit {

  @Output() public EmitterAddItemTaskList = new EventEmitter();

  public AddItemTaskList: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  public SubmitTask(){
    this.AddItemTaskList = this.AddItemTaskList.trim()
    if(this.AddItemTaskList){
    this.EmitterAddItemTaskList.emit(this.AddItemTaskList);
    this.AddItemTaskList = "";
  }
  }
}
