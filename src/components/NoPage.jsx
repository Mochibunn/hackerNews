import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <p>
      Sorry but it looks like the page was not found! Go to <Link to="/">Home</Link>?
    </p>
  );
};

export default NoPage;