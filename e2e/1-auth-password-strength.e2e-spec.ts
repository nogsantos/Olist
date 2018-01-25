import { browser, by, element } from 'protractor';

describe('Olist: Testing password strength', () => {
    const password = element(by.id('password'));
    const img_length = element(by.id('img_length'));
    const img_number = element(by.id('img_number'));
    const img_upper = element(by.id('img_upper'));
    const level_one = element(by.id('level_one'));
    const level_two = element(by.id('level_two'));
    const level_three = element(by.id('level_three'));

    const hasClass = (el, cls) => {
        return el.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };

    beforeEach(() => {
        browser.get('/');
    });

    it('should validate a min length of 6 characters', () => {
        password.sendKeys('123456');
        browser.getCurrentUrl().then(address => {
            expect(img_length.getAttribute('src')).toBe(`${address}assets/img/circle_green.svg`);
        });
    });

    it('should validate if password has a number', () => {
        password.sendKeys('asdfg1');
        browser.getCurrentUrl().then(address => {
            expect(img_number.getAttribute('src')).toBe(`${address}assets/img/circle_green.svg`);
        });
    });

    it('should validate if password has an upper letter', () => {
        password.sendKeys('asdFg1');
        browser.getCurrentUrl().then(address => {
            expect(img_upper.getAttribute('src')).toBe(`${address}assets/img/circle_green.svg`);
        });
    });

    it('should check the level no rule are repescted', () => {
        password.sendKeys('asd');
        expect(hasClass(level_one, 'stand')).toBeTruthy();
        expect(hasClass(level_two, 'stand')).toBeTruthy();
        expect(hasClass(level_three, 'stand')).toBeTruthy();
    });

    it('should check the level if one of three rule are respected', () => {
        password.sendKeys('asd1');
        expect(hasClass(level_one, 'error')).toBeTruthy();
        expect(hasClass(level_two, 'stand')).toBeTruthy();
        expect(hasClass(level_three, 'stand')).toBeTruthy();
    });

    it('should check the level if two of three rule are respected', () => {
        password.sendKeys('asd1F');
        expect(hasClass(level_one, 'warn')).toBeTruthy();
        expect(hasClass(level_two, 'warn')).toBeTruthy();
        expect(hasClass(level_three, 'stand')).toBeTruthy();
    });

    it('should check the level if three of three rule are respected', () => {
        password.sendKeys('asdFg1');
        expect(hasClass(level_one, 'success')).toBeTruthy();
        expect(hasClass(level_two, 'success')).toBeTruthy();
        expect(hasClass(level_three, 'success')).toBeTruthy();
    });

});
