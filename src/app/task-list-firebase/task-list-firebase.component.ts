import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskPromiseService } from '../services/task-promise.service';

@Component({
selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: `./task-list-firebase.component.html`,
})
export class TaskListFirebaseComponent {
  tasks: Task[] = []; // Liste des tâches
  newTask = { title: '', status: 'pending' }; // Tâche à ajouter

  constructor(private db: Database, private taskService: TaskPromiseService) {
    const tasksRef = ref(this.db, 'tasks');

    // Récupération en temps réel des tâches
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      this.tasks = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
    });
  }

  addTask() {
    if (this.newTask.title.trim()) {
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }

  async updateTaskStatus(task: any): Promise<void> {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    try {
      await this.taskService.updateTask({ ...task, status: newStatus });
      task.status = newStatus; // Mettre à jour localement pour un retour visuel immédiat
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la tâche :', error);
    }
  }

  async deleteTask(task: Task): Promise<void> {
    try {
      if (task.id) {
        await this.taskService.deleteTask(task.id);
      } else {
        console.error('Task ID is undefined');
      }
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }
}