import { type FC } from 'react';
import cls from 'classnames';

interface Props {
  text: string;
  disabled?: boolean;
  classNames?: string;
  handleClick?: () => void;
}
export const Button: FC<Props> = ({ text, classNames = '', disabled = false, handleClick }) => {
  return (
    <button
      className={cls('button', classNames)}
      onClick={handleClick}
      type='submit'
      disabled={disabled}
    >
      {text}
    </button>
  )
}
