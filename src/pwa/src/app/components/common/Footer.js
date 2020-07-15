import React from 'react'
import app from './../../services/helpers'

export default class Footer extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <span className="txt-color-white">
                          {app.config.copyRight}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}