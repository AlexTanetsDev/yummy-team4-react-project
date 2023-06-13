import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logOut } from '../../redux/auth/operations';
import { CancelButton, LogOutButton } from '../Button/Button';
import {
  CloseModalBtn,
  CloseModalIcon,
  LogoutTitle,
  Modal,
  WrapBtn,
} from './ModalConfir.styled';
import { closeModalIcon } from '../../images';

export const ModalConfirm = ({ opened, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(opened);
  const tooltipRef = useRef(null);
  const { t } = useTranslation();

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

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const handleBtnConfirmLogoutClick = async () => {
    await dispatch(logOut());
    navigate('/signin');
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <>
          <Modal ref={tooltipRef}>
            <CloseModalBtn type="button" onClick={onClose}>
              <CloseModalIcon src={closeModalIcon} alt="close" />
            </CloseModalBtn>
            <LogoutTitle>{t('Are you sure you want to log out?')}</LogoutTitle>
            <WrapBtn>
              <LogOutButton onClick={handleBtnConfirmLogoutClick}>
                {t('Log out')}
              </LogOutButton>
              <CancelButton type="button" onClick={onClose}>
                {t('Cancel')}
              </CancelButton>
            </WrapBtn>
          </Modal>
        </>
      )}
    </>
  );
};
