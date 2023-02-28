import { useEffect, useMemo } from 'react'

interface ButtonType {
  type?: 'primary' | 'secondary'
  value?: any
  baseClass?: string
  className?: string
  children?: any
  loading?: boolean
  onClick?: () => void
}
export default function Button({
  type,
  value,
  baseClass = 'btn',
  className = 'btn',
  children,
  loading,
  onClick,
}: ButtonType) {
  useEffect(() => {
    console.log('loading', loading)
  }, [loading])
  return (
    <button
      className={
        `${baseClass} ${className}` ||
        (type ? `'btn btn-${type}` : baseClass)
      }
      onClick={onClick}
    >
      {loading ? 'loading...' : value || children}
    </button>
  )
}
