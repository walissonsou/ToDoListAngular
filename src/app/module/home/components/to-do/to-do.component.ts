import { Component, DoCheck, OnInit } from '@angular/core';
import { Tasklist } from 'src/app/module/model/tasklist';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements DoCheck {

  public taskList: Array<Tasklist> = [];


  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort( (first, last) => Number( first.checked) - Number(last.checked));
  }

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
   public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")
    if(confirm){
      this.deleteItemTaskList(index)
    }
    }

   }
}
