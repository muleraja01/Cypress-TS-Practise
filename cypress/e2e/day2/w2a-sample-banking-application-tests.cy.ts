import 'cypress-xpath'
import '@faker-js/faker'
import { faker } from '@faker-js/faker'

describe('cypress test in Sample Banking application on w2a',()=>{
    it('Create and verify customer sccount',()=>{
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.contains('Bank Manager Login').click();
        cy.contains('Customers').click();
        cy.wait(2000)
        cy.xpath('//button[.="Delete"]').each(($el)=>{
            $el.click()
        })
        cy.wait(2000)
        cy.contains('Add Customer').click();
        const firstName=faker.name.firstName();
        const lastName=faker.name.lastName();
        const zipCode=faker.address.zipCode();

        cy.xpath("//input[@ng-model='fName']").type(firstName)
        cy.xpath("//input[@ng-model='lName']").type(lastName)
        cy.xpath("//input[@ng-model='postCd']").type(zipCode)
        cy.xpath("//button[text()='Add Customer']").click()

        const custFullName=firstName+" "+lastName
        cy.contains('Open Account').click();
        cy.get('#userSelect').select(custFullName);
        cy.get('#currency').select('Rupee');
        cy.xpath("//button[text()='Process']").click()

        //generate Customer account number with currency as Dollar

        cy.contains('Open Account').click();
        cy.get('#userSelect').select(custFullName);
        cy.get('#currency').select('Dollar');
        cy.xpath("//button[text()='Process']").click()

        //generate Customer account number with currency as Pound

        cy.contains('Open Account').click();
        cy.get('#userSelect').select(custFullName);
        cy.get('#currency').select('Pound');
        cy.xpath("//button[text()='Process']").click()

    })
})