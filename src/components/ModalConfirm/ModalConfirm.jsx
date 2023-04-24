import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../Redux/auth/operations';
import { CancelButton, LogOutButton } from '../Button/Button';
import { CloseModalBtn, CloseModalIcon, LogoutTitle, Modal } from './ModalConfir.styled';
import { closeModalIcon } from '../../images';

export const ModalConfirm = ({opened, onClose}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isShow, setIsShow] = useState(opened);

	const tooltipRef = useRef(null);

		useEffect(() => {
		
			const handleClick = e => {
				if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
					setIsShow(false);
				}				
			}
			
			const handleKeyDown = e => {
        if (e.code === 'Escape') {
					setIsShow(false);
        }
      }

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('click', handleClick, true)
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('click', handleClick, true)
		}
		}, []);
		

			const handleBtnConfirmLogoutClick = async () => {
			await dispatch(logOut());
			navigate("/signin");
					setIsShow(false);
		};

	return (
		<>
			{isShow && (
				<>
		<Modal ref={tooltipRef}>
			<CloseModalBtn type='button' onClick={onClose}>
			<CloseModalIcon src={closeModalIcon} alt='close'/>	
			</CloseModalBtn>
			<LogoutTitle>Are you sure you want to log out?</LogoutTitle>
			<LogOutButton onClick={handleBtnConfirmLogoutClick}>Log out</LogOutButton>
			<CancelButton  type='button'  onClick={onClose} >Cancel</CancelButton>
	  </Modal>
				</>
		)}
		</>

	)

}