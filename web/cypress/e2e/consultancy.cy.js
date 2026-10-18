describe('Formulario de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários','Consultoria')

        cy.get('#name').type('Fernando Papito') // caso nao tenha id pode fazer assim : cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
        cy.get('#email').type('papito@teste.com.br') 
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99999-9999')
            .should('have.value', '(11) 99999-9999') // para validar se o campo foi preenchido corretamente
        


    })


})

