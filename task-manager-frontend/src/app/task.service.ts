import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/tasks/';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.apiUrl);
  }
  
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${taskId}/`);
  }

  createTask(newTask: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,newTask);
  }
  
  updateTask(taskId: number, updatedTask: any) {
    const url = `${this.apiUrl}${taskId}/`;
    return this.http.put(url, updatedTask);
  }
  
  
}