Projeto FrontEnd - API REST - Angular CLI - Sistema de avisos (Notices)

Implementação de um FrontEnd capaz de consumir a API e viabilizar operações necessárias para codificação do sistema CRUD (create, read, update, delete) de avisos.

Arquivos chave do repositório:

Packages do Programa: component de cada função do Front, model do aviso, service 
NoticesFrontEnd/notices/src/app/

Passo A Passo para utilização do FrontEnd:

No canto superior da tela numa barra azul está situado o menu com as funcionalidades disponíveis ao usuário.

List: ao clicar nesse link o usuário é levado a uma lista com o id e títulos de todos os avisos presentes no banco de dados, ao lado do título existe um ícone de mensagem ![alt text](
https://github.com/jaugustomachado/NoticesFrontEnd/blob/master/notices/src/assets/updateicon.png) clicando nele o usuário é levado a outra página onde deve entrar com o id do aviso (obtido na pagina List) e clicar em Details. Todas as Informações do aviso são disponibilizadas, e se caso for a primeira vez de abertura dos destalhes do aviso em questão, a data de vizualização tem o seu set.

Search: nesse Link do menu o usuário deve passar o título do aviso (pode ser apenas uma parte do título, para uma busca de avisos do mesmo assunto) e logo após clicar em Search, onde será disponibizado uma lista com id e título do aviso pesquisado, o ícone ao lado do aviso também segue a mesma lógica citada acima.

Save: o usuário deve apenas inserir título e descrição para adicionar mais um aviso ao banco de dados (a data de criação do aviso tem seu set automaticamente). O botão de Cancel retorna para a lista de todos os avisos no Banco.

Delete: o usuário deve inserir o id e clicar no botão Delete, para deletar o aviso correspondente.

Update: o usuário deve informar o id do aviso que deseja atualizar, bem como os novos dados de título e descrição e após clicar em Update. O botão de Cancel retorna para a lista de todos os avisos no Banco.


