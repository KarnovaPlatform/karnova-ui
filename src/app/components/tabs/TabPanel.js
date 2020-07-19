import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TabPanel extends Component {
    static propTypes = {
        Component: PropTypes.object,
        style: PropTypes.object,
        display:PropTypes.string,
    }
    static defaultProps = {
        Component: undefined,
        style: {},
        display:'block',
    }

    render() {
        let {Component , style , display } = this.props;
        return (
            <div className="tab-panel col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p-0"
                 style={Object.assign( {display:display} ,style )}>
                {Component}
            </div>
        );
    }
}

export default TabPanel;
