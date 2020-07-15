import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store/configureStore';
import Notfound from './Notfound';
import {ParamsContext} from './params-context';
import app from './../../services/helpers'




export class WidgetBuilder extends React.PureComponent {
  static propTypes = {
    component: PropTypes.any,
    componentKey: PropTypes.string,
    componentVersion: PropTypes.string,
    url: PropTypes.func,
    dataKey: PropTypes.string,
    constParams: PropTypes.object,
    defaultParams: PropTypes.object,
    constData: PropTypes.object,
    defaultData: PropTypes.object,
    getData: PropTypes.func,
    data: PropTypes.any,
    meta: PropTypes.any,
    urlKeys: PropTypes.object,
    componentDependencies: PropTypes.object,
    pinAbility: PropTypes.bool,
    permissions: PropTypes.array,
  };
  static defaultProps = {
    component: null,
    componentKey: null,
    componentVersion: 'v1',
    url: () => `instagram/v1/posts`,
    dataKey: 'posts',
    constParams: {},
    defaultParams: {},
    constData: {},
    defaultData: {},
    getData: undefined,
    data: undefined,
    meta: undefined,
    urlKeys: {},
    componentDependencies: {},
    pinAbility: false,
    permissions: [],
  };

  constructor(props) {
    super(props);
    this.mount = false;
    this._randomKey = '0';
    this.state = {
      data: props.data || undefined,
      meta: props.meta || {},
      _randomKey: '0',
      contextParams: {},
    };

  }

  componentDidMount() {
    this.mount = true;
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (!app._.isEqual(np.url, this.props.url) ||
        !app._.isEqual(np.getData, this.props.getData) ||
        !app._.isEqual(np.constData, this.props.constData) ||
        !app._.isEqual(np.defaultData, this.props.defaultData) ||
        !app._.isEqual(np.defaultParams, this.props.defaultParams) ||
        !app._.isEqual(np.urlKeys, this.props.urlKeys) ||
        !app._.isEqual(np.defaultGetData, this.props.defaultGetData) ||
        !app._.isEqual(np.componentDependencies,
            this.props.componentDependencies) ||
        !app._.isEqual(np.constParams, this.props.constParams)) {

      this._changeRandomKey();
    }
  }

  _changeRandomKey = () => {

    this._randomKey = `${Math.random()}`;

    this.setState({_randomKey: this._randomKey});
  };

  componentWillUnmount() {
    this.mount = false;
  }

  _callbackData = (error, result, callback) => {
    const {dataKey, componentDependencies} = this.props;

    let data = null;
    let meta = {};
    if (!error && result && result.data) {
      data = [];
      data = result.data[dataKey] || undefined;
      meta = result.meta || {};
    }
    if (this.mount) {
      this.setState({data, meta}, () => {
        callback && callback(error, result);

        componentDependencies && componentDependencies.getDataCallback &&
        componentDependencies.getDataCallback(error, result);
      });
    }
  };

  _getData = (params, data, callback) => {
    const {url, getData, constData, defaultData, constParams, defaultParams, urlKeys, defaultGetData} = this.props;
    if (getData) {
      this.setState({
        data: this.state._randomKey === this._randomKey
            ? this.state.data
            : undefined,
        meta: this.state._randomKey === this._randomKey
            ? this.state.meta
            : undefined,
      }, () => {

        let _url = url(urlKeys);

        // console.log('params, constParams, defaultParams', _url, params, constParams, defaultParams);

        let _params = app.apiService.assign({}, defaultParams, params,
            constParams);

        // let _params = {options: {} } ;
        // _params.options['search'] = params;
        // _params.options['const'] = constParams;
        // _params.options['default'] = defaultParams;

        let _data = app.apiService.assign({}, defaultData, data, constData);

        this.setState({contextParams: {params: _params, data: _data, componentDependencies: this.props.componentDependencies , defaultUrl:_url}});

        if (defaultGetData) {
          defaultGetData(_params, _data,
              (error, result) => this._callbackData(error, result, callback));
        } else {
          store.dispatch(getData(_url, _params, _data,
              (error, result) => this._callbackData(error, result, callback)));
        }

      });
    }
  };

  render() {
    const {componentDependencies, componentVersion, component, componentKey, pinAbility, permissions, ...rest} = this.props;
    const {data, meta, _randomKey, contextParams} = this.state;
    let Component = component;

    if (!component && this.mount && app.ability(permissions)) {
      console.log('permissions', permissions);
      return null;
    }

    return (<ParamsContext.Provider value={contextParams} >
      <Component
          {...rest}
          data={data}
          pinKey={pinAbility ? componentKey : undefined}
          randomKey={_randomKey}
          componentKey={componentKey}
          componentVersion={componentVersion}
          meta={meta}
          {...componentDependencies}
          getData={this._getData}
          changeRandomKey={this._changeRandomKey}
      />
    </ParamsContext.Provider>);
  }
}
