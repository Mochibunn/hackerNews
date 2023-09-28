import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HackNav from '../components/HackNav';
import App from '../App';
import NoPage from '../components/NoPage';
import RenderStories from '../components/RenderStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" component={App} exact={true} />
          <Route path="/:type" component={RenderStories} />
          <Route component={NoPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;