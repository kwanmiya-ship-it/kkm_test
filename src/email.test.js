import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails, uniqueValidEmails } from './email.js';

test('extractEmails returns emails from members array', () => {
    const members = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
    assert.deepEqual(extractEmails(members), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('valid@example.com'), true);
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail(123), false);
});

test('getValidEmails filters invalid emails', () => {
    const members = [
        { email: 'good@example.com' },
        { email: 'bad-email' },
        { email: 'also@good.org' },
        { email: null },
    ];
    assert.deepEqual(getValidEmails(members), ['good@example.com', 'also@good.org']);
});

test('uniqueValidEmails removes duplicate valid emails', () => {
    const members = [
        { email: 'good@example.com' },
        { email: 'good@example.com' },
        { email: 'also@good.org' },
        { email: 'bad-email' },
    ];
    assert.deepEqual(uniqueValidEmails(members), ['good@example.com', 'also@good.org']);
});
