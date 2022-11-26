import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Stats, Username, Tag, Location, StatsItem, StatsDescription } from './Profile.styled';

export const Profile = ({username, tag, location,avatar, stats}) => {
 return (<ProfileCard>
 <Description>
   <Avatar
     src={avatar}
     alt="User avatar"
   />
   <Username>{username}</Username>
   <Tag>@{tag}</Tag>
   <Location>{location}</Location>
 </Description>

 <Stats>
   <StatsItem>
     <StatsDescription>Followers</StatsDescription>
     <span>{stats.followers}</span>
   </StatsItem>
   <StatsItem>
     <StatsDescription>Views</StatsDescription>
     <span>{stats.views}</span>
   </StatsItem>
   <StatsItem>
     <StatsDescription>Likes</StatsDescription>
     <span>{stats.likes}</span>
   </StatsItem>
 </Stats>
</ProfileCard>
 );
}

Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf (PropTypes.number.isRequired).isRequired,
};