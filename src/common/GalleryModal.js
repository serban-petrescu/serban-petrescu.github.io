import React, { Component } from 'react';
import { Modal, Header, Pagination, Icon } from 'semantic-ui-react';

import './GalleryModal.scss';

export default class GalleryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    open(title, images) {
        this.setState({
            open: true,
            page: 0,
            title,
            images
        });
    }

    close() {
        this.setState({ ...this.state, open: false });
    }

    changePage(page) {
        this.setState({ ...this.state, page: Math.min(Math.max(0, page), this.state.images.length - 1) });
    }

    render() {
        const { open, page, title, images = [] } = this.state;
        const { path, description } = images[page] || {};
        return (
            <Modal closeIcon open={open} onClose={() => this.close()} className='gallery'>
                <Header icon='image' content={title} />
                <Modal.Content className='gallery-main'>
                    <div className='gallery-image' style={{ backgroundImage: 'url(' + path + ')' }}
                        onClick={() => window.open(path, '_blank')} />
                    <p className='gallery-description'>{description}</p>
                </Modal.Content>
                {
                    images.length > 1 ?
                        <Modal.Actions>
                            <div className='gallery-actions'>
                                <Pagination activePage={page + 1} totalPages={images.length} size='mini'
                                    boundaryRange={0} siblingRange={1} firstItem={null} lastItem={null}
                                    prevItem={{ disabled: page === 0, content: <Icon name='angle left' />, icon: true }}
                                    nextItem={{ disabled: page === images.length - 1, content: <Icon name='angle right' />, icon: true }}
                                    onPageChange={(_, { activePage }) => this.changePage(activePage - 1)} />
                            </div>
                        </Modal.Actions> : <div />
                }
            </Modal>
        );
    }

}