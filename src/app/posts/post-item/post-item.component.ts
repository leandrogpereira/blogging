import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() comment: any;
  @Input() respondsToList: any[] = [];
  @Input() author: any;

  postForm: FormGroup;
  submitted = false;
  filteredList: any[] = [];

  constructor(
    private fb: FormBuilder,
    public matDialog: MatDialog
  ) {
    this.postForm = this.fb.group({
      respondsToid: null,
      text: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.filteredList = _.cloneDeep(this.respondsToList);
  }

  onlyRespondsTo(commentId: number) {
    return this.respondsToList.filter(current => current?.respondsTo?.id === commentId);
  }

  showInput(comment: any) {
    comment.commenting = true;
  }

  hideInput(comment: any) {
    comment.commenting = false;
    this.submitted = false;
    this.postForm.reset();
  }

  save(comment: any) {
    this.submitted = true;

    if (this.postForm.valid) {
      const ids = this.respondsToList.map(current => Number(current.id));
      let lastId = ids.reduce(function(a, b) {
        return Math.max(a, b);
      }, 0);

      this.respondsToList.push({
        id: lastId++,
        respondsTo: {
          id: comment.id
        },
        author: {
          id: this.author.id,
          username: this.author.username
        },
        timestamp: this.getLocateDate(),
        content: this.postForm.value.text
      });
      comment.commenting = false;
      this.submitted = false;
      this.postForm.reset();
    }
  }

  getLocateDate(): string {
    const now = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
    return now.substring(6,10)+'-'+now.substring(3,5)+'-'+now.substring(0,2)+'T'+now.substring(11,13)+':'+now.substring(14,16)+'Z';
  }

  showDetail(comment: any): void {
    this.matDialog.open(ModalComponent, {
      data: { 
        authorId: this.author.id,
        userId: comment.author.id
      },
      autoFocus: false
    });
  }

}
