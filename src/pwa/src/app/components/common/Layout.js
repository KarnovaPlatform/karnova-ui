import React from 'react'

import Header from './Header'
import Footer from './Footer'
import app from './../../services/helpers'



export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: false})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({loading: false})

    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (!app._.isEqual(nextProps.routes, this.props.routes) || (!app._.isEqual(nextProps.location.pathname, this.props.location.pathname))) {
            this.setState({loading: true})
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!app._.isEqual(nextProps.routes, this.props.routes) ||
            (!app._.isEqual(nextProps.location.pathname, this.props.location.pathname))) {
            // this.setState({loading: false},()=>{
            //     this.setState({loading: true})
            // })
            return true;
        }
        return !app._.isEqual(nextState, this.state);
    }

    render() {
        const {loading} = this.state;

        return (
            <div style={{direction:'rtl'}} >
                <Header/>
                <div id="main" role="main">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

