import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { t } from "i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { log } from "console";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev)
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia nam aspernatur dolore itaque, enim fuga libero repellendus asperiores quibusdam. Quasi nobis modi ducimus maiores cumque, iure maxime ex eum?
                </Modal>
            </Button>
        </div>
    );
}