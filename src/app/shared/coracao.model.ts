export class Coracao{
  constructor(
    public cheio: boolean,
    public urlCheio = '/assets/coracao_cheio.png',
    public urlVazio= '/assets/coracao_vazio.png'
  ) {}

  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCheio;
    } else {
      return this.urlVazio;
    }
  }
}
