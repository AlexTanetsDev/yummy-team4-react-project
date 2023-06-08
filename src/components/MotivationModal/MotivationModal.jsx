import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateMotivation } from '../../redux/auth/authSlise';
import { selectMotivation } from 'redux/auth/selectors';
import {
  Backdrop,
  MotivationMessage,
  CloseBtn,
  ModalBox,
  MessageBox,
  Colored,
} from './MotivationModal.styled';

export const MotivationModal = () => {
  const [isShow, setIsShow] = useState(false);
  const [motivationFiedl, setMotivationFiedl] = useState(null);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const motivation = useSelector(selectMotivation);
  const tooltipRef = useRef(null);

  const closeModal = useCallback(() => {
    setIsShow(false);
    setMessage('');
    dispatch(updateMotivation({[motivationFiedl]: false }));
  });

  useEffect(() => {
    const handleClick = e => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        closeModal(false);
      }
    };

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal(false);
      }
    };

    const bodyElement = document.querySelector('body');

    if (isShow) {
      bodyElement.style.overflow = 'hidden';
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick, true);
      bodyElement.style.overflow = 'auto';
    };
  }, [closeModal, isShow]);

  useEffect(() => {
    if (motivation?.firstAddedRecipe) {
      setMessage('You have created your first recipe!');
      setIsShow(true);
      setMotivationFiedl('firstAddedRecipe');
      return;
    }
    if (motivation?.tenthDayOfUsage) {
      setMessage('You have been using the application for 10 days!');
		setIsShow(true);
		setMotivationFiedl('tenthDayOfUsage');
      return;
    }
    if (motivation?.tenthAddedRecipe) {
      setMessage('You have created 10 recipes!');
		setIsShow(true);
		setMotivationFiedl('tenthAddedRecipe');
      return;
    }
    if (motivation?.firstFavoriteRecipe) {
      setMessage('You have added the first recipe to your favorites!');
		setIsShow(true);
		setMotivationFiedl('firstFavoriteRecipe');
      return;
    }

    return () => {
      setMessage('');
      setIsShow(false);
    };
  }, [
    motivation?.firstAddedRecipe,
    motivation?.firstFavoriteRecipe,
    motivation?.tenthAddedRecipe,
    motivation?.tenthDayOfUsage,
  ]);

  return ReactDOM.createPortal(
    <>
      {isShow && (
        <Backdrop>
          <ModalBox ref={tooltipRef}>
            <MessageBox>
              <MotivationMessage>
                <Colored>Wow!</Colored> {message}
              </MotivationMessage>
              <CloseBtn onClick={closeModal} />
            </MessageBox>
          </ModalBox>
        </Backdrop>
      )}
    </>,
    document.querySelector('#modal-root')
  );
};
