import { Injectable } from '@angular/core';
import { iTodoUser, iTodos, iUsers } from './interfaces/todo-user';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoUrl: string = 'http://localhost:3000/todolist';
  userUrl: string = 'http://localhost:3001/Users';

  constructor() {}

  async getList(): Promise<iTodoUser[]> {
    try {
      const [todosResponse, usersResponse] = await Promise.all([
        fetch(this.todoUrl),
        fetch(this.userUrl),
      ]);

      const [todos, users] = await Promise.all([
        todosResponse.json(),
        usersResponse.json(),
      ]);

      const todoUserList: iTodoUser[] = todos.map((todo: iTodos) => {
        const author = users.find((user: iUsers) => user.id == todo.userId);
        if (author) {
          return { ...todo, ...author };
        }

        return null;
      });

      return todoUserList;
    } catch (error) {
      console.error('Errore:', error);
      throw error;
    }
  }

  getCompletedItems(items: iTodoUser[]): iTodoUser[] {
    return items.filter((item) => item.completed === true);
  }

  async getTodosByUser(userId: number): Promise<iTodos[]> {
    try {
      const todosResponse = await fetch(this.todoUrl);
      const todos: iTodos[] = await todosResponse.json();

      const userTodos: iTodos[] = todos.filter(
        (todo) => todo.userId === userId
      );

      return userTodos;
    } catch (error) {
      console.error('Errore:', error);
      throw error;
    }
  }
}
