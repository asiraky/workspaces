import React from 'react'

const Button: React.FC<{ label: string }> = ({ label }) => <button>{`${label} is the label?`}</button>

export default Button
