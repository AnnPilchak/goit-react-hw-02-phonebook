import { Component } from "react";
import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

class Filter extends Component {
    static propTypes = {
        filterValue: PropTypes.string.isRequired,
        onFilter: PropTypes.func.isRequired,
    };
    render() { 
        const { filterValue, onFilter } = this.props;
        return ( 
        <label>
            Find contacts by name
            <Input
            type="text"
            name="filter"
            onChange={onFilter}
            value={filterValue}
            ></Input>
        </label>
        );
    }
}
 
export default Filter;