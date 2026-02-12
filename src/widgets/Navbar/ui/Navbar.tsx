import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from "react-i18next";
import Modal from "shared/ui/Modal/Modal";
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, [setIsAuthModal]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleAuthModal}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleAuthModal}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}        {/* eslint-disable-next-line i18next/no-literal-string */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur atque enim ex, laborum libero nam odit quis rem
        repudiandae veniam?
      </Modal>
    </div>
  );
};
