import React from 'react'
import PropTypes from 'prop-types'
import Widget from "./Widget";

export default class WidgetIndex extends React.PureComponent {
    static propTypes = {
        componentKey: PropTypes.string,
        lang: PropTypes.string,
        componentDependencies: PropTypes.object,
    };
    static defaultProps = {
        componentDependencies:{},
        componentKey: '',
        lang: 'fa',
    };

    render() {
        const {componentKey, lang, ...rest} = this.props;
        return (
            <div id={`content`}>
                <div className={"row"}>
                    <div className="col-12 col-sm-12">
                        <Widget
                            {...rest}
                            lang={lang}
                            pinAbility={true}
                            componentKey={componentKey}/>
                    </div>
                </div>
            </div>
        )
    }
}

