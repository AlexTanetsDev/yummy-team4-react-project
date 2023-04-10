import { ContentWrapper, StyledWrapper, ButtonWrapper, Title, Text, Logo, LogoImage } from "./WellcomePageWrapper.styled";
import { RegistrationButton, SingInButton } from "components/Button/Button";
import { startPegeLogo } from "../../images";

export const WellcomPageWrapper = () => {
	return (
		<StyledWrapper>
			<ContentWrapper>
				<Logo>
					<LogoImage src={startPegeLogo } />
				</Logo>
			<Title>
				Welcome to the app!
				</Title>
				<Text>
					This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.
				</Text>	
			      <ButtonWrapper>
				      <RegistrationButton/>
				      <SingInButton />
			      </ButtonWrapper>		      
	         </ContentWrapper>
	        </StyledWrapper>);
};
