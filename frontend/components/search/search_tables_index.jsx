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
      let moment = require('moment');
      let parseTime;
      return(
        <div>
          <h2>Reservations</h2>
          <ul className="search-tables-results">
            { timeList.map( table => {
              parseTime= moment.utc(table.time).format("LT");
              return <li key={table.time}>
                <button>{parseTime}</button>
              </li>;
            }) }
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tables: state.entities.searches,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       searchOpenTables: (filters) => dispatch(searchOpenTables(filters)),
//   };
// };

export default connect(mapStateToProps, null)(SearchTablesIndex);
