import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profiles= [
    {
      id: new Date().getTime().toString(),
      name: 'Maximus Decimus Meridius',
      status: 'online',
      role: 'Gladiator',
      lastActive: new Date('2023-10-01T12:00:00Z')
    },
    {
      id: new Date().getTime().toString(),
      name: 'Ellen Ripley',
      status: 'absent',
      role: 'Warrant Officer',
      lastActive: new Date('2023-09-28T15:30:00Z')
    },
    {

      id: new Date().getTime().toString(),
      name: 'Tony Stark',
      status: 'offline',
      role: 'Genius Billionaire',
      lastActive: new Date('2023-09-30T09:45:00Z')
    },
  ];

  addProfile(name:string,status:string){
    
    const newProfile = {
        id: new Date().getTime().toString(),
        name: name,
        status: status,
        role: 'New User',
        lastActive: new Date()
      };
      this.profiles.push(newProfile);
      console.log(`(Via ProfilesService)Profil ajouté : ${name}-${status}`);
  }
  updateStatus(id:number,status:string){
    console.log(`(Via ProfilesService)Status MAJ : ${id}-${status}`);
    this.profiles[id].status = status;
  }
  constructor() { }
}