import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public postInfo: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.postInfo = this.apiService.getPost();
  }

}
