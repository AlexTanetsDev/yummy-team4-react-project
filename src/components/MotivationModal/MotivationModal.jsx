import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
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
  const [message, setMessage] = useState('');

  const user = useSelector(selectUser);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClick = e => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setIsShow(false);
      }
    };

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsShow(false);
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
  }, [isShow]);

  useEffect(() => {
    if (user?.motivation?.firstAddedRecipe) {
      setMessage('You have created your first shopping list!');
      setIsShow(true);
      return;
    }
    if (user?.motivation?.hundredthDayOfUsage) {
      setMessage('You have been using the application for 100 days!');
      setIsShow(true);
      return;
    }
    if (user?.motivation?.tenthAddedRecipe) {
      setMessage('You have added 10 recipes to your favorites!');
      setIsShow(true);
      return;
    }
    if (!user?.motivation?.firstFavoritesRecipe) {
      setMessage('You have added the first recipe to your favorites!');
      setIsShow(true);
      return;
    }

    return () => {
      setMessage('');
      setIsShow(false);
    };
  }, [
    user?.motivation?.firstAddedRecipe,
    user?.motivation?.firstFavoritesRecipe,
    user?.motivation?.hundredthDayOfUsage,
    user?.motivation?.tenthAddedRecipe,
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
              <CloseBtn onClick={() => setIsShow(false)} />
            </MessageBox>
          </ModalBox>
        </Backdrop>
      )}
    </>,
    document.querySelector('#modal-root')
  );
};
