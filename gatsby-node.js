
/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
        type PeriodJson {
            from: Date @dateformat
            to: Date @dateformat
            at: Date @dateformat
        }

        type EducationJson implements Node {
            period: PeriodJson!
        }

        type CertificationJson implements Node {
            period: PeriodJson!
        }

        type WorkJson implements Node {
            period: PeriodJson!
        }
    `);
};
