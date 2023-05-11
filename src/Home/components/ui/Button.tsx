import React, { FC } from 'react'

interface ButtonProps {
  children: React.ReactNode,
  addClass?: string
}

const Button: FC<ButtonProps> = ({ children, addClass }) => {
  return (

      <button className={(' hover:scale-95 font-semibold   py-3  border bg-blue-950 text-white duration-500  shadow-md ') + addClass}>
        {children}
      </button>
 

  )
}

export default Button