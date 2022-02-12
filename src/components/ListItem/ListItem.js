import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function ListItem({
  item: {
    id,
    title,
    name,
  },
}) {
  
  return (
    <li>
      {<Link to={`/movies/${id}`}>{title || name}</Link>}
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }),
};
