<h1 align="center">Ignite - GoFinances</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-18.0.0-blue" 
    alt="React Ver. ^18.0.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-4.3.5-blue"
    alt="Typescript Ver. 4.3.5" 
  />
  <img 
    src="https://img.shields.io/badge/Expo-46.0.8-blue"
    alt="Expo Ver. 46.0.8" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nele aborda a criação de uma aplicação mobile apresentando os fundamentos do **React Native**.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactNative](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-react-native-gofinances.git

$ cd ignite-react-native-gofinances
```

Para iniciá-lo, siga os passos abaixo:

Será necessário para iniciar que tenha instalado o [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
# Instalar as dependências
$ expo install

# Iniciar o projeto
$ expo start
```

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />

## 📓 Anotações pessoais

<br />

<h3>Comandos executados </h3>

```bash
# Criando o projeto, ao passar a flag --npm ou --yarn vai dizer qual gerenciador de pacotes vai utilizar
# Não misture, se decidir usar um é recomendado seguir com ele pois pode gerar muita dor de cabeça.

➜ expo init imhere --npm
# Selecionada a opção Menaged Workflow, blank (TypeScript)

➜ expo install expo-status-bar
```
---
<br />


## 📓 Anotações pessoais



➜ expo install expo-font @expo-google-fonts/poppins 

<h3>Comandos e dependências instaladas.</h3>

```javascript
➜ expo init gofinances --npm //Criando o projeto "Opção selecionada: minimal"

➜ expo add styled-components //Adicionando styled-components
➜ expo add @types/styled-components-react-native -- -D //Adicionando tipagem do react-native do styled-components
➜ expo add expo-font @expo-google-fonts/poppins //Adicionando a font poppins do google-fonts

➜ expo add expo-app-loading //Adiciona um splash de loading na aplicação
```


<h3>Começando o projeto</h3>

```javascript
// Criando o projeto
➜ expo init gofinances --npm

// Devido a algumas atualizações no Expo, não é possível mais criar um projeto no model "bare and minimal" com TypeScript, 
// agora precisamos criá-lo com javascript e depois adicionar o TypeScript. 
// Selecione a opção bare and minimal.
✔ Choose a template: › minimal             bare and minimal, just the essentials to get you started
```
<hr />

<h3>Adicionando o TypeScript</h3>

```javascript
// Crie na raiz do projeto um arquivo tsconfig.json vazio e em seguida rode o comando:
➜ expo start

// Feito isso, o expo vai detectar o arquivo e perguntar se quer instalar as dependências do TypeScript, aperte Y(yes) para confirmar.

/* 
Depois da instalação, precisamos adicionar algumas configurações, no arquivo tsconfig.json adicione o "strict": true
Ficando assim:
{
  "compilerOptions": {
    "strict": true
  },
  "extends": "expo/tsconfig.base"
}
Feito isso, agora pode mudar o arquivo App.js (localizado na raiz), para App.tsx.
*/
```
<hr />

<h3>Instalando dependências com Expo add/install</h3>

```javascript
➜ expo add @types/styled-components-react-native -- -D
/* Podemos utilizar tanto Expo add ou Expo install para instalar a dependência
Obs. lembrando que na criação do projeto dizemos qual é o gerenciador de pacotes que vamos utilizar "expo init gofinances --npm"

Para poder passar comandos adicionar no Expo add devemos passar a flag "--" e depois o comando desejado, exemplo
"expo add @types/styled-components -- -D" nesse exemplo era necessário adicionar como Dependência de desenvolvimento a tipagem, passamos "--" para informar o "-D", já que o Expo não entende por sí o "-D".
*/
```

<hr />

<h3>TypeScript - Sobrescrevendo tipos.</h3>
<p>No exemplo abaixo foi necessário adicionar um tema para aplicação, porém era necessário "tipa-lo".</p>

```javascript
// Criamos um arquivo chamado styled.d.ts, e importamos os locais onde podemos pegar os tipos que precisamos para sobrescrever.

import "styled-components";
import theme from "./theme";

// "Acessamos" o modulo do styled-components, e vamos exportar o que queremos sobrescrever.
declare module "styled-components" {
  //Criamos um type com a tipagem que desejamos adicionar, e usamos um type recebendo typeof, 
  //pois assim ele pega exatamente convertido a tipagem do elemento desejado (Ex. {cor: 'vermelho'}, para {cor: string}).
  type ThemeType = typeof theme;  

  //Exportamos agora para sobrescrever o DefaultTheme com o ThemeType.
  export interface DefaultTheme extends ThemeType {}
}
```




<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)