import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

const routes: Routes = [{ path: 'todos', component: TodoPageComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
