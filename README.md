# Simulado — Teste e Manutenção de Software

Simulado interativo para a disciplina de **Teste e Manutenção de Software** (CEFET/RJ), cobrindo JUnit 5 e Katalon. Questões de múltipla escolha, verdadeiro/falso e escrita de código, baseadas nos materiais e provas do curso.

## Como usar

Abra o arquivo [index.html](index.html) em qualquer navegador. Não há dependências nem build — é um site estático.

## Estrutura do projeto

```
.
├── index.html          # Marcação da página (home, quiz, resultados)
├── css/
│   └── style.css       # Estilos e tema
└── js/
    ├── data/
    │   ├── topics.js   # TOPIC_META — resumos dos tópicos
    │   └── bank.js     # BANK — banco de questões
    └── app.js          # Engine: render, correção e resultados
```

A separação segue uma lógica de **dados vs. lógica**: os arquivos em `js/data/` contêm apenas o conteúdo das questões, enquanto `js/app.js` concentra o motor do simulado. Os scripts de dados são carregados antes do `app.js` em [index.html](index.html).

## Tópicos cobertos

Fundamentos de testes automatizados, anotações JUnit (ciclo de vida), asserções, `@Timeout`, testes parametrizados, suítes de testes, análise de código e Katalon.
