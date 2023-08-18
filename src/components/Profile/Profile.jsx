import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsSubtitle,
  Label,
  Quantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsSubtitle>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsSubtitle>
        <StatsSubtitle>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsSubtitle>
        <StatsSubtitle>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsSubtitle>
      </Stats>
    </ProfileWrapper>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
