import React, { Component } from 'react'
import LoginBackground from './LoginBackground'
import {authenticate} from "../Module";
import {connect} from "react-redux";


class Login extends Component {
  constructor (props) {
    super(props)
    this.mount = true;

    this.state = {
      loading:false,
      active: false,
      username: '',
      password: '',
    }
  }

  updateUsername = (e) => {
    this.setState({username:e.target.value})
  }

  updatePassword = (e) => {
    this.setState({password:e.target.value})
  }

  login = () => {
    if (this.checkUsernameAndPassword()) {
      let { username, password } = this.state
      this._onSubmit();
    }
  }

  checkUsernameAndPassword = () => {
    let { username, password } = this.state
    let minSizeForText = 3
    if (username.length > minSizeForText- 1 && password.length > minSizeForText- 1)
      return true
    return false
  }

  _onSubmit = () => {
    const {authenticate, router} = this.props;
    let { username, password }= this.state;
    if (this.mount) {
      this.setState({loading: true}, () => {
        let data = { username: username, password: password }
        authenticate(data, (error, res) => {
          if (this.mount) {
            this.setState({loading: false})
          }
          if (!error) {
            let refSplat = localStorage.getItem('refSplat');
            if (!refSplat || refSplat === '/logout' || refSplat === 'logout') refSplat = 'home'
            localStorage.removeItem('refSplat');
            router.push(refSplat)
          }
        })
      })
    }
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render () {
    let { active, username, password, loading } = this.state
    if(loading){
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )
    }
    return (
      <div className="login">
        <LoginBackground/>
        <div className="card centerDiv">
          <form onSubmit={()=>this.login()}>
            <div className="field">
              <span className="header">{app.translate('login.header')}</span>

              <div className="form-group">
                <input type="text" name="username" required="required" title={app.translate('login.username_field.title')}
                       autoComplete="username" value={username} onChange={(e) => this.updateUsername(e)}/>
                <label htmlFor="input" className="control-label rtl">{app.translate('login.username')}</label>
                <i className="bar"/>
              </div>

              <div className="form-group">
                <input type="password" name="password" required="required" title={app.translate('login.password_field.title')}
                       autoComplete="password" value={password} onChange={(e)=>this.updatePassword(e)}/>
                <label htmlFor="input" className="control-label">{app.translate('login.password')}</label>
                <i className="bar"/>
              </div>

              <div className="button-container">
                <button type="submit" className="button" >
                  <span>{app.translate('login.submit')}</span>
                </button>
              </div>

            </div>
          </form>


          <form>
            <div className={active ? 'fab active' : 'fab'}>
              <i className={active ? 'fa fa-window-close' : 'fa fa-user-plus'}
                 onClick={() => {
                   this.setState({ active: !active })
                 }}
              />
              <div className="field">
                <span className="header">{app.translate('login.register')}</span>
                <div className="form-group">
                  <input type="text" required="required" title={app.translate('login.register.username_field.title')}/>
                  <label htmlFor="input" className="control-label">{app.translate('login.username')}</label>
                  <i className="bar"/>
                </div>
                <div className="form-group">
                  <input type="password" required="required" autoComplete="on"
                         title={app.translate('login.register.password_field.title')}/>
                  <label htmlFor="input" className="control-label">{app.translate('login.password')}</label>
                  <i className="bar"/>
                </div>
                <div className="form-group">
                  <input type="password" required="required" autoComplete="on"
                         title={app.translate('login.register.confirm_password_field.title')}/>
                  <label htmlFor="input" className="control-label">{app.translate('login.confirm_password')}</label>
                  <i className="bar"/>
                </div>
                <div className="button-container">
                  <button type="button" className="button"><span>{app.translate('login.register')}</span></button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
export default connect((state) => {
  return ({})
}, {
  authenticate,
})(Login)
// export default Login