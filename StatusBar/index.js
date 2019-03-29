import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'

import { StatusContainer } from './styled'

const CustomStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <StatusContainer bg={backgroundColor}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </StatusContainer>
  )
}

export default CustomStatusBar

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
}

CustomStatusBar.defaultProps = {
  backgroundColor: '#fff',
}
