import React, {  useState, useEffect, useMemo } from 'react'

interface FlipCardProps {
  children: JSX.Element[]
  cardStyles: { front?: {}, back?: {} }
  cardZIndex: string
  containerStyle: {}
  containerClassName: string
  isFlipped: boolean
  flipSpeedBackToFront: number
  flipSpeedFrontToBack: number
  infinite: boolean
  flipDirection: 'horizontal' | 'vertical'
}
export default function FlipCard (props: FlipCardProps): JSX.Element {
  const {
    cardStyles: {
      back,
      front
    },
    cardZIndex,
    containerStyle,
    containerClassName,
    flipDirection,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    infinite
  } = props

  const [isFlipped, setIsFlipped] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setIsFlipped(props.isFlipped)
      setRotation((c) => c + 180)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFlipped])

  const getContainerClassName = useMemo(() => {
    let className = 'flip-card'
    if (containerClassName) {
      className += ` ${containerClassName}`
    }
    return className
  }, [containerClassName])

  const getChildren = (index: number) => {
    if (props.children.length > 2) {
      throw new Error('requires no more the two childrens')
    }
    return props.children[index]
  }

  const frontRotateY = `rotateY(${
        infinite ? rotation : isFlipped ? 180 : 0
        }deg)`
  const backRotateY = `rotateY(${
        infinite ? rotation + 180 : isFlipped ? 0 : -180
        }deg)`
  const frontRotateX = `rotateX(${
        infinite ? rotation : isFlipped ? 180 : 0
        }deg)`
  const backRotateX = `rotateX(${
        infinite ? rotation + 180 : isFlipped ? 0 : -180
        }deg)`

  const styles: any = {
    back: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'relative' : 'absolute',
      top: '0',
      transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
      transformStyle: 'preserve-3d',
      transition: `${flipSpeedFrontToBack}s`,
      width: '100%',
      ...back
    },
    container: {
      perspective: '1000px',
      zIndex: `${cardZIndex}`
    },
    flipper: {
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    front: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'absolute' : 'relative',
      top: '0',
      transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
      transformStyle: 'preserve-3d',
      transition: `${flipSpeedBackToFront}s`,
      width: '100%',
      zIndex: '2',
      ...front
    }
  }

  return (
    <div className={getContainerClassName} style={{ ...styles.container, ...containerStyle }}>
        <div className="flip-card" style={styles.flipper}>
        <div className="flip-card__front" style={styles.front}>{getChildren(0)}</div>
        <div className="flip-card__back" style={styles.back}>{getChildren(1)}</div>
        </div>
    </div>
  )
}

FlipCard.defaultProps = {
  cardStyles: {
    back: {},
    front: {}
  },
  cardZIndex: 'auto',
  containerStyle: {},
  containerClassName: undefined,
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false
}
