describe('OrangeHRM - Login Feature', () => {

  //intercept saya lakukan di beforeeach pada setiap case

    beforeEach(() => {

        // Intercept GET pada halaman Login
        cy.intercept(
            'GET',
            '**/web/index.php/auth/login'
        ).as('getLoginPage');

        cy.visit(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        // Validasi GET request dan status code
        cy.wait('@getLoginPage')
            .its('response.statusCode')
            .should('eq', 200);
    });


    it('TC-LOGIN-001 - Login dengan kredensial valid', () => {

     //Note : Setiap case saya berlakukan intercept di before each diataas  

        cy.get('input[name="username"]')
            .type('Admin');

        cy.get('input[name="password"]')
            .type('admin123');

        cy.get('button[type="submit"]')
            .click();

        cy.url()
            .should('include', '/dashboard');

        cy.contains('Dashboard')
            .should('be.visible');

      //Note : Setiap case saya berlakukan intercept di before each diataas    
    });


    it('TC-LOGIN-002 - Login dengan username tidak valid', () => {

        cy.get('input[name="username"]')
            .type('MasSandi');

        cy.get('input[name="password"]')
            .type('admin123');

        cy.get('button[type="submit"]')
            .click();

        cy.contains('Invalid credentials')
            .should('be.visible');
    });


    it('TC-LOGIN-003 - Login dengan password tidak valid', () => {

        cy.get('input[name="username"]')
            .type('Admin');

        cy.get('input[name="password"]')
            .type('MasSandi');

        cy.get('button[type="submit"]')
            .click();

        cy.contains('Invalid credentials')
            .should('be.visible');
    });


    it('TC-LOGIN-004 - Login dengan username dan password tidak valid', () => {

        cy.get('input[name="username"]')
            .type('MasSandi');

        cy.get('input[name="password"]')
            .type('MasSandi');

        cy.get('button[type="submit"]')
            .click();

        cy.contains('Invalid credentials')
            .should('be.visible');
    });


    it('TC-LOGIN-005 - Login dengan username kosong', () => {

        cy.get('input[name="password"]')
            .type('admin123');

        cy.get('button[type="submit"]')
            .click();

        cy.get('input[name="username"]')
            .parents('.oxd-input-group')
            .contains('Required')
            .should('be.visible');
    });


    it('TC-LOGIN-006 - Login dengan password kosong', () => {

        cy.get('input[name="username"]')
            .type('Admin');

        cy.get('button[type="submit"]')
            .click();

        cy.get('input[name="password"]')
            .parents('.oxd-input-group')
            .contains('Required')
            .should('be.visible');
    });


    it('TC-LOGIN-007 - Login dengan kedua field kosong', () => {

        cy.get('button[type="submit"]')
            .click();

        cy.get('.oxd-input-group__message')
            .should('have.length', 2)
            .each(($error) => {
                expect($error.text()).to.equal('Required');
            });
    });


    it('TC-LOGIN-008 - Password ditampilkan sebagai karakter tersembunyi', () => {

        cy.get('input[name="password"]')
            .type('admin123');

        cy.get('input[name="password"]')
            .should('have.attr', 'type', 'password');
    });



    it('TC-LOGIN-009 - Password bersifat case-sensitive', () => {

        cy.get('input[name="username"]')
            .type('Admin');

        cy.get('input[name="password"]')
            .type('ADMIN123');

        cy.get('button[type="submit"]')
            .click();

        cy.contains('Invalid credentials')
            .should('be.visible');
    });


    it('TC-LOGIN-010 - Akses Forgot your password', () => {

        cy.contains('Forgot your password?')
            .click();

        cy.url()
            .should('include', '/requestPasswordResetCode');

        cy.get('input[name="username"]')
            .should('be.visible');

        cy.contains('Reset Password')
            .should('be.visible');
    });



    it('TC-LOGIN-011 - Login menggunakan tombol Enter', () => {

        cy.get('input[name="username"]')
            .type('Admin');

        cy.get('input[name="password"]')
            .type('admin123')
            .type('{enter}');

        cy.url()
            .should('include', '/dashboard');

        cy.contains('Dashboard')
            .should('be.visible');
    });

});
