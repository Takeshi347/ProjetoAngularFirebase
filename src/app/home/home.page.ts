import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProduto } from './produto.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
  {
    isbn: '123',
    titulo: 'Uma breve história do tempo',
    categoria: [
      { nome: 'científico' },
      { nome: 'romance' },
      { nome: 'terror' }
    ]
  },
  { isbn: '124', titulo: 'Dom Casmurro', categoria: [{ nome: 'romance' }] },
  { isbn: '125', titulo: 'O Senhor dos Anéis', categoria: [{ nome: 'fantasia' }] },
  { isbn: '126', titulo: '1984', categoria: [{ nome: 'ficção científica' }] },
  { isbn: '127', titulo: 'O Pequeno Príncipe', categoria: [{ nome: 'infantil' }] },
  { isbn: '128', titulo: 'A Revolução dos Bichos', categoria: [{ nome: 'político' }] },
  { isbn: '129', titulo: 'Harry Potter e a Pedra Filosofal', categoria: [{ nome: 'fantasia' }] },
  { isbn: '130', titulo: 'O Código Da Vinci', categoria: [{ nome: 'suspense' }] },
  { isbn: '131', titulo: 'Crepúsculo', categoria: [{ nome: 'romance' }] },
  { isbn: '132', titulo: 'Drácula', categoria: [{ nome: 'terror' }] },
  { isbn: '133', titulo: 'Frankenstein', categoria: [{ nome: 'terror' }] },
  { isbn: '134', titulo: 'O Hobbit', categoria: [{ nome: 'fantasia' }] },
  { isbn: '135', titulo: 'As Crônicas de Nárnia', categoria: [{ nome: 'fantasia' }] },
  { isbn: '136', titulo: 'O Alquimista', categoria: [{ nome: 'ficção' }] },
  { isbn: '137', titulo: 'A Menina que Roubava Livros', categoria: [{ nome: 'drama' }] },
  { isbn: '138', titulo: 'It: A Coisa', categoria: [{ nome: 'terror' }] },
  { isbn: '139', titulo: 'Jogos Vorazes', categoria: [{ nome: 'ficção científica' }] },
  { isbn: '140', titulo: 'Duna', categoria: [{ nome: 'ficção científica' }] },
  { isbn: '141', titulo: 'O Iluminado', categoria: [{ nome: 'terror' }] },
  { isbn: '142', titulo: 'Percy Jackson e o Ladrão de Raios', categoria: [{ nome: 'fantasia' }] },
  { isbn: '143', titulo: 'Cem Anos de Solidão', categoria: [{ nome: 'realismo mágico' }] }
];
  produtos: IProduto[] = [
    {
    codigo: '23123',
    nome: 'aad',
  }
  ];
  
}
