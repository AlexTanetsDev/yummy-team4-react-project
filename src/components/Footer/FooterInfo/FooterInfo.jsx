import { useTranslation } from 'react-i18next';

import { InfoList } from './FooterInfo.styled';

export const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <InfoList>
      <li>
        <p>{t('Database of recipes')}</p>
      </li>
      <li>
        <p>{t('Flexible search')}</p>
      </li>
      <li>
        <p>{t('Ability to add')}</p>
      </li>
      <li>
        <p>{t('Convenient and easy to use')}</p>
      </li>
    </InfoList>
  );
};

export default FooterInfo;
