import { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';

export const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  const updateState = useCallback(
    (newState) => {
      setState((prevState) => ({ ...prevState, ...newState }));
    },
    [setState]
  );

  useLayoutEffect(() => history.listen(updateState), [history, updateState]);

  useEffect(() => {
    console.log(state, history);
  }, [state, history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      history={history}
      navigator={history}
    />
  );
};
