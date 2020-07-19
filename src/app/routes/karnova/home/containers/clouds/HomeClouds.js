import React, { Component } from 'react'
import CustomTabs from '../../../../../components/tabs/CustomTabs'
import Widget from '../../../../../widgets/Widget'

class HomeClouds extends Component {

  render () {
    let lang = 'fa'
    return (
      <div className="pt-3">
        <CustomTabs tabs={[
          {
            label:'home.cloud.tab.interests',
            panel:<div>
              <Widget
                componentKey={`linkedin.${lang}.person.profile.cloud`}
                componentDependencies={{
                  size:60,
                  type:'interest'
                }}
              />
            </div>
          },
          {
            label:'home.cloud.tab.skills',
            panel:<div>
              <Widget
                componentKey={`linkedin.${lang}.person.profile.cloud`}
                componentDependencies={{
                  size:60,
                  type:'skill'
                }}
              />
            </div>
          },
          {
            label:'home.cloud.tab.location',
            panel:<div>
              <Widget
                componentKey={`linkedin.${lang}.person.profile.cloud`}
                componentDependencies={{
                  size:60,
                  type:'location'
                }}
              />
            </div>
          }
        ]}/>
      </div>
    )
  }
}

export default HomeClouds