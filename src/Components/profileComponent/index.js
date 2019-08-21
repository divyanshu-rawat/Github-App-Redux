import React from "react";
import loader from "../../Assets/loader.gif";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.userRepositories = this.props.state.USER_PROFILE_REDUCER.data.userRepositories;
    this.getStars = this.getStars.bind(this);
    this.getForks = this.getForks.bind(this);
  }

  getStars() {
    let totalStars = 0;
    this.userRepositories.forEach(repo => {
      totalStars += repo.stargazers_count;
    });
    return totalStars;
  }

  getForks() {
    let totalForks = 0;
    this.userRepositories.forEach(repo => {
      totalForks += repo.forks_count;
    });
    return totalForks;
  }

  render() {
    const { isFetching } = this.props.state.USER_PROFILE_REDUCER;
    const {
      userProfileInformation
    } = this.props.state.USER_PROFILE_REDUCER.data;

    if (isFetching) {
      return (
        <div>
          <img src={loader} />
        </div>
      );
    }
    return (
      <div>
        <div className="flex flex-row m-t-2em pd-2em black-border">
          <div className="flex flex-col black-border pd-2em ">
            <div className="username-profile-picture-wrapper flex flex-row">
              <div className="profile-picture-wrapper">
                <img
                  src={userProfileInformation.avatar_url}
                  className="profile-picture"
                />
              </div>
              <div className="m-l-1em username-wrapper">
                <p className="username">{userProfileInformation.name}</p>
                <p className="portfolio">{userProfileInformation.blog}</p>
              </div>
            </div>
            <div className="git-statistics">
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Followers</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.followers}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Following</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.following}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">public Repositories</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.public_repos}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Stars Received</h3>
                <p className="stats-list-item-paragraph">{this.getStars()}</p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Forks by users</h3>
                <p className="stats-list-item-paragraph">{this.getForks()}</p>
              </div>
            </div>
            <div />
            <div />
          </div>
          <div className="flex flex-col black-border" />
        </div>
      </div>
    );
  }
}
