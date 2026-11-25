const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export type Range = { from: string; to: string };

export const year = (iso: string) => iso.slice(0, 4);

export const monthYear = (iso: string) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${year(iso)}`;

export const dayMonthYear = (iso: string) => `${Number(iso.slice(8, 10))} ${monthYear(iso)}`;

export const isOngoing = ({ to }: Range) => to === "";

export function yearRange(range: Range) {
    const from = year(range.from);
    if (isOngoing(range)) return `${from} to present`;
    const to = year(range.to);
    return from === to ? from : `${from} to ${to}`;
}

export function monthRange(range: Range) {
    return `${monthYear(range.from)} to ${isOngoing(range) ? "present" : monthYear(range.to)}`;
}
