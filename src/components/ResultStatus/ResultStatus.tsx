import type { FC } from 'react';

interface Props {
  text?: string;
}
export const ResultStatus: FC<Props> = ({text = 'Зараз, нажаль, немає доступних турів'}) => {
  return (
    <div className='empty'>
      <p className='empty__text'>{text}</p>
    </div>
  )
}
