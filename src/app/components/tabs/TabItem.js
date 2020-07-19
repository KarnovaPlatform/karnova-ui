import React, {Component} from 'react';
import PropTypes from 'prop-types'


class TabItem extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        index: PropTypes.number,
        activeTabIndex: PropTypes.number,
        label: PropTypes.string,
        activeBackgroundColor:PropTypes.string,
        backgroundColor:PropTypes.string,
        style:PropTypes.object,
        activeStyle:PropTypes.object,
        customStyle:PropTypes.object,
        customActiveStyle:PropTypes.object,
        icon:PropTypes.any,
        onRemove: PropTypes.func,
        ComponentUniqueKeyName:PropTypes.string,
        componentKey:PropTypes.string
    }

    static defaultProps = {
        onClick: ()=>{},
        index: undefined,
        activeTabIndex: undefined,
        label:'tab',
        activeBackgroundColor:undefined,
        backgroundColor:undefined,
        style:{},
        activeStyle:{},
        customStyle:{},
        customActiveStyle:{},
        icon:undefined,
        onRemove: undefined,
        ComponentUniqueKeyName:undefined,
        componentKey:undefined
    }
    constructor (props) {
        super(props)
        this.state = {
            tooltipOpen: false,
        }
    }

    render() {
        let { index ,
            activeTabIndex ,
            onClick ,
            label ,
            activeBackgroundColor ,
            backgroundColor ,
            style,
            activeStyle,
            customStyle ,
            customActiveStyle,
            icon,
            onRemove,
            ComponentUniqueKeyName,
            componentKey,
        } = this.props;
        let resultStyle = Object.assign({}, style, customStyle ,backgroundColor? { background: backgroundColor }:{})
        if(index === activeTabIndex)
            Object.assign( resultStyle, { background: activeBackgroundColor }, activeStyle , customActiveStyle )
        let suffix = '';
            if(label.length>17)
                suffix = '...'
        return (
            <React.Fragment>
            <button data-tip={ComponentUniqueKeyName === "undefined"?`${app.translate(componentKey)} `:`${app.translate(componentKey+"."+ComponentUniqueKeyName)} `} className={"tab-item" +( index === activeTabIndex?" active-tab": '')} key={index} type="button"
                    data-place="bottom"
                    style={resultStyle}
                    onClick={() => onClick(index)}>
                {`${app.translate(label)} `}{onRemove ? <i className="fa fa-remove" style={{color:'red'}} onClick={()=>onRemove(index)}/> :icon && icon}
            </button>
            </React.Fragment>

        );
    }
}
export default TabItem;