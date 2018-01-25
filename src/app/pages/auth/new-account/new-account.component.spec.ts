import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewAccountComponent } from './new-account.component';
import { FormErrorService } from './form-errors.service';

describe('NewAccountComponent - Login', () => {
    // tslint:disable-next-line:prefer-const
    let loging: NewAccountComponent;
    const user = {
        password: null,
        password_confirm: null
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
            ],
        }).compileComponents();
        this.loging = new NewAccountComponent(new FormErrorService, TestBed.get(RouterTestingModule));
        user.password = `asdFgh5`;
        user.password_confirm = `asd`;
    });

    describe(`minLength()`, () => {
        it(`should validate if the password has a min of 6 length`, () => {
            expect(this.loging.minLength(user.password)).toBeTruthy();
        });
        it(`should validate if the password hasn't a min of 6 length`, () => {
            expect(this.loging.minLength(user.password_confirm)).toBeFalsy();
        });
        it(`should validate if the password null is falsy`, () => {
            expect(this.loging.minLength(``)).toBeFalsy();
        });
    });

    describe(`upperLetter()`, () => {
        it(`should validate if the password has a upper letter`, () => {
            expect(this.loging.upperLetter(user.password)).toBeTruthy();
        });
        it(`should validate if the password hasn't a upper letter`, () => {
            expect(this.loging.upperLetter(user.password_confirm)).toBeFalsy();
        });
        it(`should validate if the password null is falsy`, () => {
            expect(this.loging.upperLetter(``)).toBeFalsy();
        });
    });

    describe(`hasNumber()`, () => {
        it(`should validate if the password has a number`, () => {
            expect(this.loging.hasNumber(user.password)).toBeTruthy();
        });
        it(`should validate if the password hasn't a number`, () => {
            expect(this.loging.hasNumber(user.password_confirm)).toBeFalsy();
        });
        it(`should validate if the password null is falsy`, () => {
            expect(this.loging.hasNumber(``)).toBeFalsy();
        });
    });
});
