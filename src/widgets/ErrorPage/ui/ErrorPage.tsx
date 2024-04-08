import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageProps {
   className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
    const {} = useTranslation();

    // eslint disable next time no restricted globals
    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>

            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>

            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>

        </div>
    );
}