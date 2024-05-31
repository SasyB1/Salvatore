import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodoUser, iTodos } from '../../interfaces/todo-user';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.scss',
})
export class UsersCardComponent {
  @Input() CardUsers!: iTodoUser;
  listArr: iTodos[] = [];

  constructor(private TodoSvc: TodoService) {}

  ngOnInit() {
    this.TodoSvc.getTodosByUser(this.CardUsers.userId).then(
      (data: iTodos[]) => {
        this.listArr = data;
      }
    );
  }
}
