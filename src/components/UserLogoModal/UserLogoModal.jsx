import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logOut } from '../../Redux/auth/operations';

import { EditIcon, EditProfile, LogOut,  UserModal, LogoutIcon, ModalConfirm, LogoutTitle, CloseModalBtn, CloseModalIcon } from './UserLogoModal.styled';
import { editIcon, arrowRightIcon, closeModalIcon } from '../../images';
import { CancelButton, LogOutButton } from '../Button/Button';

	export const UserLogoModal = () => {
		const dispatch = useDispatch();
		const navigate = useNavigate();
		const [logout, SetLogout] = useState(false);
		const [edit, SetEdit] = useState(false);
	
		const handleBtnLogoutClick = () => {
			SetLogout(true);
		};

		const handleBtnConfirmLogoutClick = async () => {
			await dispatch(logOut());
			navigate("/signin");
			SetLogout(false);
		};

		const handleBtnCancelLogoutClick = () => {
			SetLogout(false);
		}

		return (
	<>
				{!logout && !edit && (
			<UserModal>
			<EditProfile>
				<p>
					Edit profile
					<EditIcon src={editIcon} alt="edit button" />
				</p>
			</EditProfile>
			<LogOut onClick={handleBtnLogoutClick}>
				<p>
					Log out
				</p>
				<LogoutIcon src={arrowRightIcon} alt="arrow image"/>
			</LogOut>
			</UserModal>)
				}
				{logout && (
					<ModalConfirm>
					<CloseModalBtn type='button' onClick={handleBtnCancelLogoutClick}>
							<CloseModalIcon src={closeModalIcon} alt='close'/>	
					</CloseModalBtn>
					<LogoutTitle>Are you sure you want to log out?</LogoutTitle>
					<LogOutButton onClick={handleBtnConfirmLogoutClick}>Log out</LogOutButton>
				  <CancelButton onClick={handleBtnCancelLogoutClick}>Cancel</CancelButton>
					</ModalConfirm>
		)}
	</>			
	)
};