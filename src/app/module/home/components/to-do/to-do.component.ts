import { Component, OnInit } from '@angular/core';
import { Tasklist } from 'src/app/module/model/tasklist';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  public taskList: Array<Tasklist> = [
   ]


  constructor() { }

  ngOnInit(): void {
  }

}
