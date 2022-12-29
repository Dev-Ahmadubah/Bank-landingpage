import React from 'react'

const Button = ({styles}) => {
  return (
    <div className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none cursor-pointer rounded-[10px]`}>Get Started</div>
  )
}

export default Button