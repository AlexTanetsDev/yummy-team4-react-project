import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { googleVerify } from 'redux/auth/operations';
import { MainLoader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/auth/selectors';

export const GoogleVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const GoogleVerification = async token => {
      await dispatch(googleVerify(token));
    };
    GoogleVerification(params.token);
  }, [dispatch, params.token]);

  return isLoading && <MainLoader />;
};
