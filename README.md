# Angular Assessment

This assessment was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Assessment Requirements

### The requirements are to use 
- routing 
- angular forms with validation.

### Home Component
- Create a button or router link on the app home page that allows the user to navigate to a register component.
 
### Register Component
- On the register component add an angular form.
- The form should contain an input field.
- On form submission the code should run email validation.
- Use a div in the template to display valid/invalid messages.
- Add a button that navigates the user back to the app home page.
 
### Nice to have
- Unit tests
- Themes using scss

## Implemented Assessment contains
- Implemeted routing
- In Home Component, added 'Register' button to navigate to Register Component
- In Register Component, implemented Angular form with validation
- On form submission email validation is added.
- Valid/InValid message are shown in div with different color codes based on the theme selected
- Added 'Home' button to navigate back to Home Component
- Two themes are implemented using scss.
- User can toggle between two themes i.e 'light' and 'dark' by clicking 'T' button on header
- Selected theme value will be store in localstorage so that if user revisit the app then previously selected theme will be loaded
- Implemented the Unit Testing

## Live url
[Assessment](https://angular-ivy-e2xhu9.stackblitz.io/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
