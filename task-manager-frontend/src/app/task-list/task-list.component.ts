import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask: any = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  editTask(task: any) {
    if (task.editing) {
      this.taskService.updateTask(task.id, task).subscribe(() => {
        task.editing = false;
      });
    } else {
      task.editing = true;
    }
  }

  deleteTask(taskId: number) {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta tarea?');
    if (confirmDelete) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  createTask() {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = {};
      this.loadTasks(); 
    });
  }
  
}
