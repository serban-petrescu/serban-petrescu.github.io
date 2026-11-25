import mixpanel from "mixpanel-browser";

// Same project, EU endpoint and no-persistence setup as the Gatsby site, so dashboards keep working.
const TOKEN = "c4cc21bf5d9a0b60ab5fa4dcef19e808";

let ready = false;

export function initAnalytics() {
    if (ready) return;
    mixpanel.init(TOKEN, { api_host: "https://api-eu.mixpanel.com", disable_persistence: true });
    ready = true;
}

export function track(event: string, properties: Record<string, unknown> = {}) {
    initAnalytics();
    mixpanel.track(event, properties);
}

// Elements opt in with data-track="<event>" plus optional data-track-* properties.
export function bindTracking(root: ParentNode = document) {
    root.addEventListener("click", (event) => {
        const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
        if (!target) return;
        const properties: Record<string, string> = {};
        for (const [key, value] of Object.entries(target.dataset)) {
            if (key.startsWith("track") && key !== "track" && value !== undefined) {
                properties[key.slice(5).toLowerCase()] = value;
            }
        }
        track(target.dataset.track!, properties);
    });
}
