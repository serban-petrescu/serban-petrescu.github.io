import React, { Component } from 'react';

import { Visibility } from 'semantic-ui-react';

class Wrapped extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    render() {
        const { component, ...props } = this.props;
        const Base = component;
        return (
            <Visibility fireOnMount onOnScreen={() => this.setState({ visible: true })}>
                <Base {...props} visible={this.state.visible} />
            </Visibility>
        );
    }
}

const withVisibility = () => Base => {
    return props => <Wrapped {...props} component={Base} />
}

export default withVisibility;