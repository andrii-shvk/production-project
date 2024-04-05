import { useTranslation } from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('новый перевод')}
            {t('MainPage')}
        </div>
    );
}
 
export default MainPage;