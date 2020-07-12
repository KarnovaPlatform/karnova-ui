import React, { Component } from 'react'
import Index from '../WordCloudV3'
import demoData from './demoData'

class Demo extends Component {
  render () {

    let listData = demoData;


    return (
      <div>

        {/*

          for use this component you should send an array in props to listData like
          labelKey is a string  and is word text
              example : let labelKey = 'text';

          valueKey is a string  and is word frequency
              example : let valueKey = 'value';

          listData is an array of words object
          example :
              listData = {
              [
                {
                  labelKey:  string,
                  valueKey:   number
                },{
                  labelKey:  string,
                  valueKey:   number
                }
                ...
               ]

           you can send style for wordCloudComponent's parent
           example :
               style={{
                border: '1px solid #fff',
                borderRadius: '10px',
                boxShadow:'0px 5px 3px #666',
                padding: '20px',
                background: `url(https://freedesignfile.com/upload/2016/11/Light-blue-wavy-abstract-background-vector-01.jpg) center center`,
                backgroundSize:'cover'
              }}

           you can set className to wordCloud component's parent  and set another style in your component's style file or bootstrap
           example :
                className={'container'}

           you can make words  clickable and when words clicked pass client to another page
           set baseUrl to go to which website like google:
           example :
                  baseUrl={'https://google.com/?q='}
           urlKey is parameter for that baseUrl . urlKey returns that words index or text  or id
           example :
                  urlKey={'text'}
                  url is : baseUrl + word[urlKey] : like 'https://google.com/?q= الودگی هوا'
           you can set where new window load . in this tab or new tab
           by set target .
           example :
                  target={'_blank'}
                  _blank is for new tab and _self for this tab

           if your listData isn't like
           listData = {
              [
                {
                  labelKey:  string,
                  valueKey:   number
                },{
                  labelKey:  string,
                  valueKey:   number
                }
                ...
               ]
            you can set which index is your listData in word object is word's text and which index is word's count
            labelKey is word's text
            example :
                    labelKey={'text'}
             valueKey is word's count
             example :
                    valueKey={'number'}

             you can handle onclick function by set onclick props
              in first you receive that word's object was clicked
                after that set continue or don't redirect by returning boolean : true for continue and false for don't redirect;
                example:
                      onClick={(item)=>{
                        let result  = check( item ) ;
                        if (result == true)
                          return true;
                        else
                          return false:

              if you move mouse over a word some works will do like showing tool tipe and changing words color
              you can set onMouseOverColor
              example :
                    mouseOverColor={'red'} or 'rgb( , , )' or rgba or ... #.....
              and show tool tip or not
              example :
              showTooltip={true}

              you can set how many words show in wordCloud by setting WordCount
              example:
              wordCount={100}

              you can send colors for words color
              send an array of colors
              example :
                    wordColors={[ 'red' , 'black' , '']}

              you can set size of your wordCloud by sending width and height each of them can be string or number
              in pixel number
              in percent string

              example :
                      width={'100%'} or width={100}
                      height={'100%'} or width={100}

        */}
        <Index
          style={{}}             // set custom style to wordcloud div
          data={data}                           // array of word ( each array index is an object  includes text and value , ...) default : []
          urlKey={'text'}                       // suffix of url , default: undefined
          baseUrl={'#/jj'}                      // base of url that need for new search , default: undefined
          target={'_blank'}                     // 'this' for this window , new for new tab , default:''   should be : _blank _self _parent _top
          labelKey={'text'}                     // what shows in word cloud ,  default:'word'
          valueKey={'value'}                    // value of word ( frequency of that word ) ,  default:'count'
          onClick={(item)=>{                    // this method return that what word has clicked ,  default:{}
            return true;                        // return false : do nothing  & return true continue
          }}
          showTooltip={true}                    // show tooltip or not default: true
          width={'100%'}                        // width of wordCloud div should be in number to assign to px . min 300 , default : 300
          height={'100%'}                       // height of wordCloud div should be in number to assign to px . min 300 , default : 300
          wordCount={50}                        // maximum count of words,  default: 100
          mouseOverColor={'rgb(255,0,0)'}       // choose a color to change the word color  when mouse over
          wordColors={['#1f77b4']}
        />
        <hr />

        <Index
          style={{
            border: '1px solid #fff',
            borderRadius: '10px',
            boxShadow:'0px 5px 3px #666',
            padding: '20px',
            background: `url(https://freedesignfile.com/upload/2016/11/Light-blue-wavy-abstract-background-vector-01.jpg) center center`,
            backgroundSize:'cover'
          }}             // set custom style to wordcloud div
          data={data}                           // array of word ( each array index is an object  includes text and value , ...) default : []
          urlKey={'text'}                       // suffix of url , default: undefined
          baseUrl={'#/jj'}                      // base of url that need for new search , default: undefined
          target={'_blank'}                     // 'this' for this window , new for new tab , default:''   should be : _blank _self _parent _top
          labelKey={'text'}                     // what shows in word cloud ,  default:'word'
          valueKey={'value'}                    // value of word ( frequency of that word ) ,  default:'count'
          onClick={(e)=>{                       // this method return that what word has clicked ,  default:{}
            return true;                        // return false : do nothing  & return true continue
          }}
          showTooltip={true}                    // show tooltip or not default: true
          width={'100%'}                         // width of wordCloud div should be in number to assign to px . min 300 , default : 300
          height={'100%'}                       // height of wordCloud div should be in number to assign to px . min 300 , default : 300
          wordCount={50}                        // maximum count of words,  default: 100
          mouseOverColor={'rgb(0 , 100 , 0)'}   // choose a color to change the word color  when mouse over

        />


        <hr />

        <Index
          style={{
            border: '0px solid #fff',
            borderRadius: '10px',
            boxShadow:'0px 0px 0px #666',
            padding: '20px',
            background: `url(https://png.pngtree.com/thumb_back/fw800/background/20190903/pngtree-white-background-with-blue-smoke-on-sides-image_312167.jpg) center center`,
            backgroundSize:'100% 100%'
          }}             // set custom style to wordcloud div
          data={data}                           // array of word ( each array index is an object  includes text and value , ...) default : []
          urlKey={'text'}                       // suffix of url , default: undefined
          baseUrl={'#/jj'}                      // base of url that need for new search , default: undefined
          target={'_blank'}                     // 'this' for this window , new for new tab , default:''   should be : _blank _self _parent _top
          labelKey={'text'}                     // what shows in word cloud ,  default:'word'
          valueKey={'value'}                    // value of word ( frequency of that word ) ,  default:'count'
          onClick={(e)=>{                       // this method return that what word has clicked ,  default:{}
            return true;                        // return false : do nothing  & return true continue
          }}
          showTooltip={true}                    // show tooltip or not default: true
          width={'100%'}                         // width of wordCloud div should be in number to assign to px . min 300 , default : 300
          height={'100%'}                       // height of wordCloud div should be in number to assign to px . min 300 , default : 300
          wordCount={50}                        // maximum count of words,  default: 100
          mouseOverColor={'rgb(0 , 0 , 100)'}   // choose a color to change the word color  when mouse over

        />
        <hr />

      </div>
    )
  }
}

export default Demo