# Parte I - Criar uma página para uma tela pequena

Antes de começar, copie o template _HTML_ e _CSS_ abaixo, e salve em seus respectivos arquivos:

`exercise1.html`

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Media Query Exercise 1</title>
      <link rel="stylesheet" href="exercise1.css" />
    </head>
      <body>
        <header>
          <h1>Media Query Demo</h1>
        </header>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.
          </p>
        </article>
        <main>
          <h2>Box Columns</h2>
          <section>
            <figure>
              <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
            <figure>
              <img src="http://placekitten.com/452/450?image=16" alt="Placeholder kitteh">
              <figcaption>Place Kittens are great</figcaption>
            </figure>
          </section>
        </main>
      </body>
    </html>

`exercise1.css`

    /*
     * @see http://www.paulirish.com/2012/box-sizing-border-box-ftw/
     * apply a natural box layout model to all elements, but allowing components to change
     */
     html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    body {
    
    }
    
    article {
    
    }
    
    h1 {
    
    }
    
    h2 {
    
    }
    
    img {
    	max-width: 100%;
    }
    
    main {
    
    }
    
    section {
    
    }
    
    figure {
    	margin: 0;
    }
    
    figcaption {
      font-size: .8em;
    }

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o _Chrome_ para isso, veja no detalhe nos **Recursos adicionais**).

Ao pensar no _design_ de uma tela pequena primeiro, estamos aplicando a abordagem do **mobile first**. Fazendo isso, começamos com um _design_ básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.

Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.

**Dica:** no _Chrome_ você pode facilmente encontrar qual o tamanho da sua tela usando o "Inspecionar elemento". Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensões de largura e altura irão aparecer conforme você redimensiona a tela.

*   Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o _design_ atual da página não funciona mais. Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido, ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.

* * *

Agora você vai ajustar o _CSS_ para melhorar a visualização da página.

**Realize as seguintes tarefas:**

**1 -** Faça o tamanho da fonte ser maior;

**2 -** Faça o tamanho da fonte dos elementos `h1` ser menor;

**3 -** Aumente o espaçamento entre as figuras;

**4 -** Adicione um pouco de margin na página.

**5 -** Guarde a largura da tela no ponto que você identificou que o _layout_ atual não funcionou bem _(por exemplo 800px)_. Esse será o primeiro _breakpoint_ do _layout_. Um _breakpoint_ é apenas um ponto onde estamos definindo que o _design_ atual deve mudar;

**6 -** Crie uma _media query_ no seu arquivo _CSS_, usando a dimensão em _pixels_ que você guardou como o `min-width` do teste da _media query_. Dentro desse _breakpoint_, adicione os seguintes ajustes:

*   Altere a cor de fundo _(isso vai te ajudar a perceber quando a media query teve efeito)_;
    
*   Ajuste o tamanho da fonte;
    
*   Ajuste as margens da página;
    
*   Faça as imagens serem mostradas em duas colunas.
    

**7 -** Agora, você vai criar outro _breakpoint_ para telas grandes. Redimensione sua tela de novo para encontrar um novo _breakpoint_.

**8 -** Crie uma nova _media query_ no seu arquivo _CSS_ usando a dimensão que você encontrou para telas grandes _(por exemplo 1300px)_, e realize os seguintes ajustes dentro do _breakpoint_:

*   Altere a cor de fundo;
    
*   Ajuste o tamanho da fonte;
    
*   Ajuste as margens da página;
    
*   Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.