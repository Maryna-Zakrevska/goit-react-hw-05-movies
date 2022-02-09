import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
} 
