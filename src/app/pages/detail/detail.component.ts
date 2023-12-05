import { CommentModel } from './../../model/comment.model';
import { Receita } from './../../model/receita.model';
import { ReceitaService } from './../../services/receita.service';
import { CommentService } from '../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { CommentComponent } from '../../comment/comment.component';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  receita?: Receita;
  comment?: CommentModel[];
  showCriarComentario = false;

  constructor(
    private receitaService: ReceitaService,
    private commentService: CommentService,
    private route: ActivatedRoute) {

  }
  public abrirCriarNovoComentario(){
    this.showCriarComentario = true;
  }

  public atualizarComentarios(){
    this.carregaComentarios();
  }

  private carregaComentarios(){
    let idPost = this.route.snapshot.params["idPost"];
    this.commentService.getComment().subscribe(response =>{
      this.comment = response;
    });
    this.carregaComentarios();

  }

  ngOnInit(): void {
    let idPost = this.route.snapshot.params["idPost"];
    this.receitaService.getReceitaById(idPost).subscribe(response => {
      this.receita = response;
    });




  }
}
