import React from 'react';
import { connect } from 'react-redux';
import { fetchOpenTables } from '../../actions/search_actions';
import { uniqTables } from '../../reducers/selectors';
class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    if(this.props.tables.keys === undefined) {
      return (
        <h2>NOTHING RENDERED</h2>
      );
    }

    else {
      let tables = this.props.tables;
      let timeList = uniqTables(tables);
      return(
        <div>
          <h2>Reservations</h2>
          <ul className="search-tables-results">
            { timeList.map( table => {
              return <li key={table.time}>
                {table.time}
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

const mapDispatchToProps = (dispatch) => {
  return {
      fetchOpenTables: (filters) => dispatch(fetchOpenTables(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
