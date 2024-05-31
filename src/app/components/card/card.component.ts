import { Component, Input } from '@angular/core';
import { iTodoUser } from '../../interfaces/todo-user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() ListWithUser!: iTodoUser;

  toggleStatus() {
    this.ListWithUser.completed = !this.ListWithUser.completed;
  }
}
