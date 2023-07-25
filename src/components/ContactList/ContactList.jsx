import { Component } from "react";
import { List, Button } from "./ContactList.styled";
import PropTypes from 'prop-types';

class ContactList extends Component {
    static defaultProps = {
        contacts: [],
    };

    static propTypes = {
        handleClick: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
        ).isRequired,
    };
    
    render() {
        const { contacts, handleClick } = this.props;      
        return (
            <>
                <List>
                {contacts.length !== 0 ? (
                    contacts.map(({ id, name, number }) => (
                     <li key={id}>
                        {name} - {number}
                        <Button type="button" onClick={() => handleClick(id)}>
                            Delete
                        </Button>
                    </li>
                    ))
                    ) : (
                        <p>There are no contacts.</p>
                    )}
                </List>
            </>
        )
    }
}
export default ContactList;