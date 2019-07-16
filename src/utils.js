import ReactHtmlParser from 'react-html-parser';

const padSingle = number => (number < 10 ? '0' : '') + number;

export function formatDate(date) {
    if (date) {
        return padSingle(date.getDate()) + '.' + padSingle(date.getMonth() + 1) + '.' + date.getFullYear();
    } else {
        return 'present';
    }
}

export function formatPeriod({to, from}) {
    return formatDate(from) + ' - ' + formatDate(to);
}

export function renderHtml(html) {
    return ReactHtmlParser(html);
}