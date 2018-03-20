# React Native Floating Label Text Input

Used as an alternative to `TextInput` by us in Rise, we thought you might love it too. 

## Installation
```
yarn add @rise-digital/react-native-floating-label-text-input
```

## Usage
```
import FloatingLabelTextInput from 'react-native-floating-label-text-input'

<FloatingLabelTextInput
  containerStyle={{ width: '100%', height: 45 }}
  onChangeText={this.onChangeText}
  placeholder={`Name`}
  value={this.state.name}
/>
```

## Props

Besides [TextInput Props](https://facebook.github.io/react-native/docs/textinput.html#props), the following props can be passes to the component.



| Param                | Type     | Description |
|----------------------|----------|-------------|
| `containerStyle`     | `any`    | Styles for the container wrapping the internal `TextInput` and label.
| `label`              | `string` | If provided, this will be displayed in the label instead of the placeholder text.
| `labelStyle`         | `any`    | Styles for the label.
