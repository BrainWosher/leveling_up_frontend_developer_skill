import { useTranslation } from 'react-i18next';
import { BuggButton } from 'widgets/PageError';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <BuggButton />
    </div>
  );
};

export default MainPage;
