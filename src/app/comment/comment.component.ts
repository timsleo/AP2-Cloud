import { CommentModel } from './../model/comment.model';
import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Output, Input ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comment = new FormControl('', [Validators.required]);
  author = new FormControl('', [Validators.required]);
  @Output() newCommentEvent = new EventEmitter();
  @Input() idPost: any = '';

  constructor(private commentService : CommentService){

  }

  public criarNovoComentario(){
    if (this.comment.hasError("required")){
      return;
    }

    if (this.author.hasError("required")){
      return;
    }

    let comment : CommentModel = {
      author: this.author.value as string,
      text: this.comment.value as string,
      dtComment: new Date()
    };

    this.commentService.createComment(this.idPost).subscribe(response =>{
      console.log("Comentário criado");
      this.newCommentEvent.emit();
    })


  }
}
