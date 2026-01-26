import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <span className="loader"></span>
    </div>
  );
};
