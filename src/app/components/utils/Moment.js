import React from 'react'
import moment from 'moment-jalaali'

export default  class Moment extends React.Component {
    _change(format){
        format = format.replace(`YYYY`, `jYYYY`);
        format = format.replace(`MM`, `jMM`);
        format = format.replace(`DD`, `jDD`);

        return format;
    }
    render() {
        const format = this.props.format ? this._change( this.props.format ) : `llll`;
        return (
            <span className={`moment`}>{moment(this.props.date).format(format || `llll`)}</span>
        )
    }
}
