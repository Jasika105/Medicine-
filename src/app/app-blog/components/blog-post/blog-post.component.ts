import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../../root-browser/services/blog.service";
import { BlogPost } from "../../models/blog-post.model";


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getAllPosts().subscribe((response: any) => {
      this.blogPosts = response;
    })
  }

  ngOnDestroy() {
    console.log('destroy for BlogPostsComponent')
  }

}
