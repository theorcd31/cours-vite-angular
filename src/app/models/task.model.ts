export interface Task {
    id?: string; // on met un id ou pas ? Firebase en crée un auto
    title: string;
    status: 'pending' | 'completed';
    }

// Définition de l'interface Task
export interface TaskManager {
    title: string;
    priority: 'haute' | 'moyenne' | 'basse';
    complete: boolean;
  }