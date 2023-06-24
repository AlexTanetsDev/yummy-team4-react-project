import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { googleVerify } from 'redux/auth/operations';

export const GoogleVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const GoogleVerification = async token => {
      await dispatch(googleVerify(token));
    };
    GoogleVerification(params.token);
  }, [dispatch, params.token]);
};

export default GoogleVerify;
