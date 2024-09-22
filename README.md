# FocalPoint

**FocalPoint** é uma aplicação de lista de tarefas (_To-Do List_) desenvolvida com **Next.js**, utilizando **TypeScript**, **Sass**, **Storybook** e **Vitest** para garantir uma estrutura sólida, componentes estilizados e uma cobertura de testes completa.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript que adiciona tipagem estática.
- **[Sass](https://sass-lang.com/)** - Extensão CSS que facilita a escrita de estilos com aninhamento e variáveis.
- **[Storybook](https://storybook.js.org/)** - Ferramenta para desenvolvimento de componentes de forma isolada.
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários e de integração rápido e leve.

## Funcionalidades

- Adicionar e remover tarefas.
- Marcar tarefas como concluídas.
- Separação de tarefas por status (pendente ou concluída).
- Interface limpa e responsiva, estilizada com Sass.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e npm (ou Yarn) instalados em sua máquina.

- **Node.js**: [Instalar Node.js](https://nodejs.org/)
- **npm** (gerenciador de pacotes) ou **Yarn**.

## Instalação

Siga as etapas abaixo para instalar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/EvandroCalado/legaplan.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd legaplan
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou, se estiver utilizando Yarn:

   ```bash
   yarn install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

## Scripts Disponíveis

- **`npm run dev`**: Executa o servidor de desenvolvimento Next.js.
- **`npm run build`**: Cria uma versão de produção da aplicação.
- **`npm run start`**: Inicia o servidor em produção após o build.
- **`npm run lint`**: Executa o linter (ESLint).
- **`npm run test`**: Executa os testes com o Vitest.
- **`npm run coverage`**: Executa a cobertura de testes com o Vitest.
- **`npm run storybook`**: Inicia o Storybook para desenvolvimento de componentes isolados.
- **`npm run build-storybook`**: Gera uma versão estática do Storybook.

## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```bash
├── public/           # Arquivos públicos (imagens, fontes, etc.)
├── src/
│   ├── app/          # Páginas da aplicação (Next.js)
│   ├── components/   # Componentes React reutilizáveis
│   ├── hooks/        # Arquivos de hooks personalizados
│   └── sass/         # Arquivos de estilos
├── .eslintrc.json    # Configuração do ESLint
├── next.config.js    # Configuração do Next.js
├── tsconfig.json     # Configuração do TypeScript
└── package.json      # Dependências e scripts do projeto
```

## Testes

O projeto utiliza o **Vitest** para testes. Para rodar os testes, execute o comando:

```bash
npm run test
```

## Storybook

O **Storybook** permite que você visualize e desenvolva componentes de forma isolada. Para iniciar o Storybook, use o comando:

```bash
npm run storybook
```

Acesse a interface do Storybook em:

```
http://localhost:6006
```

## Observações

As tarefas estão em um array em memoria, pois backend não era o foco o desafio.

## Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
