import { type FC } from 'react';
import cls from 'classnames';

interface Props {
  text: string;
  disabled?: boolean;
  classNames?: string;
  handleClick?: () => void;
}
export const Button: FC<Props> = ({ text, classNames = '', disabled = false, handleClick }) => {
  console.log('disabled', disabled)
  return (
    <button
      className={cls('button', classNames, { 'button--disabled': disabled })}
      onClick={handleClick}
      type='submit'
      disabled={disabled}
    >
      {text}
    </button>
  )
}
