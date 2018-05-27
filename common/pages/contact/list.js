import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../modules/users';

class List extends Component {
  static fetchData(store) {
    console.log('fetch');
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        {this.props.items &&
          this.props.items.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.name}</span>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ items: state.users.items });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
