import PropTypes from "prop-types";
import { ListItemStyled, Link } from "./ListItem.styled";
import { useLocation } from "react-router-dom";

export default function ListItem({ item: { id, title, name } }) {
  const location = useLocation();
  const currentState = { from: location };

  return (
    <ListItemStyled>
      {
        <Link to={`/movies/${id}`} state={currentState}>
          {title || name}
        </Link>
      }
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
