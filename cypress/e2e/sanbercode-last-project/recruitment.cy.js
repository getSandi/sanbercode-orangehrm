import LoginPage from './pages/LoginPage';
import RecruitmentPage from './pages/RecruitmentPage';

// ==========================================
// Note: Intercept ditaruh pada halaman pages
// ==========================================

describe('OrangeHRM - Recruitment Feature', () => {

    beforeEach(() => {
        LoginPage.openLoginPage();

        LoginPage.login(
            LoginPage.validUsername(),
            LoginPage.validPassword()
        );

        LoginPage.verifyDashboard();

        RecruitmentPage.interceptRecruitment();
        RecruitmentPage.openRecruitment();

        RecruitmentPage.verifyRecruitmentPage();
    });

// ==========================================
// Note: Intercept ditaruh pada halaman pages
// ==========================================
   
    it('TC-REC-001 - Membuka menu Recruitment', () => {
        RecruitmentPage.verifyRecruitmentPage();
    });


    it('TC-REC-002 - Membuka menu Candidates', () => {
        RecruitmentPage.openCandidates();

        RecruitmentPage.verifyCandidatesPage();
    });



    it('TC-REC-003 - Membuka menu Vacancies', () => {
        RecruitmentPage.openVacancies();

        RecruitmentPage.verifyVacanciesPage();
    });


   
    it('TC-REC-004 - Mencari candidate berdasarkan nama', () => {
        RecruitmentPage.openCandidates();

        RecruitmentPage.inputCandidateName(
            RecruitmentPage.candidateName()
        );

        RecruitmentPage.selectCandidateName(
            RecruitmentPage.candidateName()
        );

        RecruitmentPage.clickSearch();

        RecruitmentPage.verifyCandidateFound();
    });


    it('TC-REC-005 - Pencarian candidate tidak ditemukan', () => {
        RecruitmentPage.openCandidates();

        RecruitmentPage.inputCandidateName(
            RecruitmentPage.invalidCandidateName()
        );

        RecruitmentPage.clickSearch();

        RecruitmentPage.verifyCandidateNotFound();
    });


    it('TC-REC-006 - Mencari vacancy berdasarkan nama', () => {
        RecruitmentPage.openVacancies();

        RecruitmentPage.verifyVacanciesPage();

        RecruitmentPage.verifyVacancyList();
    });


    it('TC-REC-007 - Menambahkan vacancy baru', () => {

    RecruitmentPage.openVacancies();

    RecruitmentPage.clickAddVacancy();

    RecruitmentPage.inputVacancyName();

    RecruitmentPage.selectJobTitle();

    RecruitmentPage.inputVacancyHiringManager();

    RecruitmentPage.inputVacancyDescription();

    RecruitmentPage.clickSave();

    RecruitmentPage.verifyAddVacancy();
    });


    it('TC-REC-008 - Menambahkan vacancy tanpa nama', () => {
        RecruitmentPage.openVacancies();

        RecruitmentPage.clickAddVacancy();

        RecruitmentPage.clickSave();

        RecruitmentPage.verifyRequiredVacancyName();
    });


    it('TC-REC-009 - Mengedit vacancy', () => {
        RecruitmentPage.openVacancies();

        RecruitmentPage.clickEditVacancy();

        RecruitmentPage.changeVacancyDescription();

        RecruitmentPage.clickSave();

        RecruitmentPage.verifyEditVacancy();
    });


    it('TC-REC-010 - Menghapus vacancy', () => {
        RecruitmentPage.openVacancies();

        RecruitmentPage.clickDeleteVacancy();

        RecruitmentPage.confirmDelete();

        RecruitmentPage.verifyDeleteVacancy();
    });


    it('TC-REC-011 - Menambahkan candidate baru', () => {
        RecruitmentPage.openCandidates();

        RecruitmentPage.clickAddCandidate();

        RecruitmentPage.inputCandidateFirstName();

        RecruitmentPage.inputCandidateMiddleName();

        RecruitmentPage.inputCandidateLastName();

        RecruitmentPage.inputCandidateEmail();

        RecruitmentPage.clickSave();

        RecruitmentPage.verifyAddCandidate();
    });


    it('TC-REC-012 - Menambahkan candidate tanpa data wajib', () => {
        RecruitmentPage.openCandidates();

        RecruitmentPage.clickAddCandidate();

        RecruitmentPage.clickSave();

        RecruitmentPage.verifyRequiredCandidate();
    });

});