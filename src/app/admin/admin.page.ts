import { Component, OnInit } from "@angular/core";
import { TaskI } from "../entity/task.interface";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"]
})
export class AdminPage implements OnInit {
  todos: TaskI[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {

  }
  ionViewDidEnter() {

    console.log('ionViewDidEnter');
    this.todoService.getTodos().subscribe(todos => {
      console.log("Todoss", todos);
      this.todos = todos;
    });
  }
  onRemove(idTask: string) {
    this.todoService.removeTodo(idTask);
  }
}
