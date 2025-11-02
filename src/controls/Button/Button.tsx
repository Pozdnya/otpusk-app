import { type FC } from 'react';
import cls from 'classnames';

interface Props {
  text: string;
  classNames?: string;
  handleClick?: () => void;
}
export const Button: FC<Props> = ({ text, classNames = '', handleClick }) => {
  return (
    <button
      className={cls('button', classNames)}
      onClick={handleClick}
      type='submit'
    >
      {text}
    </button>
  )
}
