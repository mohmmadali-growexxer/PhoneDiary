import { Injectable } from '@angular/core';
import {Contact} from "./contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      name: 'Mohmmadali',
      phone: '985-456-7890',
      email: 'ali@gmail.com',
      gender: 'Male',
      birthDate: new Date('2002-01-01')
    },
    {
      name: 'ishika',
      phone: '123-456-7890',
      email: 'ishika@gmail.com',
      gender: 'Female',
      birthDate: new Date('2004-01-01')
    },
    {
      name: 'Kris',
      phone: '945-857-562',
      email: 'kris@gmail.com',
      gender: 'Male',
      birthDate: new Date('2004-01-01')
    },
    {
      name: 'Tushar',
      phone: '948-856-256',
      email: 'tushar@gmail.com',
      gender: 'Male',
      birthDate: new Date('2004-01-01')
    },
    {
      name: 'priya',
      phone: '948-856-256',
      email: 'priya@gmail.com',
      gender: 'Female',
      birthDate: new Date('2004-01-01')
    },
  ];

  constructor() {}

  getContacts(): Contact[] {
    return this.contacts;
  }
  deleteTask(i: number) {
    this.contacts.splice(i, 1);
  }

  updateContact(index: number, updatedContact: Contact) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index] = updatedContact;
    }
  }
}
