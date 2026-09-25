import LoginPage from './pages/LoginPage';

describe('OrangeHRM - Login Feature', () => {

    beforeEach(() => {
        LoginPage.visit();
    });


    it('TC-LOGIN-001 - Login dengan kredensial valid', () => {

        LoginPage.login(
            LoginPage.validUsername,
            LoginPage.validPassword
        );

        LoginPage.verifyDashboard();
    });


    it('TC-LOGIN-002 - Login dengan username tidak valid', () => {

        LoginPage.login(
            LoginPage.invalidUsername,
            LoginPage.validPassword
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-003 - Login dengan password tidak valid', () => {

        LoginPage.login(
            LoginPage.validUsername,
            LoginPage.invalidPassword
        );

        LoginPage.verifyInvalidCredentials();
    });

    it('TC-LOGIN-004 - Login dengan username dan password tidak valid', () => {

        LoginPage.login(
            LoginPage.invalidUsername,
            LoginPage.invalidPassword
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-005 - Login dengan username kosong', () => {

        LoginPage.enterPassword(
            LoginPage.validPassword
        );

        LoginPage.clickLogin();

        LoginPage.verifyUsernameRequired();
    });


    it('TC-LOGIN-006 - Login dengan password kosong', () => {

        LoginPage.enterUsername(
            LoginPage.validUsername
        );

        LoginPage.clickLogin();

        LoginPage.verifyPasswordRequired();
    });


    it('TC-LOGIN-007 - Login dengan kedua field kosong', () => {

        LoginPage.clickLogin();

        LoginPage.verifyBothFieldsRequired();
    });


    it('TC-LOGIN-008 - Password ditampilkan sebagai karakter tersembunyi', () => {

        LoginPage.enterPassword(
            LoginPage.validPassword
        );

        LoginPage.verifyPasswordIsHidden();
    });

    it('TC-LOGIN-009 - Password bersifat case-sensitive', () => {

        LoginPage.login(
            LoginPage.validUsername,
            LoginPage.uppercasePassword
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-010 - Akses Forgot your password', () => {

        LoginPage.clickForgotPassword();

        LoginPage.verifyForgotPasswordPage();
    });


    it('TC-LOGIN-011- Login menggunakan tombol Enter', () => {

        LoginPage.loginWithEnter(
            LoginPage.validUsername,
            LoginPage.validPassword
        );

        LoginPage.verifyDashboard();
    });

});