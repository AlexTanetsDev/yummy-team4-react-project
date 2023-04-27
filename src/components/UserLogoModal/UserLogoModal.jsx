import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import {ModalConfirm} from '../ModalConfirm/ModalConfirm'
import {EditIcon, EditProfile, LogOut, UserModal, LogoutIcon} from './UserLogoModal.styled';
import { editIcon, arrowRightIcon } from '../../images';
import { UserImfoModal } from '../UserInfoModal/UserInfoModal';


	export const UserLogoModal = ({opened}) => {
		const [logout, setLogout] = useState(false);
		const [edit, setEdit] = useState(false);
		const [isShow, setIsShow] = useState(opened);
		console.log(opened);
		console.log(isShow);
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
  },[ opened]);


		const handleBtnToggleLogoutModalClick = () => {
			setLogout(!logout);
		};

		const handleToggleEditModalClick = () => {
			setEdit(!edit);
		};

		return ReactDOM.createPortal (
			<>
			{isShow && (
			<UserModal ref={tooltipRef}>
			<EditProfile type='button' onClick={handleToggleEditModalClick}>
				<p>
					Edit profile
					<EditIcon src={editIcon} alt="edit button" />
				</p>
			</EditProfile>
			<LogOut onClick={handleBtnToggleLogoutModalClick}>
				<p>
					Log out
				</p>
			<LogoutIcon src={arrowRightIcon} alt="arrow image"/>
			</LogOut>
			</UserModal>)
			}
			{logout && (
					<ModalConfirm opened={logout} onClose={handleBtnToggleLogoutModalClick } />
				)}
			{edit && <UserImfoModal opened={edit} onClose={handleToggleEditModalClick}/>}
			</>,
			document.querySelector("#user-root")
	)
};