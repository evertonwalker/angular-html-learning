## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Aprendizados sobre o projeto

Tags auxiliares e suas explicações:

- <b>article</b>: Um artigo
- <b>main</b> : Conteúdo principal do site
- <b>nav</b> : Tag para links de navegação
- <b>aside</b> : Conteúdo que não está relacionado com o conteúdo principal do site
- <b>address</b> : Normalente usado para o endereço do conteúdo como o e-mail, etc..

# Seletores CSS

Seletores por classes e IDS

.minha-classe { } -> Aplica css em todos os estilos com esse valor na propriedade class
#meuID { } -> Aplica css apenas na propriedade que possuir a tag meuID como propriedade.

Seletores aninhados permitem você colocar estilos a partir de uma hierárquia por exemplo

div p { } -> Todos pagrafos que estão dentro de divs vão receber esse estilo.
div .minha-classe { } -> Você pode fazer isso com classe também, só os elementos que possuem essa classe dentro de divs receberam o estilo

# Pseudo classe

Condição que você aplica baseado em um evento do dom, ou em um filho, do dom, primeiro itens, etc.

a: hover -> Você aplica um efeito a partir de um evento que será executado no dom.
p: first-child -> Aplica um efeito no primeiro paragrafo filho, existe várias pseudos classes: last-child, nth-child(5) ( pega a posição 5)

# Pseudo elemento

Você altera o estado de um determinado grupo

p::first-letter { font-size: ...} -> Aqui estamos dizendo que toda letra de qualquer pagagráfo iniciará com esse tamanho.

# Seletor de atributo

input[type="submit"] { estilo...} -> Aqui você restringiu o css ao uma atributo ( propriedade ) de um determinado tipo de elemento
label[class*="label"] { } -> Procurando todos elementos label que possuem dentro da class o nome label,
é interessante entender que no seletor de atributos podemos usar algumas ancoras para referenciar coisas como:

- - -> Em toda string
- $ -> Que a string termine com o valor
- | ou ^ -> No ínicio da string
- ~ -> PRocura o valor desde que esteja separado por um espaço

Outro ponto é que seletor de atributos são mais lentos para processar do que os seletores normais.


# Box model

É interessante que você entenda que todo elemento no html é inserido como uma caixa e todos possuem as mesmas caracteristicas padrões: margin -> border ->  padding -> conteúdo e largura e altura dele.

Para saber o tamanho real de um elemento você sempre precisa somar o padding + border + largura ( width )

-  block: Quando é colocado no html, ele ocupa o documento inteiro - ou a linha toda desse local.
-  inline: Segue o fluxo de linha, como se fosse palavras uma do lado da outra.


BOX-SIZING: content-box -> O valor padrão desta propriedade é content-box, que considera os valores das propriedades ´border´ e ´padding´ para calcular o tamanho que o elemento ocupa na tela. Porém, ao definirmos ´box-sizing: border-box´, há alteração no cálculo padrão que conhecemos, fazendo com que o navegador passe a considerar a altura e largura do elemento contando o ´padding´ e o ´border´ do elemento.