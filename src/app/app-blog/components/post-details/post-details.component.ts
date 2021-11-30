import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../root-browser/services/blog.service";
import {BlogPost} from "../../models/blog-post.model";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  blogPost: BlogPost;
  user: User;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      if(params && params.id) {
        this.loadSinglePostById(params.id);
      }
    })
  }

  loadSinglePostById(postId: string) {
    this.blogService.getPostById(postId).subscribe((response: any) => {
      this.blogPost = response;
      console.log(this.blogPost);
      this.loadPostUserData(this.blogPost.userId);
    })
  }

  loadPostUserData(userId: number) {
  this.blogService.getUserById(userId).subscribe((response: any) => {
    this.user = response;
    console.log(this.user);
  })
  }

}
