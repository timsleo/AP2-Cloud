import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../model/receita.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private HttpClient : HttpClient) {}

    public getReceitas(idPost : Number) : Observable <Receita[]> {
      return this.HttpClient.get<Receita[]>("https://leotimsapp.azurewebsites.net"+idPost);
    }

    public getReceitaById(idPost : Number) : Observable <Receita> {
      return this.HttpClient.get<Receita>("https://leotimsapp.azurewebsites.net"+idPost);
    }
   }

