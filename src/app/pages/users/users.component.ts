import { Component } from '@angular/core';
import { iTodoUser } from '../../interfaces/todo-user';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  listArr: iTodoUser[] = [];

  constructor(private TodoSvc: TodoService) {}

  async ngOnInit() {
    this.TodoSvc.getList().then((data: iTodoUser[]) => {
      this.listArr = data;
    });
  }
}
