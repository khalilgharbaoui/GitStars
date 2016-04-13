import React from 'react';
import RepoList from './RepoList';


class Profile extends React.Component{

  render(){
    if (this.props.userData.email === null)
      var email = 'user e-mail is private';
    else
      var email = this.props.userData.email;

    if (this.props.userData.location === null)
      var location = 'user location is private';
    else
      var location = this.props.userData.location;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.userData.name}
          </h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src={this.props.userData.avatar_url}
                className="thumbnail"
                style={{width:"100%"}} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">
                    {this.props.userData.public_repos} Repos
                  </span>
                  <span className="label label-success">
                    {this.props.userData.public_gists} Gists
                  </span>
                  <span className="label label-info">
                    {this.props.userData.followers} Followers
                  </span>
                  <span className="label label-danger">
                    {this.props.userData.following} Following
                  </span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Username: </strong>
                      {this.props.userData.login}
                    </li>
                    <li className="list-group-item">
                      <strong>Location: </strong>
                      {location}
                    </li>
                    <li className="list-group-item">
                      <strong>Email Adres: </strong>
                      {email}
                    </li>

                  </ul>
                </div>
              </div>
              <br />
              <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
            </div>
          </div>
          <h3>User Repos:</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    );
  }
}

export default Profile;
