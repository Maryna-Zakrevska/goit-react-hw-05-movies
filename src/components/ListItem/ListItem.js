import PropTypes from 'prop-types';
import { ListItemStyled, Link } from './ListItem.styled';

export default function ListItem({
  item: {
    id,
    title,
    name,
  },
}) {
  
  return (
    <ListItemStyled>
      {<Link to={`/movies/${id}`}>{title || name}</Link>}
    </ListItemStyled>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }),
};
