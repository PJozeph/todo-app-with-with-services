import { Component, inject } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-create-todo',
    templateUrl: './create-todo.component.html',
    styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
    public title: string = '';
    public description: string = '';

    public todoService: TodoService = inject(TodoService);
    public todoListService: TodoListService = inject(TodoListService);

    // constructor(private todoService: TodoService){}

    public createTodo(): void {
        const todo = {
            id: Math.floor(Math.random()),
            title: this.title,
            description: this.description,
            completed: false,
        };
        this.todoService.createTodo(todo).subscribe(() => {
            this.title = '';
            this.description = '';
            this.todoListService.todoCrudAction$.next('create');
        });
    }
}
