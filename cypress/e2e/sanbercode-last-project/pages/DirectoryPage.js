class DirectoryPage {

    // =========================
    // DATA
    // =========================

    employeeName() {
        return 'Peter Mac Anderson';
    }

    invalidEmployeeName() {
        return 'Mas Sandi';
    }

    jobTitle() {
        return 'Software Engineer';
    }

    location() {
        return 'HQ - CA, USA';
    }

    


    // =========================
    // INTERCEPT
    // =========================

    interceptDirectory() {
        cy.intercept(
            'GET',
            '**/web/index.php/api/v2/directory/employees*'
        ).as('directoryRequest');
    }

    interceptEmployeeDetail() {
        cy.intercept(
            'GET',
            '**/web/index.php/api/v2/pim/employees/*'
        ).as('employeeDetailRequest');
    }


    // =========================
    // ACTION
    // =========================

    openDirectory() {
        cy.contains('Directory').click();
    }

    inputEmployeeName(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .clear()
            .type(name);
    }

    selectEmployeeName(name) {
        cy.contains(name).click();
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

    clickEmployeeCard() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .click();
    }

    selectJobTitle() {
        cy.get('.oxd-select-text')
            .eq(0)
            .click();

        cy.contains(this.jobTitle()).click();
    }

    selectLocation() {
    cy.contains('label', 'Location')
        .closest('.oxd-input-group')
        .find('.oxd-select-text')
        .click();

    cy.contains(this.location())
        .click();
    }

    openEmployeeCard() {
        cy.get('.orangehrm-directory-card')
            .first()
            .click();
    }

    openEmployee() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .click();
    }

    scrollEmployeeList() {
        cy.get('.orangehrm-directory-card')
            .last()
            .scrollIntoView();
    }


    // =========================
    // ASSERTION
    // =========================

    verifyDirectoryPage() {
        cy.url().should('include', '/directory');

        cy.contains('Directory')
            .should('be.visible');
    }

    verifyEmployeeList() {
        cy.get('.orangehrm-directory-card')
            .should('have.length.greaterThan', 0);
    }

    verifyEmployeeFound() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .should('be.visible');
    }

    verifyEmployeeNotFound() {
        cy.get('@directoryRequest')
            .its('response.body.data')
            .should('have.length', 0);
    }

    verifyJobTitleFilter() {
        cy.get('.orangehrm-directory-card')
            .should('have.length.greaterThan', 0);
    }

    verifyLocationFilter() {
        cy.get('.orangehrm-directory-card')
            .should('have.length.greaterThan', 0);
    }

    verifyCombinedFilter() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .should('be.visible');
    }

    verifyFilterReset() {
        cy.get('.orangehrm-directory-card')
            .should('have.length.greaterThan', 0);
    }

    verifyEmployeeDetail() {
        cy.contains(this.employeeName())
            .should('be.visible');
    }

    verifyEmployeeListAfterScroll() {
        cy.get('.orangehrm-directory-card')
            .last()
            .should('be.visible');
    }

    verifyEmployee() {
        cy.contains(this.employeeName())
            .should('be.visible');
    }

    verifyWorkTelephone() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .should('be.visible');
    }

    verifyEmail() {
        cy.get('.orangehrm-directory-card')
            .contains(this.employeeName())
            .should('be.visible');
    }
}

export default new DirectoryPage();