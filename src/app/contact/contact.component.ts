import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import {Contact} from "./contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[] = []
  editMode: boolean[] = new Array<boolean>();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.initializeEditMode();
  }
  onDelete(i:number){
    const result = confirm('Are you sure you want to delete this contact?');
    if (result) {
      this.contactService.deleteTask(i);
    }
  }

  editingIndex: number | null = null;



  initializeEditMode() {
    this.editMode = new Array<boolean>(this.contacts.length).fill(false);
  }

  onEdit(index: number) {
    this.editMode[index] = true;
  }

  onCancelEdit(index: number) {
    this.editMode[index] = false;
  }

  onUpdate(index: number) {
    // Get the updated contact details
    const updatedContact = this.contacts[index];
    // Perform update logic if needed
    this.contactService.updateContact(index, updatedContact);
    // Exit edit mode
    this.editMode[index] = false;
  }

}
