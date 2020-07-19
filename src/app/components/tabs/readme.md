this component use bootstrap . and use fontawsome for icons 

props:

defaultActiveTab : index of tab in tabs array 0 to tabs.length -1
    if out of array bounds active tab is 0
    
tabs: array of tab
each array index should be an object 
like :
{
    label: String for tab label,
    panel: html element for tabs panel,
}

tabItemKey : string . key of tab label in tab object from tabs
default is 'label' . you can change it

tabPanelKey : string . key of tab panel in tab object from tabs.
default is 'panel' . you can change it

tabItemStyle : style for tabs . sets for all tabs .

tabPanelStyle : style for panels . sets for all panels .

activeTabColor : set color for active tas background color.
default is white

activeTabStyle : set style for tab that is active 

each tab can have custom style and custom active style and icon . 
you can set in tabs array for each tabs . 
like:
{
    label: "روند انتشار",
    backgroundColor:'rgba(152,203,243,0.63)',
    style:{color:'white' },
    activeStyle:{color:'black'},
    icon: <i className="fa fa-line-chart "/>,
    panel: <div>a</div>
},


sample : 
 <CustomTabs
    tabs={[
        {
            label: "روند انتشار",
            backgroundColor:'rgba(152,203,243,0.63)',
            style:{color:'white' },
            activeStyle:{color:'black'},
            icon: <i className="fa fa-line-chart "/>,
            panel: a
        },
        {
            label: 'روند دریافت',
            backgroundColor:'rgba(116,193,248,0.63)',
            style:{color:'white'},
            activeStyle:{color:'red'},
            icon: <i className="fa fa-line-chart "/>,
            panel: b
        },
         {
             label: 'روند انتشار',
             backgroundColor:'rgba(42,160,255,0.63)',
             panel: c
         },
         {
             label: 'روند دریافت',
             backgroundColor:'rgba(0,143,252,0.63)',
             panel: d
         }
    ]}
    defaultActiveTab={1}
    tabItemStyle={{direction:'rtl' , color:'white' , background:'purple' , padding:'10px'}}
    activeTabStyle={{color:'black' , background:'white'}}
    activeTabColor={'green'}
 />
 
 // in news publication flows  
        let a = <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12" >
             <Widget
                 componentKey={`news.${lang}.agencies.news.actions.publicationFlow`}
                 lang={lang}
             />
         </div>
         let b = <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12" >
             <Widget
                 componentKey={`news.${lang}.agencies.news.actions.receivingFlow`}
                 lang={lang}
             />
         </div>
         let c = <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12" >
             <Widget
                 componentKey={`news.${lang}.agencies.news.actions.receivingFlow`}
                 lang={lang}
             />
         </div>
         let d = <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12" >
             <Widget
                 componentKey={`news.${lang}.agencies.news.actions.receivingFlow`}
                 lang={lang}
             />
         </div>