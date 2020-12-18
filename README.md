# YoutubeClone

O objetivo desde repositório é refatorar um projeto de clone do Youtube, oriundo de atividade desenvolvida durante o curso de Desenvolvimento web da [Trybe](https://www.betrybe.com/).

Além disso, serão utilizadas as ferramentas code climate e Travis, via GitHub Actions, para garantir qualidade do código e testar o processo de build da operação.

## Enunciado original do desafio

Uma equipe de pessoas desenvolvedoras estava encarregada de migrar o **front-end** do youtube de um **framework** antigo para `React`. O React foi escolhido por ser uma das bibliotecas _JavaScript_ de criação de interfaces mais utilizadas do mundo.

Porém, a equipe que estava encarregada não conhecia muito a ferramenta. Com isso, a migração não foi finalizada. O que foi feito por essa equipe está com alguns _bugs_ e más práticas de código.

Dito isso, vocês foram selecionados para este desafio, por já conhecerem o `ReactJS`.

Sendo assim, vocês estão encarregados desta demanda de refatoração geral da aplicação. A refatoração consiste em encontrar e corrigir os famigerados _bugs_. Além dos bugs, é necessário, também,corrigir qualquer má prática de código que encontrar na aplicação.

## Requisitos Originais

### 1. Testes do componente App

- O componente deve ser renderizado com sucesso;

### 2. Testes do componente Header

- O componente deve apresentar apenas um link ao ser renderizado;
- Ao realizar uma consulta deve redirecionar para tela de "busca";

### 3. Testes do componente SearchResult

- O componente deve apresentar apenas uma lista de videos, não canais, ao ser renderizado;
- Ao clicar em um video deve redirecionar para tela de video;

### 4. Testes do arquivo service.js

- Deve realizar requisições para API do youtube, e retornar os dados tratados;

### 5. Testes do componente VideoPage

- O componente deve carregar todos os dados do vídeo (comentários, descrição e vídeos relacionados), ao ser renderizado, na tela;
- Ao selecionar um vídeo no `SideBar` deve trocar o vídeo do _player_ e todos os seus dados, junto da URL.

## Proposta de refatoração

Em seu estado atual, o projeto já se encontra com bugs corrigidos, portanto o objetivo será:

1. Substituir componentes de classe por componentes funcionais e gerenciar estado via hooks e Context API;

2. Armazenar histórico de vídeos assistidos e de vídeos marcados para assistir mais tarde e acessar essas informações pela página de perfil de usuário;

3. Implementar função de login para armazenar informações de usuário no localStorage;

4. Implementar lista de vídeos na página inicial da aplicação;

5. Readequar testes às novas funcionalidades da aplicação e garantir cobertura de no mínimo **90%**;

### Itens Extras

1. Migrar css da aplicação para styled-components;

2. Implementar cache no navegador para reduzir consumo da API do Youtube;

---
