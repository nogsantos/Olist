import { browser, by, element } from 'protractor';

describe('Olist: Testing elements', () => {
    const olist_logo = element(by.tagName('picture'));
    const account_message = element(by.tagName('h4'));
    const input_name = element(by.id('name'));
    const input_email = element(by.id('email'));
    const input_password = element(by.id('password'));
    const input_password_confirmation = element(by.id('password_confirm'));
    const button_create = element(by.tagName('button'));
    const password_strength = element(by.css('.password-strength'));

    beforeAll(() => {
        browser.get('/');
    });

    it('should display olist logo', () => {
        expect(olist_logo.isDisplayed()).toBeTruthy();
    });

    it('should display create account message', () => {
        expect(account_message.getText()).toEqual('Crie sua conta');
    });

    it('should have an input text for name', () => {
        input_name.sendKeys('Olist');
        expect(input_name.getText()).toString();
    });

    it('should have an input text for email ', () => {
        input_email.sendKeys('mail@olist.com');
        expect(input_email.getText()).toString();
    });

    it('should have an input password for password ', () => {
        input_password.sendKeys('asdFg1');
        expect(input_password.getText()).toString();
    });

    it('should have a password strength view', () => {
        expect(password_strength.isDisplayed()).toBeTruthy();
    });

    it('should have an input password for password confirmation', () => {
        input_password_confirmation.sendKeys('asdFg1');
        expect(input_password_confirmation.getText()).toString();
    });

    it('should display a button to create acount', () => {
        expect(button_create.isDisplayed()).toBeTruthy();
    });
});
