# language: pt 
# enconding: UTF-8

Funcionalidade: Consumo de conteudo 

Contexto: Dado um usuário com acesso ao site da plataforma que deseja acessar e assistir um conteúdo.

Cenario 1: Usuário encontra conteúdo.
Dado que eu tenha dados válidos de login
E o conteúdo que procuro esteja disponível na plataforma   
Quando eu acessar a tela de login
E preencher os campos de email e senha com dados válidos
E clicar no botão entrar
E clicar em um perfil
E clicar no icone de lupa
E buscar procurar por 'Megamente'
Então deve ser exibido o resultado com o conteudo buscado

Cenario 2: Usuário acessa conteúdo encontrado.
Dado que eu esteja na tela de resultado com retorno positivo  
Quando eu clicar no botão Assitir em um resultado exibido
E clicar no botão Assitir no detalhamento do conteudo
Então deve ser exibido o conteúdo em tela cheia


