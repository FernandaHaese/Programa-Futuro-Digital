/*

O JS dentro do seus documentos HTML não roda "normalmente", pois o navegador roda o JS em um ambiente host, permitindo acessas informações e funcionalidade do seu navegador - como objetos document, window e localStorage.
    -> O window é o objeto global dos browsers, e contém a maioria das funcionalidades mais usadas, como document, history e localStory, através de .location, .navigator e .screen

Documento Object Model (DOM) é um mapa que permite o browser a correlacionar elementos do documento HTML em objetos js. São estrutrados em árvore como nós pais e nós filhos. Ele é "live", ou seja, se o HTML muda, o DOM também muda.

Para selecionar os elementos, temos diversos métodos: 
    -> Acessos diretos (.head, .body, .title)
    -> Por ID (.getElementById)
    -> Por tag (getElementsByTagName)
    -> Por classe (.getElementByClassName)
    -> Por seletor (.querySelector e .querySelectorAll)

E para modificar o conteúdo de um elemento HTML, podemos usar:
    -> propriedade .innerHTML
    -> .textContent X .innerText
    -> .style.property
    -> .class.Name X .classList
    -> .id, .src, .href, .onClick
    -> .setAttribute(name, value)
    -> .getAttrinute(name)

E para modificar a própria estrura do DOM, usamos:
    -> document.create(tag) para criar um elemento
    -> document.createTextNode(text) para criar um texto
    -> document.appendChild(element) para posicionar um elemento
    -> element.remove() para remover um elemento

*/
