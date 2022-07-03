import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() comments: any[] = [];
  @Input() author: any;

  commentsList: any[] = [];
  respondsToList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.onlyComments();
    this.onlyRespondsTo();
  }

  onlyComments() {
    this.commentsList = this.comments.filter(current => !current?.respondsTo?.id);
  }

  onlyRespondsTo() {
    this.respondsToList = this.comments.filter(current => current?.respondsTo?.id);
  }

}
