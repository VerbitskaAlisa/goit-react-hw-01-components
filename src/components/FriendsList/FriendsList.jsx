import PropTypes from 'prop-types';
import { List } from './FriendsList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({data: friends}) => {
    return (
        <List>
           <FriendListItem friends={friends}/>
        </List>
    );
};

FriendsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};
