import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnDestroy {
    @Input() todo: Todo = undefined as any;
    @Output() markedClickEvent = new EventEmitter();

    private subs : Subscription = new Subscription();

    constructor(private todoService: TodoService) {}

    public updateTodoStatus(todo: Todo): void {
        todo.completed = true;
       const sub: Subscription = this.todoService.updateTodoStatus(todo).subscribe(() => {
            this.markedClickEvent.emit();
        });
        this.subs.add(sub);
    }

    ngOnDestroy(): void {
      this.subs.unsubscribe()
    }
}
