import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormErrorService } from './form-errors.service';
/**
 * New account component
 *
 * @export
 * @class NewAccountComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.scss'],
    providers: [FormErrorService]
})
export class NewAccountComponent implements OnInit {
    /**
     * FormGroup object
     */
    public singUp: FormGroup;
    /**
     * Defines the level of password
     */
    level: number;
    /**
     * Array to flag the password pattern
     */
    flag = [];
    /**
     * Level of the password pattern
     */
    setLevel = {
        one: null,
        two: null,
        three: null
    };
    /**
     * Patterns to password
     */
    validate = {
        minlength: false,
        hasNumber: false,
        hasUpper: false,
    };
    /**
     * Errors fields
     */
    public formErrors = {
        name: '',
        email: '',
        password: '',
    };
    /**
     * Requests loadings
     */
    loading: boolean;
    /**
     * Creates an instance of NewAccountComponent.
     * @param {FormErrorService} formErrorService
     * @param {Router} router
     * @memberof NewAccountComponent
     */
    constructor(
        public formErrorService: FormErrorService,
        private router: Router
    ) { }
    /**
     * Init
     *
     * @memberof NewAccountComponent
     */
    ngOnInit() {
        this.level = 0;
        this.loading = false;
        this.setLevel.one = 'stand';
        this.setLevel.two = 'stand';
        this.setLevel.three = 'stand';
        this.validates();
        sessionStorage.removeItem('user');
    }
    /**
     * Check if the informed password has a minimum length
     *
     * @param {string} password
     * @returns {boolean}
     * @memberof NewAccountComponent
     */
    minLength(password: string): boolean {
        this.validate.minlength = password.length > 5;
        this.flag[0] = this.validate.minlength;
        return this.validate.minlength;
    }
    /**
     * Check if password has a uppercase letter
     *
     * @param {string} password
     * @returns {boolean}
     * @memberof NewAccountComponent
     */
    upperLetter(password: string): boolean {
        const upper = /[A-Z]/;
        this.validate.hasUpper = upper.test(password);
        this.flag[1] = this.validate.hasUpper;
        return this.validate.hasUpper;
    }
    /**
     * Check if the informed password has a number
     *
     * @param {string} password
     * @returns {boolean}
     * @memberof NewAccountComponent
     */
    hasNumber(password: string): boolean {
        const the_number = /[0-9]/;
        this.validate.hasNumber = the_number.test(password);
        this.flag[2] = this.validate.hasNumber;
        return this.validate.hasNumber;
    }
    /**
     * Check if the informed password and confirm are the same
     *
     * @param {string} password
     * @param {string} password_confirm
     * @returns {boolean}
     * @memberof NewAccountComponent
     */
    confirmPassWord(password: string, password_confirm: string): boolean {
        return password.trim() === password_confirm.trim();
    }
    /**
     * Do the validations
     *
     * @param {string} password
     * @returns {boolean}
     * @memberof NewAccountComponent
     */
    formValidate(password: string) {
        this.upperLetter(password);
        this.hasNumber(password);
        this.minLength(password);
        this.checkLevel();
    }
    /**
     * Define as validações do formcontrol
     *
     * @memberof NewAccountComponent
     */
    validates() {
        this.singUp = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            password_confirmation: new FormControl('', [Validators.required])
        }, this.passwordMatchValidator);
        /*
         * on each value change we call the validate the form
         * We only validate form controls that are dirty, meaning they are touched
         * the result is passed to the formErrors object
         */
        this.singUp.valueChanges.subscribe((data) => {
            this.formValidate(data.password);
            this.formErrors = this.formErrorService.validateForm(this.singUp, this.formErrors, true);
        });
    }
    /**
     * Check if the password and confirmation are the same
     *
     * @param {FormGroup} g
     * @returns
     * @memberof NewAccountComponent
     */
    passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('password_confirmation').value ? null : { 'mismatch': true };
    }
    /**
     * Adding style to list
     *
     * @param {boolean} control
     * @param {boolean} validate
     * @returns {string}
     * @memberof NewAccountComponent
     */
    addStyleToList(control: boolean, validate: boolean): string {
        return !control ? `` : validate ? `green lighten-5 green-text` : `red lighten-5 red-text`;
    }
    /**
     * Defining the image in the list
     *
     * @param {boolean} control
     * @param {boolean} validate
     * @returns {string}
     * @memberof NewAccountComponent
     */
    addImageToList(control: boolean, validate: boolean): string {
        return !control ? `grey` : validate ? `green` : `red`;
    }
    /**
     * Update the password level style
     *
     * @memberof NewAccountComponent
     */
    checkLevel() {
        this.level = this.flag.reduce((x, i) => {
            return i ? ++x : x;
        }, 0);
        switch (this.level) {
            case 1:
                this.setLevel.one = 'error';
                this.setLevel.two = 'stand';
                this.setLevel.three = 'stand';
                break;
            case 2:
                this.setLevel.one = 'warn';
                this.setLevel.two = 'warn';
                this.setLevel.three = 'stand';
                break;
            case 3:
                this.setLevel.one = 'success';
                this.setLevel.two = 'success';
                this.setLevel.three = 'success';
                break;
            default:
                this.setLevel.one = 'stand';
                this.setLevel.two = 'stand';
                this.setLevel.three = 'stand';
                break;
        }
    }
    /**
     * Sends the requisition
     *
     * @memberof SignupComponent
     */
    send() {
        if (this.singUp.valid) {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                sessionStorage.setItem('user', JSON.stringify(this.singUp['value']));
                this.router.navigate(['index']);
            }, 3000);
        }
    }
}
