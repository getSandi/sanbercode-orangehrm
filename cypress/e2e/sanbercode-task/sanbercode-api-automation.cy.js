describe('Platzi Fake Store API - Categories', () => {

    const baseUrl = 'https://api.escuelajs.co/api/v1';
    let categoryId;


    it('TC-API-001 - Get all categories', () => {

        cy.request('GET', `${baseUrl}/categories`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.be.an('array');

                expect(response.body[0])
                    .to.have.property('id');
            });
    });


    it('TC-API-002 - Get category dengan ID 1', () => {

        cy.request('GET', `${baseUrl}/categories/1`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('id', 1);

                expect(response.body)
                    .to.have.property('name');
            });
    });


    it('TC-API-003 - Get category dengan ID 2', () => {

        cy.request('GET', `${baseUrl}/categories/2`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('id', 2);

                expect(response.body)
                    .to.have.property('name');
            });
    });


    it('TC-API-004 - Get category dengan ID 3', () => {

        cy.request('GET', `${baseUrl}/categories/3`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('id', 3);

                expect(response.body)
                    .to.have.property('name');
            });
    });


    it('TC-API-005 - Get category dengan ID 4', () => {

        cy.request('GET', `${baseUrl}/categories/4`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('id', 4);

                expect(response.body)
                    .to.have.property('name');
            });
    });


    it('TC-API-006 - Get category dengan ID 5', () => {

        cy.request('GET', `${baseUrl}/categories/5`)
            .then((response) => {

                expect(response.status).to.eq(200);

                expect(response.body)
                    .to.have.property('id', 5);

                expect(response.body)
                    .to.have.property('name');
            });
    });


    it('TC-API-007 - Get category dengan ID tidak ditemukan', () => {

        cy.request({
            method: 'GET',
            url: `${baseUrl}/categories/99999`,
            failOnStatusCode: false
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([404, 400]);

                expect(response.body)
                    .to.exist;
            });
    });


    it('TC-API-008 - Create category', () => {

        const categoryData = {
            name: 'Sanbercode Category',
            image: 'https://placehold.co/600x400'
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/categories`,
            body: categoryData
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([200, 201]);

                expect(response.body)
                    .to.have.property('name', categoryData.name);

                expect(response.body)
                    .to.have.property('id');

                categoryId = response.body.id;
            });
    });

    it('TC-API-009 - Create category kedua', () => {

        const categoryData = {
            name: 'Automation Category',
            image: 'https://placehold.co/600x400'
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/categories`,
            body: categoryData
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([200, 201]);

                expect(response.body)
                    .to.have.property('name', categoryData.name);

                expect(response.body)
                    .to.have.property('id');
            });
    });


    it('TC-API-010 - Update category', () => {

        const updateData = {
            name: 'Updated Sanbercode Category'
        };

        cy.request({
            method: 'PUT',
            url: `${baseUrl}/categories/${categoryId}`,
            body: updateData
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([200, 201]);

                expect(response.body)
                    .to.have.property(
                        'name',
                        updateData.name
                    );

                expect(response.body)
                    .to.have.property(
                        'id',
                        categoryId
                    );
            });
    });


    it('TC-API-011 - Delete category', () => {

        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/categories/${categoryId}`
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([200, 204]);

                if (response.status === 200) {
                    expect(response.body)
                        .to.exist;
                }
            });
    });


    it('TC-API-012 - Verify category setelah delete', () => {

        cy.request({
            method: 'GET',
            url: `${baseUrl}/categories/${categoryId}`,
            failOnStatusCode: false
        })
            .then((response) => {

                expect(response.status)
                    .to.be.oneOf([404, 400]);

                expect(response.body)
                    .to.exist;
            });
    });

});
