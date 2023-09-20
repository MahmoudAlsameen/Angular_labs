import { Component, Input,Output,EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() cardItem !: User
  @Input() activeUserName!: string;
  @Output() sendUserName = new EventEmitter<string>()


  sendToParent(userName:string) {
    this.sendUserName.emit(userName)


  }

}
