import React from "react";
import { Divider } from "semantic-ui-react";

const SectionHeader = ({ id, title }) => (
    <>
        <div id={id} className="section-divider" />
        <Divider as="h2" className="header" horizontal>
            {title}
        </Divider>
    </>
);

export default SectionHeader;
