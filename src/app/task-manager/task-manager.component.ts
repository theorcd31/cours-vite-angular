import { Component, signal } from '@angular/core';
import { TaskManager } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {
  tasksList = signal<TaskManager[]>([]);
  newTask= signal<TaskManager>({title: '', priority: 'basse', complete: false});
  priorityMap: { [key: string]: number } = {
    haute: 1,
    moyenne: 2,
    basse: 3,
  };
  
addTask(){
  try {
    const currentTasks = this.tasksList();
    this.tasksList.set([...currentTasks, this.newTask()]);
    this.newTask.set({ title: '', priority: 'basse', complete: false });
    this.sortTasks();
    console.log('nouvelle tâche ajoutée');
    console.log(this.tasksList());
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la tâche :', error);
  }
}

toggleComplete(task: TaskManager){
  const updatedTasks = this.tasksList().map(t =>
    t === task ? { ...t, complete: !t.complete } : t
  );
  this.tasksList.set(updatedTasks);
  this.sortTasks();
}

deleteTask(task: TaskManager){
  const updatedTasks = this.tasksList().filter(t => t !== task);
  this.tasksList.set(updatedTasks);
  this.sortTasks();
}

sortTasks() {
  const sortedTasks = [...this.tasksList()].sort((a, b) => this.priorityMap[a.priority] - this.priorityMap[b.priority]);
    this.tasksList.set(sortedTasks);
}
}
