import React from 'react';
import $ from 'jquery';
import Profile from './Profile';
import Search from './Search';

class Overview extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      visable: 'hidden',
      username: '',
      userData:[],
      userRepos:[],
      perPage: 10
    }
  }


getUserData(){
    $.ajax({
      url: `https:api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache:false,
      success: function(data){
        this.setState({
          userData: data
        });
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username: null
        });
        console.log(err);
      }.bind(this)
    });
  }

  getUserRepos(){
    $.ajax({
      url: `https:api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache:false,
      success: function(data){
        this.setState({
          userRepos: data
        });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username: null
        });
      console.log(err);
      }.bind(this)
    });
  }

  handleFormSubmit(username){
    this.setState({
        username: username,
        visable: 'visable'
    },


    function(){
      this.getUserData();
      this.getUserRepos();
    });
  }
  componentDidMount(){

    this.getUserData();
    this.getUserRepos();
  }


  render(){
          return (
            <div className="col-md-12">
              <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
              <div className={this.state.visable} >
              <Profile {...this.state} />
              </div>
            </div>
          );
  }
}

Overview.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

Overview.defaultProps = {
  clientId: '64f8e862b4950c0bc992',
  clientSecret: 'b30cb08f69b38c2098d8ad4020ccc50972125217'
};

export default Overview;
