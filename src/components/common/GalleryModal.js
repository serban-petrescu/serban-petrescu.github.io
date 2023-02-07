import React, { Component } from "react";
import { Modal, Header, Pagination, Icon } from "semantic-ui-react";
import mixpanel from "mixpanel-browser";

import "./GalleryModal.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default class GalleryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    open(title, images) {
        this.setState({
            open: true,
            page: 0,
            title,
            images,
        });
        mixpanel.track("[Gallery] Open", { title });
    }

    close() {
        this.setState({ ...this.state, open: false });
    }

    changePage(page) {
        this.setState({
            ...this.state,
            page: Math.min(Math.max(0, page), this.state.images.length - 1),
        });
        mixpanel.track("[Gallery] Change page", {
            title: this.state.title,
            page,
        });
    }

    render() {
        const { open, page, title, images = [] } = this.state;
        const { path, description } = images[page] || {};
        return (
            <Modal
                closeIcon
                open={open}
                onClose={() => this.close()}
                className="gallery"
            >
                <Header icon="image" content={title} />
                <Modal.Content className="gallery-main">
                    {path && (
                        <GatsbyImage
                            className="gallery-image"
                            image={getImage(path)}
                        />
                    )}
                    <p className="gallery-description">{description}</p>
                </Modal.Content>
                {images.length > 1 ? (
                    <Modal.Actions>
                        <div className="gallery-actions">
                            <Pagination
                                activePage={page + 1}
                                totalPages={images.length}
                                size="mini"
                                boundaryRange={0}
                                siblingRange={1}
                                firstItem={null}
                                lastItem={null}
                                prevItem={{
                                    disabled: page === 0,
                                    content: <Icon name="angle left" />,
                                    icon: true,
                                }}
                                nextItem={{
                                    disabled: page === images.length - 1,
                                    content: <Icon name="angle right" />,
                                    icon: true,
                                }}
                                onPageChange={(_, { activePage }) =>
                                    this.changePage(activePage - 1)
                                }
                            />
                        </div>
                    </Modal.Actions>
                ) : (
                    <div />
                )}
            </Modal>
        );
    }
}
