import React, { Component } from 'react'
import Bio from './detail/Bio'
import TableV2 from '../table/TableV2'

class PersonDetail extends Component {

  constructor (props) {
    super(props);
    this.state={
      loading:true,
      params:{},
    }
  }



  componentDidMount () {
    this.setState({loading: true}, () => {
      this.props.getData(this.state.params, {}, () => {
        this.setState({loading: false} ,()=>{

        });
      });
    });
  }

  render () {
    if(this.state.loading)
      return <div>loading...</div>
    let {data} = this.props;
    let profile = data.profile_info;
    console.log(this.props)
    return (
      <div>
        <div className="row">
          <Bio id={data._id} fullname={profile.fullname}  headline={profile.headline}  profile_image={profile.profile_image} summery={profile.summery} location={profile.location}/>
          {/*<TableV2 data={[]}/>*/}
        </div>
      </div>
    )
  }
}

export default PersonDetail