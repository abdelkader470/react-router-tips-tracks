import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className=" px-3 py-3 border-[1px] mb-3 border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 focus:ring-[#149eca] rounded-lg  text-md w-full bg-transparent"
      {...rest}
    ></input>
  );
};

export default Input;
