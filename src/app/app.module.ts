import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { TodosService } from './services/todos.service';
import { FiltersService } from './services/filters.service';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todoList/todoList.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TodosService,
    FiltersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
