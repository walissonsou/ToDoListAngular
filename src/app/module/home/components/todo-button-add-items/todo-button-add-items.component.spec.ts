import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonAddItemsComponent } from './todo-button-add-items.component';

describe('TodoButtonAddItemsComponent', () => {
  let component: TodoButtonAddItemsComponent;
  let fixture: ComponentFixture<TodoButtonAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
