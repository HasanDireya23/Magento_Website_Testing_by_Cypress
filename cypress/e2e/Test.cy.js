

const randomFirstName = 'FirstName' + Cypress._.random(1, 1000);
const randomLastName = 'LastName' + Cypress._.random(1, 1000);
const randomEmail = `user${Cypress._.random(1, 1000)}@example.com`;
const randomPassword = 'RandomPassword' + Cypress._.random(1, 1000);



const selectors = [
  '.swatch-opt-1588 > .size > .swatch-attribute-options > #option-label-size-143-item-170',
  '.swatch-opt-1588 > .size > .swatch-attribute-options > #option-label-size-143-item-169',
  '.swatch-opt-1588 > .size > .swatch-attribute-options > #option-label-size-143-item-168',
  '.swatch-opt-1588 > .size > .swatch-attribute-options > #option-label-size-143-item-167',
  '.swatch-opt-1588 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
];

const colors = [
  '.swatch-opt-1588 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-60',
  '.swatch-opt-1588 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-56',
  '.swatch-opt-1588 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49'
];


const selectors1 = [
  '.swatch-opt-1572 > .size > .swatch-attribute-options > #option-label-size-143-item-170',
  '.swatch-opt-1572 > .size > .swatch-attribute-options > #option-label-size-143-item-169',
  '.swatch-opt-1572 > .size > .swatch-attribute-options > #option-label-size-143-item-168',
  '.swatch-opt-1572 > .size > .swatch-attribute-options > #option-label-size-143-item-167',
  '.swatch-opt-1572 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
];

const colors1 = [
  '.swatch-opt-1572 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-60',
  '.swatch-opt-1572 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-53',
  '.swatch-opt-1572 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49'
];




const selectors2 = [
  '.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-170',
  '.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-169',
  '.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-168',
  '.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-167',
  '.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
];
const colors2 = [
  '.swatch-opt-1556 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-57',
  '.swatch-opt-1556 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-56',
  '.swatch-opt-1556 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-50'
];




const randomSelector = Cypress._.sample(selectors);
const randomSelector1 = Cypress._.sample(selectors1);
const randomSelector2 = Cypress._.sample(selectors2);

const randomColor = Cypress._.sample(colors);
const randomColor1 = Cypress._.sample(colors1);
const randomColor2 = Cypress._.sample(colors2);




describe('Visit Magento Website', () => {
  it('Should visit the Magento website', () => {
    
    cy.visit('https://magento.softwaretestingboard.com/');

    
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/');


    cy.wait(3000);
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.wait(5000);

    // Fill in the form with random values
cy.get('#firstname').type(randomFirstName);
cy.get('#lastname').type(randomLastName);
cy.get('#email_address').type(randomEmail);
cy.get('#password').type(randomPassword);
cy.get('#password-confirmation').type(randomPassword);
    
    
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();


    cy.wait(5000); // Adjust the wait time as needed
    cy.get('.message-success > div').should('have.text', 'Thank you for registering with Main Website Store.');
    

    


 cy.wait(2000);
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();

    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();


    cy.wait(7000);
    cy.get('.panel > .header > .authorization-link > a').click();

    cy.get('#email').type(randomEmail);
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(randomPassword);

    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();



    cy.get('#ui-id-4').click()

    cy.get('.categories-menu > :nth-child(2) > :nth-child(3) > a').click()

    cy.wait(6000)
    cy.get(':nth-child(4) > .modes > #mode-list').click()
     
    cy.wait(10000);

    cy.get(randomSelector).click();

    cy.get(randomColor).click();

    cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').click()

    cy.get(randomSelector1).click();
    cy.get(randomColor1).click();

    cy.get(':nth-child(2) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').click();

    cy.get(randomSelector2).click();
    cy.get(randomColor2).click();

    cy.get(':nth-child(3) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action > span').click()

    cy.wait(3000);
    cy.get('.showcart').click();

    cy.get('.amount > .price-wrapper > .price').should('have.text', '$70.00');



  });
});
