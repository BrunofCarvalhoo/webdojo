/*
describe('template spec', () => {  // describe deve agrupar os testes , it definir um caso de teste
  it('passes', () => {
    cy.viewport(1920,1080) // para visualizar a tela do navegador no cypress
    cy.visit('http://localhost:3000')
  })
}) 
*/

describe('login', () => {
  it('Deve realizar login com sucesso', () => {

    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]').should('be.visible').and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]').should('be.visible').and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')


  })

   it('Nao deve logar com senha invalida', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katanaerrada')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')


  })

  it('Nao deve logar com email invalido', () => {
    cy.iniciar()
    cy.submeterLogin('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')


  })

})