import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';
import {TentativasComponent} from '../tentativas/tentativas.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta = '';
  public progresso = 0;
  public rodada = 0;
  public rodadaFrase: Frase;
  public tentativas = 3;

  constructor() {
    this.atualizarRodada();
  }
  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
     this.resposta = (resposta.target as HTMLInputElement).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.toUpperCase() === this.resposta.toUpperCase()) {
        alert('A tradução está correta');

        // troca a pergunta
        this.rodada ++;
        // aumentar o progresso
        this.progresso = this.progresso + (100 / this.frases.length);
        if (this.rodada === 4) {
            alert('Parabens você concluiu com sucesso');
        }
        this.atualizarRodada();
    } else {
        // diminuir as tentativas
        this.tentativas --;

        if (this.tentativas === -1) {
              alert('Você perdeu!');
          }
    // Aula 77
    }
  }
  public atualizarRodada(): void {
    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];
    // limpar a resposta
    this.resposta = '';
  }
}
