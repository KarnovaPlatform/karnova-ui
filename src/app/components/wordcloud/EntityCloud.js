import React from 'react'

import WordCloudV3 from './WordCloudV3/WordCloudV3'
import listData from './WordCloudV3/demo/demoData'


class EntityCloud extends React.Component {

  render () {
    let {labelKey , valueKey} = this.props;

    return (
      <div className="wordcloud">

        <WordCloudV3
          style={{ letterSpacing: 0 }}             // set custom style to wordcloud div
          data={listData}                           // array of word ( each array index is an object  includes text and value , ...) default : []
          urlKey={'text'}                       // suffix of url , default: undefined
          baseUrl={'#/jj'}                      // base of url that need for new search , default: undefined
          target={'_blank'}                     // 'this' for this window , new for new tab , default:''   should be : _blank _self _parent _top
          labelKey={labelKey}                     // what shows in word cloud ,  default:'word'
          valueKey={valueKey}                    // value of word ( frequency of that word ) ,  default:'count'
          onClick={(item) => {                    // this method return that what word has clicked ,  default:{}
            return true                        // return false : do nothing  & return true continue
          }}
          showTooltip={true}                    // show tooltip or not default: true
          width={'100%'}                        // width of wordCloud div should be in number to assign to px . min 300 , default : 300
          height={this.props.height}                       // height of wordCloud div should be in number to assign to px . min 300 , default : 300
          wordCount={this.props.wordcount}                        // maximum count of words,  default: 100
          mouseOverColor={'rgb(255,0,0)'}       // choose a color to change the word color  when mouse over
          wordColors={['#7f85e9', '#91e8e1', '#90ed7d', '#e4d354', '#f7a35c', '#f25c80', '#f7a35c', '#2b908f', '#f7a35c',]}      //{['#26f824','rgb(0, 217, 227)', '#ffb457', '#b4575c' , 'rgb(255, 194, 236)']}
        />
      </div>)
  }

}

export default  EntityCloud
