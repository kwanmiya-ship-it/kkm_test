import { isValidEmail } from './validator.js';

export function extractEmails(members) {
    if (!Array.isArray(members)) {
        return [];
    }
    return members.map(member => member.email);
}

export function getValidEmails(members) {
    return extractEmails(members).filter(isValidEmail);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출하고 중복을 제거한다.
 * @param {Array<{email?: string}>} members - 이메일 필드를 가진 사용자 목록
 * @returns {string[]} 중복이 제거된 유효 이메일 배열
 */
export function uniqueValidEmails(members) {
    return [...new Set(getValidEmails(members))];
}

export { isValidEmail };
