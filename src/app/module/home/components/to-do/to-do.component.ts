import { Component, OnInit } from '@angular/core';
import { Tasklist } from 'src/app/module/model/tasklist';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  public taskList: Array<Tasklist> = []


  constructor() { }

  ngOnInit(): void {
  }

  public SetEmitItem(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event:number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja apagar tudo?")
    if(confirm){
    this.taskList = []
    }
  }
}
