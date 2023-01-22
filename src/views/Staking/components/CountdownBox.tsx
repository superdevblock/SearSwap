import React, { FC } from 'react'
import styled from 'styled-components'

interface CountdownBoxProps {
  left: number | string
  divideBy: number
  label: string
}

const StyleOutSideCircle = styled.circle`
  stroke: ${({ theme }) => (theme.isDark ? '#ffffff' : '#717171')};
`

const StyleInSideCircle = styled.circle`
  stroke: ${({ theme }) => (theme.isDark ? '#ffffff' : '#000')};
  color: #000;
`

const CountdownBox: FC<CountdownBoxProps> = ({ left, divideBy, label }) => (
  <Wrapper>
    <BoxCircles>
      <svg height="60" width="70">
        <StyleOutSideCircle stroke="#E9F3FC" strokeWidth="0" r="65" cx="74" cy="74" />
        <StyleInSideCircle
          stroke="#E9F3FC"
          strokeDashoffset={-((+left / divideBy) * 65 * 2 * Math.PI) + 65 * 2 * Math.PI}
          strokeDasharray={65 * 2 * Math.PI}
          strokeWidth="0"
          r="65"
          cx="74"
          cy="74"
        />
      </svg>
      <BoxLeft>
        {left}
        <Space />
        <div style={{fontSize:'12px'}}>
          {label}
        </div>
      </BoxLeft>
    </BoxCircles>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }

  &_circles {
    position: relative;
  }

  &_left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 20px;
  }

  &_label {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }
`

const BoxCircles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`

const BoxLeft = styled.div`
  white-space: pre-wrap;
  display: flex;
  text-align: center;
  align-items: baseline;
  justify-content: center;
  position: absolute;
  top: 53%;
  left: 37%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 20px;
  color: #000;

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`
const BoxLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => (theme.isDark ? '#FFFFFF' : '#E9F3FC')};

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`

const Space = styled.div`
  margin-right: 3px;
`

export default CountdownBox
