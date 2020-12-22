import { EventService } from '../services/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html', 
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[]
  searchValue: string; //THIS
 

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  

}