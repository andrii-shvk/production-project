import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
   className?: string;
}

export const Modal = (props: ModalProps) => {
    const {
        className
    } = props;

    return (
     <div className={classNames(cls.Modal, {}, [className])}>
        <div className={cls.overlay}>
            <div className={cls.content}>
                
            </div>
        </div>
     </div>
    );
}