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
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.get('[data-cy="user-name"]').should('be.visible').and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]').should('be.visible').and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')


  })

})