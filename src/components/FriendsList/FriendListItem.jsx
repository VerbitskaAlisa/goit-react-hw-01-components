import PropTypes from 'prop-types';
import { Item,Chip, Image, Name } from './FriendsList.styled';

export const FriendListItem = ({friends}) => {
    return (friends.map(({id, avatar, name, isOnline}) => {
        return <Item key={id}>
        <Chip status={isOnline}></Chip>
        <Image src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
        </Item>
    }))};

    FriendListItem.propTypes = {
        friends: PropTypes.arrayOf( PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
        ).isRequired
    }
