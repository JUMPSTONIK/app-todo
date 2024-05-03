import { ReactElement } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { TbPasswordUser } from "react-icons/tb";
import { FaUser, FaRegEdit } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface IconProps{
    type?: string
}

const iconMap: { [key: string]: ReactElement } = {
    email: <FaUser/>,
    password:  <TbPasswordUser />,
    'open-eye': <GoEye/>,
    'closed-eye': <GoEyeClosed/>,
    search:  <IoIosSearch/>,
    edit:   <FaRegEdit/>,
    delete: <MdDelete/>


};

  
export const Icon = (props:IconProps) => {
    const { type = 'email' } = props
    return iconMap[type] ?? null;
  };
  



