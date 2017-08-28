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
    if(this.props.tables.keys === undefined) {
      return null;
    }

    else {
      let tables = this.props.tables;
      let timeList = uniqTables(tables);
      let currentUserId = this.props.currentUserId;
      return(
        <div>
          <h2>Reservations</h2>
          <ul className="search-tables-results">
            { timeList.map( (table) => {
              debugger
              return <SearchTablesIndexItem
                key={table.time}
                table={table}
                tableId={table.tableId}
                userId={currentUserId}
                date={this.props.date}/>;
            }) }
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUserId: state.session.currentUser.id,
    tables: state.entities.searches,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       searchOpenTables: (filters) => dispatch(searchOpenTables(filters)),
//   };
// };

export default connect(mapStateToProps, null)(SearchTablesIndex);
