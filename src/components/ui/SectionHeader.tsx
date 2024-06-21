import React from 'react'
interface props{
    header: string;
}
const SectionHeader:React.FC<props> = ({header}) => {
  return (
    <div>{header}</div>
  )
}

export default SectionHeader