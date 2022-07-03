import { Injectable } from '@angular/core';
import {default as rawPost} from './../../assets/data/rawPost';
import {default as users} from './../../assets/data/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getPost() {
    return rawPost;
  }

  getUser(userId: number) {
    return users.find(current => current.id === userId);
  }
}
