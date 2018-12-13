/* @flow */

import React, { PureComponent } from 'react'
import {
  Animated,
  TextInput,
  View,
  ViewPropTypes,
  StyleSheet,
} from 'react-native'

const ANIMATION_DURATION = 250

type LayoutEvent = {
  nativeEvent: {
    layout: {
      x: number,
      y: number,
      width: number,
      height: number,
    },
  },
}

type Props = {
  containerStyle?: ViewPropTypes.style,
  label?: string,
  labelStyle?: ViewPropTypes.style,
  style?: ViewPropTypes.style,
  underlineColorAndroid?: string,
  placeholder: string,
  value: ?string,
}

type State = {
  labelHeight: number,
  labelMarginTop: Animated.Value,
  textInputContainerPaddingTop: Animated.Value,
}

class FloatingLabelTextInput extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      labelHeight: 0,
      labelMarginTop: new Animated.Value(0),
      textInputContainerPaddingTop: new Animated.Value(0),
    }
  }

  componentWillReceiveProps = (nextProps: Props) => {
    if (!this.props.value && nextProps.value) {
      this.animateTextInputContainerDown()
    }

    if (this.props.value && !nextProps.value) {
      this.animateTextInputContainerUp()
    }
  }

  onLabelContainerLayout = (e: LayoutEvent) => {
    const height = e.nativeEvent.layout.height

    if (this.state.labelHeight !== height) {
      this.setState({
        labelHeight: height,
        labelMarginTop: new Animated.Value(this.props.value ? 0 : height),
        textInputContainerPaddingTop: new Animated.Value(
          this.props.value ? height : 0
        ),
      })
    }
  }

  animateTextInputContainerDown = () => {
    Animated.timing(this.state.textInputContainerPaddingTop, {
      toValue: this.state.labelHeight,
      duration: ANIMATION_DURATION,
    }).start()

    Animated.timing(this.state.labelMarginTop, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start()
  }

  animateTextInputContainerUp = () => {
    Animated.timing(this.state.textInputContainerPaddingTop, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start()

    Animated.timing(this.state.labelMarginTop, {
      toValue: this.state.labelHeight,
      duration: ANIMATION_DURATION,
    }).start()
  }

  render() {
    const labelContainerOpacity = this.state.labelMarginTop.interpolate({
      inputRange: [0, this.state.labelHeight],
      outputRange: [1, 0],
    })
    const { containerStyle, label, labelStyle, ...rest } = this.props

    return (
      <View style={containerStyle}>
        <View style={styles.wrapper}>
          <Animated.Text
            onLayout={this.onLabelContainerLayout}
            style={[
              styles.labelContainer,
              labelStyle,
              {
                marginTop: this.state.labelMarginTop,
                opacity: labelContainerOpacity,
              },
            ]}>
            {label || this.props.placeholder}
          </Animated.Text>
          <Animated.View
            style={[
              styles.textInputContainer,
              { paddingTop: this.state.textInputContainerPaddingTop },
            ]}>
            <TextInput {...rest} style={[this.props.style, styles.input]} />
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  labelContainer: {
    position: 'absolute',
    top: 0,
  },

  textInputContainer: {
    flex: 1,
  },

  input: {
    flex: 1,
  },
})

export default FloatingLabelTextInput
