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

        //get customer Details and save it
        //select customer tab
        cy.contains('Customers').click();

        //get customer first name
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[1]').then($el=>{
            //cy.wrap($el.text()).as('firstNameDisplayed')
            cy.wrap({firstNameDisplayed:$el.text()})
        })
        // cy.get('@firstNameDisplayed').then($firstName=>{
        //     cy.log("Customer first Name :: "+firstName )
        // })

        //Get Last name Displayed
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[2]').then($el=>{
            //cy.wrap($el.text()).as('firstNameDisplayed')
            cy.wrap({lastNameDisplayed:$el.text()})
        })
        //Get Postal Code Displayed
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[3]').then($el=>{
            //cy.wrap($el.text()).as('firstNameDisplayed')
            cy.wrap({PostalCode:$el.text()})
        })
        //Get Account number Displayed
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[4]').then($el=>{
            cy.wrap($el.text()).as('accountNumber')
            cy.log("Account Number :: "+$el.text())
        })
        cy.get('@accountNumber').then($accounts=>{
           let accountlist=$accounts.toString().split(' ')
           cy.log("First Account Number :: "+ accountlist[0])
           cy.log("Second Account Number :: "+ accountlist[1])
           cy.log("Third Account Number :: "+ accountlist[2])
        })    



    })
})