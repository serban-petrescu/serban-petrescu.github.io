import React from "react";

export function formatPeriod({ to, from, at }) {
    return String(at ? at : (from || "present") + " - " + (to || "present"));
}

export function renderHtml(html) {
    return <p dangerouslySetInnerHTML={{ __html: html }}></p>;
}