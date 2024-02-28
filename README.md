# Cypress Testing for Magento Website

This repository hosts Cypress automated tests for the Magento website. The suite includes various test cases to ensure the functionality of key user interactions. the test cases:


## Test Cases


### Test Case 1:
. **User Signup**:
   - Navigate to [Magento Signup Page](https://magento.softwaretestingboard.com/customer/account/create/).
   - Randomly fill signup details and verify successful registration.

### Test Case 2:
. **User Logout**:
   - Perform user logout after login.
   - Verify successful logout.

### Test Case 3:
. **User Login**:
   - Navigate to [Magento Login Page](https://magento.softwaretestingboard.com/customer/account/login/).
   - Randomly input login credentials and verify successful login.


## Test Case 4: Adding Women's Tops to Cart

- Navigate to the Women's section, select "Tops," and further refine the search to "Tees" on the [Magento Women's Tops Page](https://magento.softwaretestingboard.com/women/tops/tees.html).
- Add the first three items to the cart with random selections of color and size.
- Verify that the total number of items in the cart is equal to 3.
- Create an assertion to ensure that the total price in the cart is the sum of the three selected items.
- Print the names and prices of the added items for reference.
