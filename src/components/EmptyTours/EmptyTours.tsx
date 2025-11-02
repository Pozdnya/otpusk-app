import type { FC } from 'react';

interface Props {
  text?: string;
}
export const EmptyTours: FC<Props> = ({text = 'Зараз, нажаль, немає доступних турів'}) => {
  return (
    <div className='empty'>
      <p className='empty__text'>{text}</p>
    </div>
  )
}
