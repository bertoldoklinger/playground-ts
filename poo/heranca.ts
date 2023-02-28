export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    protected readonly cpf: string,
    private readonly idade: number
  ) {}

  getIdade(): void {
    console.log(this.idade);
  }

  getCpf(): void {
    console.log(this.cpf);
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do aluno" + " " + this.nome + " " + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do cliente" + " " + this.nome + " " + this.sobrenome;
  }
}
const pessoa = new Pessoa("Bertoldo", "Klinger", "05412792383", 23);
const aluno = new Aluno("Bertoldo", "Klinger", "05412792383", 23);
const cliente = new Cliente("Bertoldo", "Klinger", "05412792383", 23);

console.log(
  pessoa.getNomeCompleto(),
  aluno.getNomeCompleto(),
  cliente.getNomeCompleto()
);
