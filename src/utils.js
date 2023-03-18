import React from "react";

function formatDate(date) {
    return date && date !== "Invalid date" ? date : "present";
}

export function formatPeriod({ to, from, at }) {
    return String(at ? at : formatDate(from) + " - " + formatDate(to));
}

export function renderHtml(html) {
    return <p dangerouslySetInnerHTML={{ __html: html }}></p>;
}
