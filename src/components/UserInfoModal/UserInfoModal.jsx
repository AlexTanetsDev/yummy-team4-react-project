import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { updateUser } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { CloseModalBtn,AvatarField, EditAvatarBtn, EditAvatarIcon,  AvatarWrap, UserEditModal, EditIcon, CloseModalIcon, InputWrapper, InputField, IconWrap, StyledAiOutlineUser, FileInputContainer,RreviewImageContainer,InputIconContainer,FileLabel,InputFile,ErrorPhoto,Image } from './UserInfoModal.styled';
import { editIcon, closeModalIcon, plusIcon } from '../../images';
import { SaveChangesButton } from '../Button/Button';
import { FormError } from 'components/FormError/FormError';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MiniLoader } from 'components/Loader/Loader';

const initialValues = {
	photo: '',
  name: '',
};

const registerSchema = object({
	photo: string().required(),
  name: string().required(),
});

const FileInput = ({
  field,
  form: { setFieldValue, isSubmitting, touched, errors },
  ...props
}) => {
	const user=useSelector(selectUser)
  const [previewUrl, setPreviewUrl] = useState(user.avatarURL);

  const handleFileChange = e => {
		const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
			};
			setFieldValue(field.name, file);
    }
  };

  return (
    <FileInputContainer>
      <RreviewImageContainer>
        {previewUrl && <Image src={previewUrl} alt="Preview repice photo" />}
        {touched.photo && errors.photo ? <ErrorPhoto /> : null}
      </RreviewImageContainer>
      <InputIconContainer>
        <FileLabel htmlFor="photo"></FileLabel>
        <InputFile
          id="photo"
          name="photo"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          onSubmit={() => {
            console.log('onSubmit InputFile');
          }}
          {...props}
        />
      </InputIconContainer>
    </FileInputContainer>
  );
};

export const UserImfoModal = ({opened, onClose }) => {
	const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [isShow, setIsShow] = useState(opened);
	initialValues.name = user.name;
	initialValues.photo = user.avatarURL;

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

  const handleSubmit = async (values) => {
    try {
			setIsLoading(true);
			await dispatch(updateUser({ avatar: values.photo, name: values.name}));
				setIsShow(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
	
	return (
		<>
			{isShow && (
				<>
				<UserEditModal ref={tooltipRef}>
			{error ? (
			        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
			) : (
					<>
						{isLoading ? (<MiniLoader />) : (
							<>
							<CloseModalBtn type='button' onClick={onClose}>
				<CloseModalIcon src={closeModalIcon} alt='close'/>
		</CloseModalBtn>
		<Formik
      initialValues={initialValues}
      validationSchema={registerSchema}									
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched}) => (
					<Form autoComplete="off">
						<AvatarWrap>
							<Field
								as={AvatarField}
    				    id="photo"
    				    name="photo"
    				    type="file"
    				    component={FileInput}
						    	/>
						<EditAvatarBtn>
						<EditAvatarIcon src={plusIcon} />
						</EditAvatarBtn>
							</AvatarWrap>
                      <InputWrapper>
                        <Field
													as={InputField}
                          type="text"
                          name="name"
                          placeholder='Name'
                          values={values.name}
												/>
												<EditIcon src={editIcon} alt="edit button" />
                        <IconWrap>
                            <StyledAiOutlineUser/>
                        </IconWrap>
                        <FormError name="name" component="div" />
                      </InputWrapper>
                      <SaveChangesButton type="submit">
                        Save changes
                      </SaveChangesButton>
                    </Form>
                  )}
						</Formik>
							</>
				)}
						</>
		)}
	</UserEditModal>
				</>
			)}
		</>
)
};