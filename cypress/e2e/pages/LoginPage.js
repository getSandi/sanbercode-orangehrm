class LoginPage {

    url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';


    // =========================
    // Test Data
    // =========================
    validUsername = 'Admin';
    validPassword = 'admin123';

    invalidUsername = 'MasSandi';
    invalidPassword = 'MasSandi';

    uppercasePassword = 'ADMIN123';


    // =========================
    // Locator
    // =========================
    usernameInput() {
        return cy.get('input[name="username"]');
    }

    passwordInput() {
        return cy.get('input[name="password"]');
    }

    loginButton() {
        return cy.get('button[type="submit"]');
    }

    requiredMessage() {
        return cy.get('.oxd-input-group__message');
    }

    invalidCredentialsMessage() {
        return cy.contains('Invalid credentials');
    }

    forgotPasswordLink() {
        return cy.contains('Forgot your password?');
    }

    dashboardText() {
        return cy.contains('Dashboard');
    }

    resetPasswordText() {
        return cy.contains('Reset Password');
    }


    // =========================
    // Action
    // =========================
    visit() {
        cy.visit(this.url);
    }

    enterUsername(username) {
        this.usernameInput().type(username);
    }

    enterPassword(password) {
        this.passwordInput().type(password);
    }

    clickLogin() {
        this.loginButton().click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    loginWithEnter(username, password) {
        this.enterUsername(username);

        this.passwordInput()
            .type(password)
            .type('{enter}');
    }

    clickForgotPassword() {
        this.forgotPasswordLink().click();
    }


    // =========================
    // Assertion
    // =========================
    verifyDashboard() {
        cy.url()
            .should('include', '/dashboard');

        this.dashboardText()
            .should('be.visible');
    }

    verifyInvalidCredentials() {
        this.invalidCredentialsMessage()
            .should('be.visible');
    }

    verifyUsernameRequired() {
        this.usernameInput()
            .parents('.oxd-input-group')
            .contains('Required')
            .should('be.visible');
    }

    verifyPasswordRequired() {
        this.passwordInput()
            .parents('.oxd-input-group')
            .contains('Required')
            .should('be.visible');
    }

    verifyBothFieldsRequired() {
        this.requiredMessage()
            .should('have.length', 2)
            .each(($error) => {
                expect($error.text()).to.equal('Required');
            });
    }

    verifyPasswordIsHidden() {
        this.passwordInput()
            .should('have.attr', 'type', 'password');
    }

    verifyForgotPasswordPage() {
        cy.url()
            .should('include', '/requestPasswordResetCode');

        this.usernameInput()
            .should('be.visible');

        this.resetPasswordText()
            .should('be.visible');
    }
}

export default new LoginPage();