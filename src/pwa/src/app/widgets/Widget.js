import React from 'react'
import PropTypes from 'prop-types'
import {_get, _put, _post, _delete} from './Module'
import {WidgetBuilder} from "./common/WidgetBuilder";
import Components from "./common/component"
import app from './../services/helpers'




export default class Widget extends React.PureComponent {
    static propTypes = {
        componentKey: PropTypes.string,
        componentVersion: PropTypes.string,
        params: PropTypes.object,
        defaultData: PropTypes.object,
        urlKeys: PropTypes.object,
        defaultUrl: PropTypes.string,
        dataKey: PropTypes.string,
        componentDependencies: PropTypes.object,
        data: PropTypes.any,
        meta: PropTypes.any,
        pinAbility: PropTypes.bool,
        section: PropTypes.string,
        onRemove: PropTypes.func,
        defaultGetData: PropTypes.func,
        accessibility: PropTypes.bool,
        router: PropTypes.object,
        extra: PropTypes.any,
    };
    static defaultProps = {
        componentKey: undefined,
        componentVersion: "v1",
        params: {},
        defaultData: {},
        componentDependencies: {},
        urlKeys: {},
        url: undefined,
        dataKey: undefined,
        data: undefined,
        meta: undefined,
        pinAbility: false,
        section: undefined,
        onRemove: undefined,
        defaultGetData: undefined,
        accessibility: true,
        router: {},
        extra: [],
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {componentKey, defaultUrl, defaultGetData, params, defaultData, data, meta, urlKeys, componentVersion, accessibility, componentDependencies, pinAbility, extra, section, onRemove, router, dataKey} = this.props;

        if (!accessibility) {
            return null;
        }
        let Component = Components(componentKey, componentVersion)
        let module = () => {
        }
        if (!Component) {
            console.log('componentKey NULL : ', componentKey)
            return null
        }
        switch (Component.method) {
            case '_get':
                module = _get;
                break;
            case '_post':
                module = _post;
                break;
            case '_put':
                module = _put;
                break;
            case '_delete':
                module = _delete;
                break;
            default:
                module = _get;
        }

        return (
            <WidgetBuilder
                pinAbility={pinAbility}
                componentKey={componentKey}
                componentVersion={Component.componentVersion || 'v1'}
                url={defaultUrl ? () => defaultUrl : Component.url}
                dataKey={dataKey || Component.dataKey || 'posts'}
                constParams={app.apiService.assign({}, Component.constParams, params)}
                defaultParams={Component.defaultParams || {}}
                constData={Component.constData || {}}
                defaultData={app.apiService.assign({}, Component.defaultData, defaultData)}
                component={Component.component || undefined}
                permissions={Component.permission || []}
                urlKeys={urlKeys}
                componentDependencies={Object.assign({}, componentDependencies, Component.componentDependencies)}
                data={data}
                meta={meta}
                getData={module}
                section={section}
                onRemove={onRemove}
                extra={extra}
                defaultGetData={defaultGetData}
                router={router}
            />
        )
    }
}