import Story from './Story';
import useDataFetch from '../utils/dataFetch';
import { Fragment } from 'react';

const RenderStories = (props) => {
  const { type } = props.match.params;
  const { isLoading, stories } = useDataFetch(type);

  return (
    <Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default RenderStories;