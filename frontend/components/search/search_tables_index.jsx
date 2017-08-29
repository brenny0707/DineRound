import React from 'react';
import { connect } from 'react-redux';
import { searchOpenTables } from '../../actions/search_actions';
import { uniqTables } from '../../reducers/selectors';
import SearchTablesIndexItem from './search_tables_index_item';
class SearchTablesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    if (this.props.currentUser === null) {
      return <div>Please sign in to create a reservation!</div>;
      }
    else if(this.props.tables.keys === undefined) {
      return <div>There are no reservations available</div>;
    }
    else {
      let tables = this.props.tables;
      let timeList = uniqTables(tables);
      let currentUser = this.props.currentUser;
      return(
        <div className="search-tables-content">
          <h2>Reservations</h2>
          <ul className="search-tables-results">
            { timeList.map( (table) => {
              return <SearchTablesIndexItem
                key={table.time}
                table={table}
                tableId={table.tableId}
                userId={currentUser.id}
                date={this.props.date}/>;
            }) }
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tables: state.entities.searches.tables,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       searchOpenTables: (filters) => dispatch(searchOpenTables(filters)),
//   };
// };

export default connect(mapStateToProps, null)(SearchTablesIndex);
