import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoButtonAddItemsComponent } from './components/todo-button-add-items/todo-button-add-items.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoButtonAddItemsComponent,
    ToDoComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class HomeModule { }
