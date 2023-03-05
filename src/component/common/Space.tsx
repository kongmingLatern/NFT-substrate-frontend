import classNames from 'classnames'
import React, { Fragment } from 'react'

interface SpaceType {
  size?: number | 'small' | 'medium' | 'large'
  direction?: 'horizontal' | 'vertical'
  children?: React.ReactNode
  className?: string
}

export default function Space({
  size = 20,
  direction = 'horizontal',
  children,
  className,
}: SpaceType) {
  function getStyle() {
    const defaultStyle = {
      marginBottom:
        direction === 'vertical' ? size + 'px ' : '0 ',
      marginRight:
        direction === 'horizontal' ? size + 'px ' : '0 ',
    }

    return {
      ...defaultStyle,
      className,
    }
  }

  return (
    <>
      <div
        className={classNames(
          'flex',
          direction === 'vertical' ? 'flex-col' : ''
        )}
      >
        {React.Children.toArray(children).map(
          (child, index) => {
            return (
              <Fragment key={index}>
                {React.cloneElement(
                  child as React.ReactElement,
                  {
                    style:
                      index !==
                      React.Children.count(children) - 1
                        ? getStyle()
                        : {},
                  }
                )}
              </Fragment>
            )
          }
        )}
      </div>
    </>
  )
}
