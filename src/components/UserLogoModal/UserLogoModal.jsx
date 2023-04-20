import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logOut } from '../../Redux/auth/operations';

import { EditIcon, EditProfile, LogOutBtn,  Wrap, LogoutIcon } from './UserLogoModal.styled';
import { editIcon, arrowRightIcon } from '../../images';

	export const UserLogoModal = () => {
		const dispatch = useDispatch();
		const navigate = useNavigate();
	
		const handleBtnLogoutClick = async () => {
			await dispatch(logOut());
			navigate("/signin");
		};

	return (
		<Wrap>
			<EditProfile>
				<p>
					Edit profile
					<EditIcon src={editIcon} alt="edit button" />
				</p>
			</EditProfile>
			<LogOutBtn  onClick={handleBtnLogoutClick}>
				<p>
					Log out
				</p>
				<LogoutIcon src={arrowRightIcon} alt="arrow image"/>
			</LogOutBtn>
		</Wrap>
	)
};