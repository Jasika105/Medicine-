import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private httpClient: HttpClient) {

  }

  getAllPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get(url);
  }

  getPostById(postId: string) {
    let url = 'https://jsonplaceholder.typicode.com/posts/'+ postId;
    return this.httpClient.get(url);
  }

  getUserById(userId: number) {
    let url = 'https://jsonplaceholder.typicode.com/users/' + userId;
    return this.httpClient.get(url);
  }

}
