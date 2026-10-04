class RecruitmentPage {

    // =========================
    // DATA
    // =========================

    candidateName() {
        return 'John Doe';
    }

    invalidCandidateName() {
        return 'Mas Sandi';
    }

    vacancyName() {
        return ' Sandi Software Engineer';
    }

    invalidVacancyName() {
        return 'Mas Sandi';
    }

    vacancyDescription() {
        return 'Software Engineer Vacancy';
    }

    jobTitle() {
    return 'Software Engineer';
    }

    candidateFirstName() {
        return 'Sandi';
    }

    candidateMiddleName() {
        return 'Muhammad';
    }

    candidateLastName() {
        return 'Sholahuddin';
    }

    candidateEmail() {
        return 'sandi@example.com';
    }

    hiringManager() {
        return 'Peter Mac Anderson';
    }

    newVacancyDescription() {
    return 'Updated description for Software Engineer';

    }


    // =========================
    // INTERCEPT
    // =========================

    interceptRecruitment() {
        cy.intercept(
            'GET',
            '**/web/index.php/api/v2/recruitment/candidates*'
        ).as('candidateRequest');
    }

    interceptVacancies() {
        cy.intercept(
            'GET',
            '**/web/index.php/api/v2/recruitment/vacancies*'
        ).as('vacancyRequest');
    }

    interceptCandidateDetail() {
        cy.intercept(
            'GET',
            '**/web/index.php/api/v2/recruitment/candidates/*'
        ).as('candidateDetailRequest');
    }


    // =========================
    // ACTION
    // =========================

    openRecruitment() {
        cy.contains('Recruitment').click();
    }

    openCandidates() {
        cy.contains('Candidates').click();
    }

    openVacancies() {
    cy.contains('Recruitment').click();
    cy.contains('Vacancies').click();

    cy.url().should('include', '/recruitment/viewJobVacancy');
}

    clickSearch() {
        cy.get('button[type="submit"]')
            .contains('Search')
            .click();
    }

    clickReset() {
        cy.get('button[type="reset"]')
            .contains('Reset')
            .click();
    }

    inputVacancyHiringManager() {
    cy.get('input[placeholder="Type for hints..."]')
        .clear()
        .type(this.hiringManager());

    cy.contains(this.hiringManager())
        .click();
    }   

    selectJobTitle() {
    cy.get('.oxd-select-text')
        .first()
        .click();

    cy.contains(this.jobTitle())
        .click();
}

clickEditVacancy() {
    cy.get('.oxd-table-row')
        .contains(this.vacancyName())
        .parents('.oxd-table-row')
        .find('button')
        .eq(1)
        .click();
}
    changeVacancyDescription() {
    cy.get('textarea')
        .clear()
        .type(this.newVacancyDescription());
    }

    // =========================
    // CANDIDATE ACTION
    // =========================

    inputCandidateName(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .clear()
            .type(name);
    }

    selectCandidateName(name) {
        cy.contains(name).click();
    }

    clickAddCandidate() {
        cy.contains('button', 'Add')
            .click();
    }

    inputCandidateFirstName() {
        cy.get('input[name="firstName"]')
            .clear()
            .type(this.candidateFirstName());
    }

    inputCandidateMiddleName() {
        cy.get('input[name="middleName"]')
            .clear()
            .type(this.candidateMiddleName());
    }

    inputCandidateLastName() {
        cy.get('input[name="lastName"]')
            .clear()
            .type(this.candidateLastName());
    }

    inputCandidateEmail() {
        cy.get('input[placeholder="Type here"]')
            .first()
            .clear()
            .type(this.candidateEmail());
    }


    clickSave() {
        cy.contains('button', 'Save')
            .click();
    }


    // =========================
    // VACANCY ACTION
    // =========================

    clickAddVacancy() {
    cy.get('button')
        .contains('Add')
        .click();

    cy.url().should('include', '/recruitment/addJobVacancy');
}

    clickDeleteVacancy() {
        cy.get('.oxd-table-row')
        .contains(this.vacancyName())
        .parents('.oxd-table-row')
        .find('button')
        .eq(0)
        .click();
    }

    confirmDelete() {
        cy.contains('button', 'Yes, Delete')
        .click();
    }

inputVacancyName() {
    cy.get('input')
        .eq(1)
        .clear()
        .type(this.vacancyName());
}

inputVacancyDescription() {
    cy.get('textarea')
        .clear()
        .type(this.vacancyDescription());
}

clickSave() {
    cy.contains('button', 'Save')
        .click();
}

    // =========================
    // ASSERTION
    // =========================

    verifyRecruitmentPage() {
        cy.url().should('include', '/recruitment');

        cy.contains('Recruitment')
            .should('be.visible');
    }

    verifyCandidatesPage() {
        cy.url().should('include', '/recruitment/viewCandidates');

        cy.contains('Candidates')
            .should('be.visible');
    }

    verifyVacanciesPage() {
        cy.url().should('include', '/recruitment/viewJobVacancy');

        cy.contains('Vacancies')
            .should('be.visible');
    }

    verifyCandidateList() {
        cy.get('.oxd-table-body')
            .should('be.visible');
    }

    verifyVacancyList() {
        cy.get('.oxd-table-body')
            .should('be.visible');
    }

    verifyCandidateFound() {
        cy.contains(this.candidateName())
            .should('be.visible');
    }

    verifyCandidateNotFound() {
        cy.contains('Invalid')
            .should('be.visible');
    }

    verifyVacancyFound() {
        cy.contains(this.vacancyName())
            .should('be.visible');
    }

    verifyVacancyNotFound() {
        cy.contains('No Records Found')
            .should('be.visible');
    }

    verifyAddVacancy() {
    cy.contains('Successfully Saved')
        .should('be.visible');
}

    verifyRequiredVacancyName() {
        cy.contains('Required')
            .should('be.visible');
    }

    verifyEditVacancy() {
        cy.get('textarea')
        .should('have.value', this.newVacancyDescription());
    }

    verifyDeleteVacancy() {
        cy.contains(this.vacancyName())
            .should('not.exist');
    }

    verifyAddCandidate() {
    cy.contains('Successfully Saved')
        .should('be.visible');
}

    verifyRequiredCandidate() {
        cy.contains('Required')
            .should('be.visible');
    }

    verifyDeleteVacancy() {
    cy.get('.oxd-table-row')
        .contains(this.vacancyName())
        .should('not.exist');
}
}

export default new RecruitmentPage();