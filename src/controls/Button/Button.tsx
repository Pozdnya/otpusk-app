import React, { type FC } from 'react';

interface Props {
  text: string;
}
export const Button: FC<Props> = ({ text }) => {
  return (
    <button>{text}</button>
  )
}
