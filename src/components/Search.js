import React from 'react';

class Search extends React.Component{
  onSubmit(event){
    event.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username){
      alert('Please enter a username');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }

  render(){
          return (



  <div className="Search">
    <form onSubmit={this.onSubmit.bind(this)}>
            <label>Search Github Users</label>
            <input type="text" ref="username" className="form-control" />
    </form>
  </div>

);
}
}

export default Search;
