describe('Formulario de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Fernando Papito') // caso nao tenha id pode fazer assim : cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
        cy.get('#email').type('papito@teste.com.br')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99999-9999')
            .should('have.value', '(11) 99999-9999') // para validar se o campo foi preenchido corretamente

        cy.get('#consultancyType').select('Individual')
        // caso nao tenha o id poderia ser assim : cy.contains('label','Tipo de Consultoria').parent().find('select).select('Individual)

        cy.contains('label', 'Pessoa Física').find('input').check().should('be.checked')

        cy.contains('label', 'Pessoa Jurídica').find('input').should('not.be.checked')

        cy.contains('label', 'CPF').parent().find('input').type('64418529004').should('have.value', '644.185.290-04')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })


        // anexar o arquivo
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/Document.pdf', { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


        const techs = [
            'Cypress',
            'Robot',
            'Selenium',
            'Playwright'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]').type(`${tech}{enter}`)

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')

        })

        cy.contains('label','termos de uso')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('button','Enviar formulário').click()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.').should('be.visible')




    })


})

