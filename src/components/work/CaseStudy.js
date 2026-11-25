import React from "react";
import { Button, Label } from "semantic-ui-react";
import mixpanel from "mixpanel-browser";

import { formatPeriod, renderHtml } from "../../utils";

import "./CaseStudy.scss";

const trackLink = (name, type) => () =>
    mixpanel.track("[Case study] View details", { name, type });

const CaseStudyLinks = ({ name, link, linkLabel, blog, blogLabel, github, youtube, images, onClickGallery }) => (
    <div className="case-study-links">
        {link && (
            <Button basic size="tiny" icon="linkify" content={linkLabel || "Website"} as="a" href={link} target="_blank" rel="noopener noreferrer" onClick={trackLink(name, "Link")} />
        )}
        {blog && (
            <Button basic size="tiny" icon="file alternate outline" content={blogLabel || "Read more"} as="a" href={blog} target="_blank" rel="noopener noreferrer" onClick={trackLink(name, "Blog")} />
        )}
        {github && (
            <Button basic size="tiny" icon="github" content="Code" as="a" href={github} target="_blank" rel="noopener noreferrer" onClick={trackLink(name, "GitHub")} />
        )}
        {youtube && (
            <Button basic size="tiny" icon="youtube" content="Video" as="a" href={youtube} target="_blank" rel="noopener noreferrer" onClick={trackLink(name, "YouTube")} />
        )}
        {images && images.length > 0 && (
            <Button basic size="tiny" icon="image outline" content="Gallery" onClick={onClickGallery} />
        )}
    </div>
);

const CaseStudy = (project) => {
    const { name, role, outcome, description, period, technologies } = project;
    return (
        <article className="case-study">
            <header className="case-study-header">
                <h3>{name}</h3>
                <span className="case-study-period">{formatPeriod(period)}</span>
            </header>
            <p className="case-study-role">{role}</p>
            {outcome && <p className="case-study-outcome">{outcome}</p>}
            <div className="case-study-body">{renderHtml(description)}</div>
            <Label.Group size="tiny" className="case-study-stack">
                {(technologies || []).map(({ name: tech }) => (
                    <Label key={tech}>{tech}</Label>
                ))}
            </Label.Group>
            <CaseStudyLinks {...project} />
        </article>
    );
};

export default CaseStudy;
