import React from 'react'

interface SpaceType {
  size?: number | 'small' | 'medium' | 'large'
  direction?: 'horizontal' | 'vertical'
  children: React.ReactNode
}

export default function Space({
  size = 20,
  direction = 'horizontal',
  children,
}: SpaceType) {
  function getStyle() {
    const defaultStyle = {
      marginBottom:
        direction === 'vertical' ? size + 'px' : '0',
      marginRight:
        direction === 'horizontal' ? size + 'px' : '0',
    }
    return defaultStyle
  }

  return (
    <>
      {}
      {React.Children.map(children, (child, index) => {
        return (
          <div
            key={index}
            style={
              index !== React.Children.count(children) - 1
                ? getStyle()
                : {}
            }
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
