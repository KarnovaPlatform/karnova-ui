import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TabPanel from './TabPanel'
import TabItem from './TabItem'
import './common/style.css'
import checkExistComponent from './../../widgets/common/component'

let blankPanel =
  <div className="blank-panel">
    <h6 className="blank-panel-text">{'no panel'}</h6>
  </div>

class CustomTabs extends Component {
  static propTypes = {
    changeAble: PropTypes.bool,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      panel: PropTypes.node,
      backgroundColor: PropTypes.string,
      style: PropTypes.object,
      activeStyle: PropTypes.object,
      icon: PropTypes.element,
      onRemove: PropTypes.func,
      componentKey:PropTypes.string,
    })),
    defaultActiveTab: PropTypes.number,
    tabItemKey: PropTypes.string,
    tabPanelKey: PropTypes.string,
    tabItemStyle: PropTypes.object,
    tabPanelStyle: PropTypes.object,
    activeTabColor: PropTypes.string,
    activeTabStyle: PropTypes.object,
    sortedTabsKeysArray:PropTypes.array,
    showAllTabs:PropTypes.bool,
    ComponentUniqueKeyName: PropTypes.string,
  }

  static defaultProps = {
    changeAble: true,
    defaultActiveTab: 0,
    tabs: [{ label: 'blank tab', panel: blankPanel }],
    tabItemKey: 'label',
    tabPanelKey: 'panel',
    tabItemStyle: undefined,
    tabPanelStyle: undefined,
    activeTabColor: undefined,
    activeTabStyle: undefined,
    sortedTabsKeysArray: undefined,
    showAllTabs: false,
    ComponentUniqueKeyName:"undefined"
  }

  constructor (props) {
    super(props)
    let active = (props.tabs && props.defaultActiveTab &&
      props.tabs.length > props.defaultActiveTab && props.defaultActiveTab > -1) ? props.defaultActiveTab : 0
    this.state = {
      changeAble: props.changeAble,
      activeTabIndex: active,
      selectedTabsPanels: [],
      tabs: this.getExistTabs(props.tabs , props.sortedTabsKeysArray),
    }
  }

  getExistTabs = (tabs= [] , sortedKeys )=>{
    let arr = [] ;
    let sortedTabs = this.sortTabs(tabs , sortedKeys);
    sortedTabs.map((item , index) =>{
      if(item.componentKey){
        if(checkExistComponent(item.componentKey)){
          arr.push(item)
        }
      }else {
        arr.push(item)
      }
    })
    return arr ;
  }

  sortTabs= (tabs , sortedKeys)=>{
    let resultArr = [];
    if(sortedKeys && sortedKeys.length >-1){
      let showAll = this.props.showAllTabs;
      sortedKeys.map((componentKey)=>{
        let find = tabs.findIndex((tab)=>tab.componentKey && tab.componentKey===componentKey)
        if(find > -1) {
          resultArr.push(tabs[find])
          if(showAll)
            tabs.splice(find , 1)
        }
      })
      if(showAll ) {
        tabs.map((tab) => {
          resultArr.push(tab)
        })
      }
    }
    else {
      return tabs
    }
    return resultArr;
  }

  componentDidMount () {
    window && window.addEventListener && window.addEventListener('resize', this.handelResize)
    let {  tabPanelKey, tabPanelStyle } = this.props
    let { selectedTabsPanels, activeTabIndex , tabs } = this.state
    if (tabs && tabs.length > 0) {
      selectedTabsPanels[activeTabIndex] = <TabPanel key={activeTabIndex}
                                                     style={tabPanelStyle && tabPanelStyle}
                                                     Component={tabs[activeTabIndex][tabPanelKey]}
                                                     index={activeTabIndex}
                                                     active={activeTabIndex}/>
      this.setState({ selectedTabsPanels })
    }
  }

  handelResize = () => {
    this.setState({ changeAble: false }, () => {
      let { selectedTabsPanels, activeTabIndex } = this.state
      selectedTabsPanels.map((item, index) => {
        if (index === activeTabIndex)
          selectedTabsPanels[index] = selectedTabsPanels[activeTabIndex]
        else
          selectedTabsPanels[index] = undefined
      })
      setTimeout(() => {this.setState({ selectedTabsPanels, changeAble: true })}, 2000)
    })
  }

  componentWillUnmount () {
    window && window.removeEventListener && window.removeEventListener('resize', this.handelResize)
  }

  setTab = (clickedTabIndex) => {
    if (this.state.changeAble) {
      let { selectedTabsPanels, activeTabIndex , tabs } = this.state
      let { tabPanelStyle , tabPanelKey } = this.props
      if (clickedTabIndex !== activeTabIndex) {
        if (!selectedTabsPanels[clickedTabIndex])
          selectedTabsPanels[clickedTabIndex] = <TabPanel key={clickedTabIndex}
                                                          style={tabPanelStyle && tabPanelStyle}
                                                          Component={tabs[clickedTabIndex][tabPanelKey]}
                                                          index={clickedTabIndex}
                                                          active={clickedTabIndex}/>
        selectedTabsPanels.map((panel, index) => {
          if (selectedTabsPanels[index]) {
            selectedTabsPanels[index] = <TabPanel key={index}
                                                  style={tabPanelStyle && tabPanelStyle}
                                                  Component={tabs[index][tabPanelKey]}
                                                  display={clickedTabIndex===index ? 'block' : 'none'}
                                                  index={index}
                                                  active={clickedTabIndex}/>
          }
        })
        this.setState({ activeTabIndex: clickedTabIndex, selectedTabsPanels })
      }
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    if (!app._.isEqual(nextProps, this.props)) {
      let active = (nextProps.tabs && nextProps.defaultActiveTab &&
        nextProps.tabs.length > nextProps.defaultActiveTab && nextProps.defaultActiveTab > -1) ? nextProps.defaultActiveTab : 0
      this.setState({
        changeAble: nextProps.changeAble,
        activeTabIndex: active,
        selectedTabsPanels: [],
        tabs : this.getExistTabs(nextProps.tabs, nextProps.sortedTabsKeysArray),
      }, () => this.componentDidMount())
    }
  }

  render () {
    let { activeTabIndex, selectedTabsPanels, tabs } = this.state
    let { tabItemKey, activeTabColor, tabItemStyle, activeTabStyle,ComponentUniqueKeyName} = this.props
    let tabsItems = tabs.map((tab, index) => {
      return (
        <TabItem key={index} index={index} activeTabIndex={activeTabIndex} label={tab[tabItemKey]} style={tabItemStyle}
                 activeBackgroundColor={activeTabColor}
                 backgroundColor={tab.backgroundColor && tab.backgroundColor}
                 customStyle={tab.style && tab.style}
                 customActiveStyle={tab.activeStyle && tab.activeStyle}
                 icon={tab.icon && tab.icon}
                 activeStyle={activeTabStyle}
                 onClick={this.setTab}
                 onRemove={tab.onRemove}
                 ComponentUniqueKeyName={ComponentUniqueKeyName}
                 componentKey={tab.componentKey}

        />)
    })
    return (
      <div>
        <ul className="row list-inline p-0 m-0 tab-items">
          {tabsItems}
        </ul>
        {selectedTabsPanels.map(panel => panel)}
      </div>
    )
  }
}

export default CustomTabs