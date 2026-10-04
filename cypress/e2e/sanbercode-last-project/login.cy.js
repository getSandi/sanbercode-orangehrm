import LoginPage from './pages/LoginPage';

describe('OrangeHRM - Login Feature', () => {

    beforeEach(() => {
        LoginPage.openLoginPage();
    });

    // ==========================================
    // Note: Intercept ditaruh pada halaman pages
    // ==========================================

    it('TC-LOGIN-001 - Login dengan kredensial valid', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.validUsername(),
            LoginPage.validPassword()
        );

        LoginPage.verifyDashboard();
    });

    it('TC-LOGIN-002 - Login dengan username tidak valid', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.invalidUsername(),
            LoginPage.validPassword()
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-003 - Login dengan password tidak valid', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.validUsername(),
            LoginPage.invalidPassword()
        );

        LoginPage.verifyInvalidCredentials();
    });

    // ==========================================
    // Note: Intercept ditaruh pada halaman pages
    // ==========================================

    it('TC-LOGIN-004 - Login dengan username dan password tidak valid', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.invalidUsername(),
            LoginPage.invalidPassword()
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-005 - Login tanpa username', () => {

        LoginPage.inputPassword(
            LoginPage.validPassword()
        );

        LoginPage.clickLogin();

        LoginPage.verifyUsernameRequired();
    });


    it('TC-LOGIN-006 - Login tanpa password', () => {

        LoginPage.inputUsername(
            LoginPage.validUsername()
        );

        LoginPage.clickLogin();

        LoginPage.verifyPasswordRequired();
    });


    it('TC-LOGIN-007 - Login tanpa username dan password', () => {

        LoginPage.clickLogin();

        LoginPage.verifyBothRequired();
    });


    it('TC-LOGIN-008 - Password ditampilkan dalam bentuk tersembunyi', () => {

        LoginPage.verifyPasswordHidden();
    });


    it('TC-LOGIN-009 - Login dengan username huruf kecil', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.lowercaseUsername(),
            LoginPage.validPassword()
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-010 - Login dengan password huruf kapital', () => {

        LoginPage.interceptLogin();

        LoginPage.login(
            LoginPage.validUsername(),
            LoginPage.uppercasePassword()
        );

        LoginPage.verifyInvalidCredentials();
    });


    it('TC-LOGIN-011 - Membuka halaman Forgot Password', () => {

        LoginPage.clickForgotPassword();

        LoginPage.verifyForgotPasswordPage();
    });



    it('TC-LOGIN-012 - Login menggunakan tombol Enter', () => {

        LoginPage.interceptLogin();

        LoginPage.inputUsername(
            LoginPage.validUsername()
        );

        LoginPage.inputPassword(
            LoginPage.validPassword()
        );

        LoginPage.pressEnter();

        LoginPage.verifyDashboard();
    });

});