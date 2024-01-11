import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo();
  @Input() i: number = 0;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoMarkAsDone: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  onDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    // alert('On click has been triggered');
  }
  markAsDone(todo: Todo) {
    this.todoMarkAsDone.emit(todo);
  }
}
