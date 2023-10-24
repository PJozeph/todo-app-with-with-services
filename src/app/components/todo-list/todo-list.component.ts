import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Todo } from 'src/app/model/todo.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
    //private toDoService: TodoService  ezt csinálja a constructor;
    // public todos$: Observable<Todo[]> = of();

    public todos: Todo[] = [];
    private subs : Subscription = new Subscription();

    constructor(private todoService: TodoService, private todoListService: TodoListService) {}



    ngOnInit(): void {
        this.getTodos();
        const sub: Subscription = this.todoListService.todoCrudAction$.subscribe(respone => {
            this.getTodos();
        });
        this.subs.add(sub);
    }

    ngOnDestroy(): void {
      this.subs.unsubscribe()
    }

    public getTodos(): void {
        this.todoService.getTodos().subscribe((response: Todo[]) => {
            this.todos = response.filter(todo => !todo.completed);
        });
    }
}
