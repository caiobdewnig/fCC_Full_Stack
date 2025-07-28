const projectStatus = {
  PENDING: {
    description: "Pending Execution",

  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
}

class ProjectIdea {
  constructor(title,description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
    return this.status
  }
}


/* MINHA TENTATIVA:

class ProjectIdeaBoard extends ProjectIdea {
  constructor(title) {
    this.ideas = [];
  }

  pin (projectIdeaInstance) {
    this.ideas.push(this.projectIdeaInstance);
    return ideas
  }

  unpin (projectIdeaInstance) {
    this.ideas.splice(ideas.indexOf(this.projectIdeaInstance),1);
    return ideas
  }

  count () {
    return this.ideas.length
  }

  formatToString() {
    return `
    ${this.title} has ${this.count} idea(s)\n
    ${ideas.forEach((idea) => {
      `${idea.title} (${idea.status}) - ${idea.description}`
    })}
    `
  }
}

ERROS:
Problema 1) Eu usei extends ProjectIdea;
Explicação: ProjectIdeaBoard não deveria herdar de ProjectIdea, porque ela não é uma ideia, e sim uma coleção de ideias.
Correção: Remova extends ProjectIdea.

Problema 2) O construtor não definia this.title;
Explicação: Embora o construtor receba title, você não armazenou esse valor na instância.
Correção: Adicione this.title = title; dentro do construtor.

Problema 3) Eu usei ideas.push(...) e ideas.splice(...);
Explicação: ideas não é uma variável global nem local — você deveria usar a propriedade do objeto this.ideas.
Correção: Trocar por this.ideas.push(...) e this.ideas.splice(...).

Problema 4) count usado como propriedade, não como função;
Explicação: Você escreveu ${this.count}, mas count é um método — precisa dos parênteses.
Correção: Usar ${this.count()}.

Problema 5) Uso incorreto de forEach() dentro do template literal;
Explicação: forEach() não retorna uma string, apenas executa efeitos colaterais. Dentro do template literal, isso resulta em undefined.
Correção: Use .map(...).join("\n") ou monte a string manualmente com += em um loop.

Problema 6) A string do formatToString() foi construída de forma inválida;
Explicação: Dentro do forEach(), você criou uma template string, mas não retornou nem acumulou essa string em lugar nenhum.
Correção: Se usar forEach, acumule os resultados com +=. Se usar map, retorne as strings e junte com .join().

*/

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;          // ✅ armazena o título da board
    this.ideas = [];             // ✅ array vazio pra guardar ideias
  }

  pin(projectIdeaInstance) {
    this.ideas.push(projectIdeaInstance);  // ✅ adiciona no array da instância
  }

  unpin(projectIdeaInstance) {
    const index = this.ideas.indexOf(projectIdeaInstance);
    if (index !== -1) {
      this.ideas.splice(index, 1);         // ✅ remove pelo índice
    }
  }

  count() {
    return this.ideas.length;              // ✅ retorna quantas ideias
  }

  formatToString() {
    let output = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return output;
  }
}
