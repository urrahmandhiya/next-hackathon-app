import Image from 'next/image'
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_white' | 'btn_white_text' | 'btn_green' | 'btn_dark_green' |
    'btn_dark_green_outline';
}

function Button({ type, title, icon, variant }: ButtonProps) {
    return (
        <button
          className={`flex items-center justify-center
          gap-3 rounded-full border ${variant}`}
          type={type}
          title={title}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label
              className='font-bold whitespace-nowrap'
            >{title}
            </label>
        </button>
  )
}

export default Button