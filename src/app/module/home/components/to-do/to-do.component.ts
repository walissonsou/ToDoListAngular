import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  public taskList: Array<{task: string, checked: boolean}> = []


  constructor() { }

  ngOnInit(): void {
  }

}
