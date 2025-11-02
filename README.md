Fonte de estudos
https://conteudos.kipperdev.com.br/aprenda-angular-do-zero
https://material.angular.dev/guide/getting-started

# 🧭 Guia do Projeto Angular - 

Este documento organiza e padroniza as instruções de **instalação**, **uso** e **boas práticas** para o projeto Angular , utilizando a versão `20.0.0` da Angular CLI.

---

## 🚀 Iniciando o Projeto

ng new 'castro'


## Estrutura do Projetos Angular 

source src/: Contém todo o código fonte da aplicação. Componentes e Services.

app/: Diretório principal da aplicação onde os componentes, serviços e módulos vão ser organizados

assets/: Diretório para armazenar arquivos estáticos, como imagens e fontes.

environments/: Contém arquivos de configuração para diferentes ambientes desenvoly

main.ts: Arquivo de entrada principal que inicializa o módulo principal da aplicação

index.html: Página HTML principal, onde o aplicativo Angular é carregado. Onde injenta o approot <app-root></app-root>

styles.css: Arquivo de estilos globais da aplicação.

angular.json: Arquivo de configuração do Angular CLI, que define como o projeto é configurado, alterar a build. Adiconar arquivos css, html, budgets. Vários configurações.

package. json: Lista as dependências do projeto e scripts de build.

package-lock. json : Descrição expecificas das versões das dependecias que estamos usando.

tsconfig.json: Configurações com typescript.

tsconfig.spec.json: Configuração do typescript para teste unitarios.

tsconfig.app.json: Configuração especifica da aplicação.


### 🔁 Clonando o Repositório (GIT)

Escolha a pasta desejada e execute:

```bash
cd caminho/desejado
git clone <URL-do-repositório>
```

### ⚙️ Instalações Obrigatórias

Realizar a instalação do Node.js

Instale a Angular CLI globalmente:

```bash
npm install -g @angular/cli
```


### ✅ Verificação do Ambiente

Confira se as versões estão corretamente instaladas:

```bash
node -v       # Versão do Node
npm -v        # Versão do NPM
ng version    # Versão da Angular CLI
```

### 🪟 Corrigir PATH (Windows)

Se `ng` não for reconhecido:

1. Execute:
   ```bash
   npm list -g
   ```
   e copie o caminho (ex: `C:\Users\usuario\AppData\Roaming\npm`)

2. Vá em **Variáveis de Ambiente** > Edite a variável `Path` > Adicione esse caminho

3. Reinicie o VSCode e teste novamente:
   ```bash
   ng version
   ```

---

## 🧪 Rodando o Projeto Localmente

### 📦 Instalar Dependências

```bash
npm install
```

### ▶️ Iniciar o Servidor de Desenvolvimento

```bash
npm run start
# ou
ng serve
```

**Opções úteis:**

```bash
ng serve --open     # Abre o navegador automaticamente
ng serve --port 4201  # Define uma porta específica
```

Acesse o app em: [http://localhost:4200](http://localhost:4200)

---

## 🛠️ Gerando Código com Angular CLI

### 📁 Criar um novo componente

```bash
ng generate component nome-do-componente
# ou atalho:
ng g c nome-do-componente
```

### 📋 Ver todos os comandos disponíveis

```bash
ng generate --help
```

---

## ⚖️ Build e Testes

### 🏗️ Compilar para Produção

```bash
ng build
```

O build será gerado em: `/dist`

### ✅ Testes Unitários com Karma

```bash
ng test
```

### 🌐 Testes End-to-End (E2E)

```bash
ng e2e
```

> ℹ️ A CLI do Angular não inclui framework de E2E por padrão. Sugestão: [Cypress](https://www.cypress.io/).

---

## 💻 Angular no VSCode

### 🔌 Extensões Recomendadas

- **Angular Language Service**
- **Angular Snippets (v18)**

### 🧠 Usar a versão do TypeScript do projeto

1. Pressione `Ctrl + Shift + P`
2. Digite `Select TypeScript Version`
3. Escolha a opção "Use Workspace Version"

---

## 🎨 CSS com Flexbox

### 📚 Conceitos Básicos

| Propriedade      | Função                           |
|------------------|----------------------------------|
| `display: flex`  | Ativa o modo flex                |
| `flex-direction` | Alinha itens em linha ou coluna  |
| `flex-wrap`      | Permite quebra de linha          |
| `gap`            | Espaço entre os filhos           |
| `.row`           | Agrupamento horizontal flex      |
| `.col-*`         | Largura proporcional dos filhos  |
| `@media`         | Estilo responsivo                |

#### 🧠 Dica:
- Pense em `.row` como uma **linha flexível**
- Use `.col-*` para dividir o espaço horizontalmente
- Veja o comportamento no navegador via **DevTools > Elements > Layout**

#### 🧩 Exemplo de uso:

```css
flex: 1 1 100%; /* Cresce, encolhe e ocupa 100% inicialmente */
```

---

## 📂 Padrão de Commits (Angular Style)

| Tipo       | Descrição                                 |
|------------|--------------------------------------------|
| `feat`     | Nova funcionalidade                        |
| `fix`      | Correção de bug                            |
| `refactor` | Refatoração sem mudança de comportamento   |
| `style`    | Ajustes visuais ou formatação              |
| `docs`     | Alterações na documentação                 |
| `test`     | Criação/ajuste de testes                   |
| `chore`    | Outras mudanças (build, dependências etc)  |

### Exemplos:

```bash
feat(ui): adicionar cabeçalho azul responsivo
fix(layout): corrigir overflow lateral no header
refactor(css): mover estilos para arquivo global
```

> 💡 Dica: Use **Husky + Commitlint** para forçar esse padrão automaticamente.

---

## 📦 Boas Práticas com Assets

### 🖼️ Adicionando imagens externas

Configure no `angular.json`:

```json
"assets": [
  {
    "glob": "/*",
    "input": "public",
    "output": "/"
  },
  {
    "glob": "/*",
    "input": "src/assets",
    "output": "/assets/"
  }
]
```

No componente:

```ts
logoPath = 'assets/images/logofau.png';
```

No HTML:

```html
<img [src]="logoPath" alt="Logo FAU" class="header-logo">
```

---

## 🔢 Boas Práticas com Máscaras (CPF/CEP)

### 📌 Regras:

1. Use diretiva com `@HostListener('paste')`
2. Limpe com:
   ```ts
   .replace(/\D/g, '')
   ```
3. Aplique a máscara com `.replace(...)`
4. Dispare manualmente:
   ```ts
   dispatchEvent(new Event('input'))
   ```
5. Adicione `maxlength` no HTML:
   ```html
   maxlength="14"  <!-- CPF -->
   maxlength="9"   <!-- CEP -->
   ```

### ✅ Para maior integração com Angular Forms:

Implemente `ControlValueAccessor`.

---

## Angular Material

Estilização com biblioteca do Angular



### No Angular especificamente BUILD 🔹

Quando você está desenvolvendo (ng serve), o Angular compila seu código TypeScript e HTML em tempo real e sobe um servidor local.

Quando você vai buildar (ng build), o Angular:

Pega todo o seu código-fonte (TypeScript, HTML, CSS, etc).

Converte para JavaScript, HTML e CSS otimizados que o navegador entende.

Junta tudo em uma pasta chamada /dist.

Otimiza (minifica, remove espaços, comentários, etc) para deixar mais rápido.

👉 O resultado do build é o que você coloca em produção, no servidor ou hospedagem.


## Reiniciar o TypeScript Server (mais provável)

Aperte Ctrl+Shift+P
Digite: TypeScript: Restart TS Server
Pressione Enter

## Módulos Utilizados no Projeto.

// Módulos Essenciais
    CommonModule, // Fornece diretivas como NgIf e NgFor para a renderização condicional e de listas.

// Módulos para Formulários Reativos
    ReactiveFormsModule, // Habilita o uso de formulários reativos para gerenciar o estado e a validação do formulário.

// Componentes do Angular Material
    MatFormFieldModule, // Contêiner para inputs, adicionando rótulos flutuantes e mensagens de erro.
    MatSelectModule,    // Fornece o componente de seleção (dropdown) estilizado.
    MatInputModule,     // Estiliza os campos de entrada (input) nativos com o design do Material.
    MatButtonModule,    // Fornece botões estilizados.
    MatCardModule,      // Um contêiner de cartão para agrupar visualmente o conteúdo do formulário.
    MatIconModule,      // Permite o uso de ícones do Material Design.

// Biblioteca de Terceiros
    NgxMaskDirective,   // Diretiva para aplicar máscaras de formatação a campos de entrada (ex: CPF, telefone).

## Utilizar a pasta assests, tive que adicionar o diretorio no angular.json

"assets": [
  "src/assets", <-- aqui
  {
    "glob": "**/*",
    "input": "public"
  }
]


## BUILDAR CLI 2.0 +

ng build --configuration=production



## 📖 Licença

Este projeto é licenciado sob os termos da [MIT License](LICENSE).


# Módulo	Para que serve
MatCardModule	Componente <mat-card>
MatFormFieldModule	<mat-form-field> com labels flutuantes
MatInputModule	<input matInput> para campos de texto
MatButtonModule	<button mat-button> / <button mat-raised-button>
MatIconModule	<mat-icon> para ícones
MatCheckboxModule	<mat-checkbox> para checkboxes
MatProgressSpinnerModule	<mat-spinner> para loading
MatSnackBarModule	Para notificações toast
BrowserAnimationsModule	OBRIGATÓRIO - Para animações




Angular usa sua própria sintaxe de eventos: (evento)="metodo()"


JavaScript Puro	Angular
onclick="funcao()"	(click)="funcao()"
onchange="funcao()"	(change)="funcao()"
onsubmit="funcao()"	(submit)="funcao()"



Tive que realizar alterações no arquivo custom-theme.scss, depois que eu instalei a lib Angular Material

Tive que dar uma olhada no arquivo app.config.ts 


SnackBar - Para ativar mensagens/alertas