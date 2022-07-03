import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public userInfo: any;
  public friendsList = '';
  public addRemFriend = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.userInfo = this.apiService.getUser(this.data.userId);
    this.checkFriends(this.userInfo?.friendIds);
  }

  checkFriends(friendIds: number[]) {
    if (friendIds?.length) {
      this.addRemFriend = (friendIds.indexOf(this.data.authorId) >= 0);
      const last = friendIds.length - 1;
      friendIds.forEach((current, index) => {
        this.friendsList += this.apiService.getUser(current)?.username;
        if (index === last) {
          this.friendsList += '.';
        } else {
          this.friendsList += ', ';
        }
      });
    }
  }

  getAvatar() {
    let idAvatar: number;
    switch(this.userInfo.id) {
      case 1:
        idAvatar = 1;
        break;
      case 2:
        idAvatar = 3;
        break;
      case 3:
        idAvatar = 2;
        break;
      case 4:
        idAvatar = 4;
        break;
      case 5:
        idAvatar = 5;
        break;
      case 6:
        idAvatar = 3;
        break;
      default:
        idAvatar = 6;
        break;
    }
    
    return `background-image: url('../../assets/img/avatar${idAvatar}.jpg')`;
  }

  close() {
    this.dialogRef.close();
  }
}
