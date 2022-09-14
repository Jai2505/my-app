import { Component, OnInit } from '@angular/core';
import { Inbox } from '../inbox';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-mailinbox',
  templateUrl: './mailinbox.component.html',
  styleUrls: ['./mailinbox.component.css'],
})
export class MailinboxComponent implements OnInit {
 
public mails:Inbox[] = [];  

  constructor(private _inboxService: InboxService) {
  
    this._inboxService.getmails().subscribe(
    (data:any) => {
      
      this.mails = data;
    },
    (err:any) => {
      alert('Internal Server Error');
    
  }
);
  }
  ngOnInit(): void {}
}
