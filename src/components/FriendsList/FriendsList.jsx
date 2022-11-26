import PropTypes from 'prop-types';
import { List, Item,Chip, Image, Name } from './FriendsList.styled';


export const FriendsList = ({data: friends}) => {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) => {
                return <Item key={id}>
                <Chip status={isOnline}></Chip>
                <Image src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
                </Item>
            })}
        </List>
    );
};

FriendsList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
};
