class LoginPage {

    // =========================
    // DATA
    // =========================

    validUsername() {
        return 'Admin';
    }

    validPassword() {
        return 'admin123';
    }

    invalidUsername() {
        return 'MasSandi';
    }

    invalidPassword() {
        return 'MasSandi';
    }

    lowercaseUsername() {
        return 'admin';
    }

    uppercasePassword() {
        return 'ADMIN123';
    }


    // =========================
    // INTERCEPT
    // =========================

    interceptLogin() {
        cy.intercept(
            'POST',
            '**/web/index.php/events/push'
        ).as('loginRequest');
    }


    // =========================
    // ACTION
    // =========================

    openLoginPage() {
        cy.visit(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );
    }

    inputUsername(username) {
        cy.get('input[name="username"]')
            .clear()
            .type(username);
    }

    inputPassword(password) {
        cy.get('input[name="password"]')
            .clear()
            .type(password);
    }

    clickLogin() {
        cy.get('button[type="submit"]')
            .contains('Login')
            .click();
    }

    login(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLogin();
    }

    pressEnter() {
        cy.get('input[name="password"]')
            .type('{enter}');
    }

    clickForgotPassword() {
        cy.contains('Forgot your password?')
            .click();
    }


    // =========================
    // ASSERTION
    // =========================

    verifyDashboard() {
        cy.url()
            .should('include', '/dashboard');

        cy.contains('Dashboard')
            .should('be.visible');
    }

    verifyInvalidCredentials() {
        cy.contains('Invalid credentials')
            .should('be.visible');
    }

    verifyUsernameRequired() {
        cy.get('.oxd-input-group')
            .eq(0)
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    }

    verifyPasswordRequired() {
        cy.get('.oxd-input-group')
            .eq(1)
            .find('.oxd-input-field-error-message')
            .should('contain.text', 'Required');
    }

    verifyBothRequired() {
        cy.get('.oxd-input-field-error-message')
            .should('have.length', 2);
    }

    verifyPasswordHidden() {
        cy.get('input[name="password"]')
            .should('have.attr', 'type', 'password');
    }

    verifyForgotPasswordPage() {
        cy.url()
            .should('include', '/requestPasswordResetCode');

        cy.contains('Reset Password')
            .should('be.visible');
    }
}

export default new LoginPage();