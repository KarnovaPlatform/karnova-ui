import React from 'react'
import {select} from 'd3-selection'
import WordCloud from 'react-wordcloud'
import PropTypes from 'prop-types'
import _ from 'lodash'

let lastFill = ''
let windowResizeDate = 0;

const getCallback =  (callback, props = {}) => {
    return (word, event) => {
        const element = event.target
        const text = select(element)
        if (callback === 'onWordMouseOver') {
            lastFill = text.attr('fill')
            text.attr('fill', props.mouseOverColor)
        }
        if (callback === 'onWordMouseOut') {
            text.attr('fill', lastFill)
        }
        if (callback === 'onWordClick') {
            if (props.onClick(word)) {
                if (word && props.baseUrl) {
                    let link = document.createElement(`a`)
                    link.href = `${props.baseUrl}${props.urlKey ? word[props.urlKey] : props.labelKey ? word[props.labelKey] : word[props.valueKey]}`
                    link.setAttribute(`target`, props.target)
                    document.body.appendChild(link)
                    link.click()
                }
            }
        }
    }
}


class WordCloudV3 extends React.Component {

    static propTypes = {
        data: PropTypes.array,
        urlKey: PropTypes.string,
        baseUrl: PropTypes.string,
        target: PropTypes.string,
        labelKey: PropTypes.string,
        valueKey: PropTypes.string,
        onClick: PropTypes.func,
        showTooltip: PropTypes.bool,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        wordCount: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        mouseOverColor: PropTypes.string,
        wordColors: PropTypes.array,
    }
    static  defaultProps = {
        data: {},
        urlKey: '',
        baseUrl: undefined,
        target: '_blank',
        labelKey: 'word',
        valueKey: 'count',
        onClick: (text) => true,
        showTooltip: true,
        width: 300,
        height: 300,
        wordCount: 100,
        style: {},
        className: undefined,
        mouseOverColor: 'rgb(0 , 100 , 0)',
        wordColors: ['#1f77b4', '#2ca02c', '#0b3d48', '#9467bd', '#8c564b']
    }


    constructor(props) {
        super(props)
        this.parent = null
        this.state = {
            windowResize: 0,
            render: false,
            resizeChange: false,
            words: [],
            boxSize: [300, 300],
            resizeDelay: 250
        }
    }

    componentDidMount() {
        window.addEventListener('resize', (e) => this.update(e.timeStamp));
        this._onReload(this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.resizeChange !== this.state.resizeChange) {
            this.setState({render: false}, () => {
                this.setState({render: true})
            })
        }
    }

    UNSAFE_componentWillReceiveProps(np) {
        if (!_.isEqual(np.data, this.props.data)) {
            this._onReload(np)
        }
    }

    _onReload = (props) => {
        this.setState({words: [], render: false}, () => {
            let {data, labelKey, wordCount, valueKey} = props
            let arr = []
            let boxSize = this.getParentSize();
            for (let i = 0; i < data.length && i < wordCount; i++) {
                arr.push({
                    'text': data[i][labelKey],
                    'value': data[i][valueKey],
                })
            }
            this.setState({words: arr, boxSize, render: true})
        })
    }

    update = (e) => {
        let d = new Date();
        windowResizeDate = d
        setTimeout(this.checkResize, this.state.resizeDelay)
    }

    getParentSize = () => {
        let _width = 300
        let _height = 300

        if (this.parent) {
            _width = this.parent.offsetWidth || 300
            _height = this.parent.offsetHeight || 300
        }
        return [_width, _height]
    }

    checkResize = () => {
        let d = new Date();
        if ((d - windowResizeDate) >= this.state.resizeDelay) {
            let boxSize = this.getParentSize();
            this.setState({boxSize, resizeChange: !this.state.resizeChange})
        }
    }

    render() {
        let {data, showTooltip, wordCount, width, height, style, className, wordColors} = this.props
        let {boxSize, render} = this.state

        let _wordCount = wordCount < data.length ? wordCount : data.length
        let rotatable = _wordCount > 10 ? 1 : 0
        let maxFountSize = 14 + _wordCount < 50 ? _wordCount : 50;
        const options = {
            colors: wordColors,
            enableTooltip: showTooltip,
            deterministic: true,
            fontFamily: 'Vazir',
            fontSizes: [14, maxFountSize],
            fontStyle: 'normal',
            fontWeight: 'bold',
            padding: 2,
            rotations: 2,
            rotationAngles: [rotatable * -90, 0],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 2000,
        }
        const callbacks = {
            onWordClick: getCallback('onWordClick', this.props),
            onWordMouseOut: getCallback('onWordMouseOut', this.props),
            onWordMouseOver: getCallback('onWordMouseOver', this.props),
        }

        return (
            <div ref={(el) => this.parent = el}
                className={className}
                style={
                    Object.assign({
                        height: height,
                        width: width,
                        margin: '0 auto',
                        // overflow: 'hidden'
                    }, style)}>
                <div style={{height: '100%'}} >
                    {render &&
                    <WordCloud
                        minsize={[300, 300]}
                        size={boxSize}
                        wordCount={wordCount}
                        options={options}
                        callbacks={callbacks}
                        words={data}
                    /> }
                </div>
            </div>
        )
    }
}

export default WordCloudV3