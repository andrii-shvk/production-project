import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
   className?: string;
   children?: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;
    
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    const onContentClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onClose, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosing,
        [cls[theme]]: true,
    }

    console.log("isClosing", isClosing)

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div 
                    className={cls.overlay} 
                    onClick={closeHandler}>
                    <div 
                        className={cls.content} 
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}