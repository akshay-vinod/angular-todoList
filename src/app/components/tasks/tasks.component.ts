import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => {
      this.tasks = task;
    });
  }
  DeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  ToggleTask(task: Task) {
    this.taskService.ToggleReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.AddTask(task).subscribe((task) => this.tasks.push(task));
  }
}
