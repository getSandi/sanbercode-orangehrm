import LoginPage from './pages/LoginPage';
import DirectoryPage from './pages/DirectoryPage';

// ==========================================
// Note: Intercept ditaruh pada halaman pages
// ==========================================

describe('OrangeHRM - Directory Feature', () => {

    beforeEach(() => {

        LoginPage.openLoginPage();

        LoginPage.login(
            LoginPage.validUsername(),
            LoginPage.validPassword()
        );

        LoginPage.verifyDashboard();

        DirectoryPage.interceptDirectory();

        DirectoryPage.openDirectory();

        DirectoryPage.verifyDirectoryPage();
    });

    // ==========================================
    // Note: Intercept ditaruh pada halaman pages
    // ==========================================           

    it('TC-DIR-001 - Membuka menu Directory', () => {

        DirectoryPage.verifyDirectoryPage();
    });


    it('TC-DIR-002 - Menampilkan daftar employee', () => {

        DirectoryPage.verifyEmployeeList();
    });


    it('TC-DIR-003 - Mencari employee berdasarkan nama', () => {

        DirectoryPage.inputEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.selectEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.clickSearch();

        DirectoryPage.verifyEmployeeFound();
    });


    it('TC-DIR-004 - Pencarian nama yang tidak ditemukan', () => {

        DirectoryPage.inputEmployeeName(
            DirectoryPage.invalidEmployeeName()
        );

        DirectoryPage.clickSearch();

        DirectoryPage.verifyEmployeeNotFound();
    });


    it('TC-DIR-005 - Filter berdasarkan Job Title', () => {

        DirectoryPage.selectJobTitle();

        DirectoryPage.clickSearch();

        DirectoryPage.verifyJobTitleFilter();
    });


    it('TC-DIR-006 - Filter berdasarkan Location', () => {

        DirectoryPage.selectLocation();

        DirectoryPage.clickSearch();

        DirectoryPage.verifyLocationFilter();
    });

  
    it('TC-DIR-007 - Kombinasi filter Directory', () => {

        DirectoryPage.inputEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.selectEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.selectJobTitle();

        DirectoryPage.clickSearch();

        DirectoryPage.verifyCombinedFilter();
    });


    it('TC-DIR-008 - Reset filter Directory', () => {

        DirectoryPage.inputEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.selectEmployeeName(
            DirectoryPage.employeeName()
        );

        DirectoryPage.clickSearch();

        DirectoryPage.clickReset();

        DirectoryPage.verifyFilterReset();
    });


    it('TC-DIR-009 - Melihat detail employee', () => {


        DirectoryPage.clickEmployeeCard();

        DirectoryPage.verifyEmployeeDetail();
    });


     it('TC-DIR-010 - Scroll daftar employee Directory', () => {

            DirectoryPage.scrollEmployeeList();

            DirectoryPage.verifyEmployeeListAfterScroll();
        });    


    it('TC-DIR-011 - Melihat detail Peter Mac Anderson', () => {

    DirectoryPage.openEmployee();

    DirectoryPage.verifyEmployee();
    });


    it('TC-DIR-012 - Melihat email Peter Mac Anderson', () => {

        DirectoryPage.openEmployee();

        DirectoryPage.verifyEmail();

    });
});

