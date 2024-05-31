import { Component } from '@angular/core';
import { iTodoUser } from '../../interfaces/todo-user';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  listCompleted: iTodoUser[] = [];

  constructor(private TodoSvc: TodoService) {}

  async ngOnInit() {
    const items: iTodoUser[] = await this.TodoSvc.getList();
    this.listCompleted = this.TodoSvc.getCompletedItems(items);
  }
}
