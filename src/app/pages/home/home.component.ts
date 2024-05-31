import { Component } from '@angular/core';
import { iTodoUser } from '../../interfaces/todo-user';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  originalListArr: iTodoUser[] = [];
  listArr: iTodoUser[] = [];

  constructor(private TodoSvc: TodoService) {}

  ngOnInit() {
    this.TodoSvc.getList().then((data: iTodoUser[]) => {
      this.originalListArr = data;
      this.listArr = data;
    });
    let audio = new Audio();
    audio.src = '../../../assets/audio/Just do it! meme.mp3';
    audio.play();
  }

  filterPosts(event: any) {
    const searchValue = event.target.value.toLowerCase();
    this.listArr = this.originalListArr.filter((post) =>
      post.firstName.toLowerCase().includes(searchValue)
    );
  }
}
