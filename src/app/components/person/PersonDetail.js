import React, { Component } from 'react'
import Bio from './detail/Bio'
import Neo from './../network/Neo'
// import AreaMap from './../../components/diagram/area/AreaMap'
import avatar from './../../../assets/img/userAvatar.png'
import noImage from './../../../assets/img/No_image.png'
import noPostImage from './../../../assets/img/no-post-image.png'

class PersonDetail extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      params: {},
    }
  }

  componentDidMount () {
    this.setState({ loading: true }, () => {
      this.props.getData(this.state.params, {}, () => {
        this.setState({ loading: false }, () => {

        })
      })
    })
  }

  render () {
    if (this.state.loading)
      return (
        <div id="preloader" className="container">
          <div id="loader"/>
        </div>
      )

    let { data } = this.props
    let profile = undefined;
    if(data)
    {
      profile = data.profile_info
    }else {
      return <div className="">
        شخصی با اطلاعات مورد نظر یافت نشد
      </div>
    }

    let articles = []
    if (data.articles)
      data.articles.map((article, index) => {
        articles.push(
          <div className="col-xl-6 col-lg-6 " key={index}>
            <div className="article">
              <a href={article.link}>
                <img className="article-image" src={noImage}/>
              </a>
              <label className="col-12 article-title">{article.title}</label>
              <label className="col-12 article-date">{article.date}</label>
            </div>
          </div>
        )
      })

    let posts = []
    if (data.posts)
      data.posts.post_data.map((post, index) => {
        posts.push(
          <div className="col-xl-6 col-lg-6" key={index}>
            <div className="post-div">
              <div className="row">

                <div className="col-xl-2 col-lg-3">
                  <img className="post-image" src={noPostImage}/>
                </div>

                <div className="col-xl-10 col-lg-9 post-detail">
                  <label className="col-12 post-title">
                    {post.title === '0' ?
                    <label className="red-warning">بدون عنوان </label>
                      : post.title
                    }
                  </label>
                  <p className="post-detail-info">{`  لایک ها ${post.likes}  -  نظرات   ${post.comments}`}</p>
                </div>

              </div>
            </div>
          </div>
        )
      })

    let experiences = []
    if (data.experiences)
      data.experiences.map((experience, index) => {
        experiences.push(
          <div className="col-12" key={index}>
            <div className="experience-div">
              <div className="row">
                <div className="col-xl-1 col-lg-1">
                  <img className="experience-image" src={noPostImage}/>
                </div>

                <div className="col-xl-11 col-lg-11 experience-detail">
                  <label className="col-12 experience-title">{experience.title === '0' ? <label className="red-warning">no
                    title</label> : experience.title}</label>
                  <label
                    className="col-12 ">{experience.secondary_title === '0' ? '' : experience.secondary_title}</label>
                  <div className="col-12">
                    {` ${experience.how_long === '0' ? '' : experience.how_long} . ${experience.duration === '0' ? '' : experience.duration}`}
                  </div>
                </div>
                <div className="col-xl-1 col-lg-1 ">

                </div>

                <div className="col-xl-11 col-lg-11">
                  <div className="line"/>
                </div>
              </div>
            </div>
          </div>
        )
      })

    let educations = []
    data.education.map((education, index) => {
      educations.push(
        <div className="col-12" key={index}>
          <div className="experience-div">
            <div className="row">

              <div className="col-xl-1 col-lg-1">
                <a href={education.href}>
                  <img className="experience-image education-image" src={noPostImage}/>
                </a>
              </div>
              <div className="col-xl-11 col-lg-11 education-detail">
                <label className="col-12 experience-title">{education.name === '0' ? <label className="red-warning">no
                  name</label> : education.name}</label>
                <div className="col-12">
                  {` ${education.how_long === '0' ? '' : education.how_long} `}
                </div>
              </div>

              <div className="col-xl-1 col-lg-1">

              </div>

              <div className="col-xl-11 col-lg-11">
                <div className="line"/>
              </div>

            </div>
          </div>
        </div>
      )
    })

    let skills = []
    if (data.skills_endorsements)
      data.skills_endorsements.map((skill, index) => {
        skills.push(
          <div className="col-xl-12 col-lg-12" key={index}>
            <div className="experience-div">
              <div className="row">

                <div className="col-xl-2 col-lg-2 skill-div">
                  <label className="col-12 experience-title pointer">{skill.skill === '0' ? <label
                    className="red-warning">no name</label> : skill.skill}</label>
                </div>

                <div className="col-xl-10 col-lg-10 approved">
                  <label>{skill.approved}</label>
                </div>


                <div className="col-12">
                  <div className="line"/>
                </div>

              </div>
            </div>
          </div>
        )
      })

    let interests = []
    data.interests.map((interest, index) => {
      interests.push(
        <div className="col-xl-6 col-lg-6" key={index}>
          <div className="experience-div">
            <div className="row">

              <div className="col-xl-2 col-lg-2">
                <a href={interest.link}>
                  <img className=" interest-image" src={avatar}/>
                </a>
              </div>

              <div className="col-xl-10 col-lg-10 interest-detail">
                <a href={interest.link}>
                  <label className="col-12 experience-title pointer">{interest.title === '0' ? <label
                    className="red-warning">no name</label> : interest.title}</label>
                </a>
                <div className="col-12 ltrdir">
                  {` دنبال کننده : ${interest.follower} نفر `}
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    })

    let accomplishments = [];
    if(data.accomplishments){
      // ober mbad karbom slide mvp talent accelator
    }

    return (
      <div>

        <Bio
          id={data._id}
          fullname={profile.fullname}
          headline={profile.headline}
          profile_image={profile.profile_image}
          summery={profile.summary}
          location={profile.location}
          dossier={data.dossier}
          loyalty={data.loyalty}
          site={profile.website[0]}
          experience={data.experiences[0] && data.experiences[0].secondary_title}
          degree={data.education[0] && data.education[0].name}
        />

        {profile.summary &&
        <div className="about-div">
          <div className="p-3">
            <label className="col-12 p-0 about-text">{app.translate('درباره : ')}</label>
            <label className="col-12 p-3 summary-text">{profile.summary}</label>
          </div>
        </div>
        }

        {data.articles &&
        <div className="featured-div">
          <label className="col-12 p-3 article-div-title">{app.translate('مقالات')}</label>
          <div className="row p-3">
            {articles[0] && articles[0]}
            {articles.length > 1 && articles[1] && articles[1]}
          </div>
        </div>
        }


        {data.posts &&
        <div className="posts-div">
          <label className="col-12 p-3 article-div-title">{app.translate('نوشته ها : ')}</label>
          <label className="col-12 rtldir">{`${app.translate('دنبال کنندگان : ')} ${data.posts.followers}`}</label>
          <div className="row p-3">
            {posts[0] && posts[0]}
            {posts[1] && posts[1]}
            {posts[2] && posts[2]}
            {posts[3] && posts[3]}
          </div>
        </div>
        }

        {data.experiences &&
        <div className="experiences-div">
          <label className="col-12 p-3 article-div-title">{app.translate('سوابق کاری : ')}</label>
          <div className="row p-3">
            {experiences}
          </div>
        </div>
        }


        {data.education && data.education.length > 0 &&
        <div className="experiences-div">
          <label className="col-12 p-3 article-div-title">{app.translate('تحصیلات : ')}</label>
          <div className="row p-3">
            {educations}
          </div>
        </div>
        }

        {data.skills_endorsements && data.skills_endorsements.length > 0 &&
        <div className="experiences-div">
          <label className="col-12 p-3 article-div-title">{app.translate('مهارت ها : ')}</label>
          <div className="row p-3">
            <div className="col-xl-12 col-lg-12" key={-1}>
              <div className="experience-div">
                <div className="row">

                  <div className="col-xl-2 col-lg-2 skill-div">
                    <label className="col-12 experience-title pointer">{app.translate('عنوان مهارت ')}</label>
                  </div>

                  <div className="col-xl-10 col-lg-10 approved">
                    <label>{app.translate('تعداد تایید کننده')}</label>
                  </div>


                  <div className="col-12">
                    <div className="line"/>
                  </div>

                </div>
              </div>
            </div>
            {skills[0]}
            {skills[1]}
            {skills[2]}
            {skills[3]}
          </div>
        </div>
        }

        {data.interests &&
        <div className="posts-div">
          <label className="col-12 p-3 article-div-title">{app.translate('علاقه مندی ها : ')}</label>
          <div className="row p-3">
            {interests[0] && interests[0]}
            {interests[1] && interests[1]}
            {interests[2] && interests[2]}
            {interests[3] && interests[3]}
          </div>
        </div>
        }


        <div className="row pt-3">
          <div className="col-xl-6 col-lg-6 col-md-12 neo">
            <Neo onClick={(node) => {console.log('node id', node)}}/>
          </div>
        </div>

      </div>
    )
  }
}

export default PersonDetail