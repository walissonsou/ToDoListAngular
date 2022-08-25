import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  public todoList: Array<string> = []

  constructor() { }

  public foodListAdd(value: string){
    this.todoList.push(value)
    }
}
