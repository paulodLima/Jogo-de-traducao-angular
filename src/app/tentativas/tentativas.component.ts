import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit , OnChanges {
  public coracaoVazio = '/assets/coracao_vazio.png';
  public coracaoCheio = '/assets/coracao_cheio.png';
  @Input() public tentativas: number;

  public coracoes = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];
  constructor() {}

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;

      this.coracoes[indice - 1].cheio = false;

    }
    console.log('tentativas', this.tentativas);
  }

  ngOnInit(): void {}

}
