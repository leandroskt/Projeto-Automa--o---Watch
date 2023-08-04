# language: pt 
# enconding: UTF-8

Funcionalidade: Login na plataforma  

Contexto: Dado um usuário com acesso ao site da plataforma     


Cenario 1: Login com sucesso     

Dado que eu tenha dados válidos de login    
Quando eu acessar a tela de login
E preencher os campos de email e senha com dados válidos
E clicar no botão entrar
Então eu devo ser encaminhado para tela de seleção de perfil


Cenário 2: Senha Incorreta     

Dado que eu tenha um email válido de login    
Quando eu acessar a tela de login
E preencher o campo de email com email válido
E preencher o campo de senha com senha incorreta
E clicar no botão entrar
Então o sitema deve exibir uma mensagem de Email ou senha incorreta


Cenário 3: Email Inválido     

Dado que eu tenha um email inválido de login    
Quando eu acessar a tela de login
E preencher o campo de email com email inválido
E preencher o campo de senha
E clicar no botão entrar
Então o sitema deve exibir uma mensagem de Email é invalido


Cenário 4: Email em branco     

Dado que eu acessei a tela de login
Quando eu preencher apenas o campo de senha
Então o botão Entrar deve permanecer como 'disabled'


Cenário 5: Senha em branco     

Dado que eu acessei a tela de login
Quando eu preencher apenas o campo de email
Então o botão Entrar deve permanecer como 'disabled'


Cenário 6: Logout da plataforma

Dado que eu esteja logado na plataforma
Quando eu clicar no icone do meu perfil no canto superior direito da tela
E clicar em Sair
Então a plataforma derruba a sessão do usuário
E não possuo mais permissão para acessar demais telas de conteudo
