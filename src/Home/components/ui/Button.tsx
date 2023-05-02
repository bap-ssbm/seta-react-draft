import React, { FC } from 'react'

interface ButtonProps {
    children: React.ReactNode,
    addClass?: string
}

const Button: FC<ButtonProps> = ({children, addClass}) => {
  return (
    <button className={('border hover:border-blue-950 hover:text-black hover:bg-white font-semibold  py-5  bg-blue-950 text-white duration-500  ') + addClass}>
        {children}
    </button>
  )
}

export default Button