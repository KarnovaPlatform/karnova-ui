import React from 'react'

export default class BlankPage extends React.PureComponent {
    render() {
        return (
            <div className="BlankPage">
                {this.props.children}
            </div>
        )
    }
}

