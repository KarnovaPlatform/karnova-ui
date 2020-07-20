import React, { Component } from 'react'
import Bio from './detail/Bio'
import Neo from './../network/Neo'

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
    return (
      <div>
        <div className="row">
          <Bio
            id={data._id}
            fullname={profile.fullname}
            headline={profile.headline}
            profile_image={profile.profile_image}
            summery={profile.summery}
            location={profile.location}
            dossier={data.dossier}
            loyalty={data.loyalty}
          />
        </div>
        <div className="row pt-3">
          <div className="col-xl-6 col-lg-6 col-md-12 neo">
            <Neo onClick={ (node)=>{console.log('node id' , node)}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonDetail