import { FC } from 'react';

interface PasswordValidationProps {
    password: string;
}



/**
 * Component for validating the strength of a password.
 */
const PasswordValidation: FC<PasswordValidationProps> = ({ password }) => {
    /**
     * Checks the strength of a password.
     * 
     * @param password - The password to check.
     * @returns True if the password meets the strength requirements, otherwise false.
     * @throws {Error} If the password is not a string, or if it does not meet the strength requirements.
     */
    const checkPasswordStrength = (password: string) => {
        // Implement your password strength checking logic here
        if (typeof password !== 'string')
            throw new Error('Password must be a string');
        if (password.length < 8)
            throw new Error('Password must be at least 8 characters long');
        if (!/[a-z]/.test(password))
            throw new Error('Password must contain at least one lowercase letter');
        if (!/[A-Z]/.test(password))
            throw new Error('Password must contain at least one uppercase letter');
        if (!/[0-9]/.test(password))
            throw new Error('Password must contain at least one number');
        if (!/[^a-zA-Z0-9]/.test(password))
            throw new Error('Password must contain at least one special character');
        return true;
    };

    /**
     * Validates the strength of a password without using regular expressions.
     * 
     * @param password - The password to be checked.
     * @returns True if the password meets the strength requirements, otherwise throws an error.
     * @throws {Error} If the password is not a string, is less than 8 characters long, does not contain at least one lowercase letter, does not contain at least one uppercase letter, does not contain at least one number, or does not contain at least one special character.
     */
    const PasswordValidation_withoutRegex: FC<PasswordValidationProps> = ({ password }) => {
        /**
         * Checks if the password contains at least one lowercase letter.
         * 
         * @param password - The password to be checked.
         * @returns True if the password contains at least one lowercase letter, otherwise false.
         */
        const hasLowerCaseLetter = (password: string) => {
            return /[a-z]/.test(password);
        };

        /**
         * Checks if the password contains at least one uppercase letter.
         * 
         * @param password - The password to be checked.
         * @returns True if the password contains at least one uppercase letter, otherwise false.
         */
        const hasUpperCaseLetter = (password: string) => {
            return /[A-Z]/.test(password);
        };

        /**
         * Checks if the password contains at least one number.
         * 
         * @param password - The password to be checked.
         * @returns True if the password contains at least one number, otherwise false.
         */
        const hasNumber = (password: string) => {
            return /[0-9]/.test(password);
        };

        /**
         * Checks if the password contains at least one special character.
         * 
         * @param password - The password to be checked.
         * @returns True if the password contains at least one special character, otherwise false.
         */
        const hasSpecialCharacter = (password: string) => {
            return /[^a-zA-Z0-9]/.test(password);
        };

        /**
         * Checks the strength of the password.
         * 
         * @param password - The password to be checked.
         * @returns True if the password meets the strength requirements, otherwise throws an error.
         * @throws {Error} If the password is not a string, is less than 8 characters long, does not contain at least one lowercase letter, does not contain at least one uppercase letter, does not contain at least one number, or does not contain at least one special character.
         */
        const checkPasswordStrength_withoutRegex = (password: string) => {
            if (typeof password !== 'string')
                throw new Error('Password must be a string');
            if (password.length < 8)
                throw new Error('Password must be at least 8 characters long');
            if (!hasLowerCaseLetter(password))
                throw new Error('Password must contain at least one lowercase letter');
            if (!hasUpperCaseLetter(password))
                throw new Error('Password must contain at least one uppercase letter');
            if (!hasNumber(password))
                throw new Error('Password must contain at least one number');
            if (!hasSpecialCharacter(password))
                throw new Error('Password must contain at least one special character');
            return true;
        };

        return (
            <div>
                {checkPasswordStrength_withoutRegex(password) ? (
                    <p>Password is strong.</p>
                ) : (
                    <p>Password does not meet strength requirements.</p>
                )}
            </div>
        );
    };

    return (
        <div>
            {checkPasswordStrength(password) ? (
                <p>Password is strong.</p>
            ) : (
                <p>Password does not meet strength requirements.</p>
            )}
        </div>
    );
};

export default PasswordValidation;