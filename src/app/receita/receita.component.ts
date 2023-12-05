import { ReceitaService } from '../services/receita.service';
import { Receita } from '../model/receita.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})
export class ReceitaComponent implements OnInit {
  receitas: Receita[] = [];

  constructor(private ReceitaService: ReceitaService, private router: Router) {
  }

  ngOnInit(): void {
    this.ReceitaService.getReceitas().subscribe(response => {
      this.receitas = response as any;
    });
  }
  redirectToDetail(id: any) {
    this.router.navigate(["detail", id]);
  }
}
