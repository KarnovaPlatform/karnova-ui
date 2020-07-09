import React from 'react'
import PropTypes from 'prop-types'

export default class Notfound extends React.PureComponent {
    static propTypes = {
    };
    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div id="content" className={"dashboard-null"}>
                <div>
                    <h1>صفحه مورد نظر یافت نشد</h1>
                </div>
            </div>
        )
    }
}
