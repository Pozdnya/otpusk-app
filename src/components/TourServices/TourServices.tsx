import { AiOutlineWifi } from 'react-icons/ai';
import { BsWater } from 'react-icons/bs';
import { LuWashingMachine } from 'react-icons/lu';
import { FaParking } from 'react-icons/fa';
import { MdOutlineSportsHandball } from 'react-icons/md';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
interface Props {
  services: { [key: string]: string }
}
export const TourServices: FC<Props> = ({ services }) => {
  console.log('services', services)
  const tourServices: Record<string, { icon: IconType; text: string }> = {
    wifi: { icon: AiOutlineWifi, text: "Wi-Fi" },
    aquapark: { icon: BsWater, text: "Басейн" },
    tennis_court: { icon: MdOutlineSportsHandball, text: "Тенісний корт" },
    laundry: { icon: LuWashingMachine, text: "Прання" },
    parking: { icon: FaParking, text: "Парковка" },
  }
  return (
    <ul className="services">
      {Object.entries(services)
        .filter(([key, value]) => value === "yes" && tourServices[key])
        .map(([key]) => {
          const { icon: Icon, text } = tourServices[key];
          return (
            <li key={key} className="services__item">
              <Icon className="services__icon" />
              <span className="services__text">{text}</span>
            </li>
          );
        })}
    </ul>
  );

}
