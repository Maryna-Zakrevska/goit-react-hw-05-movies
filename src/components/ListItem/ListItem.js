import { Link } from 'react-router-dom';

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