# React-SuperText

**React-SuperText** is a versatile React component library that provides three unique text animation and display components: `TypingText`, `LastWordTypingText`, and `Marquee`. With React-SuperText, you can effortlessly add captivating text effects to your web applications. This README will guide you through how to use each component and explain the available props and their functionalities.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [TypingText](#typingtext)
  - [LastWordTypingText](#lastwordtypingtext)
  - [Marquee](#marquee)
- [Examples](#examples)

## Installation

To use React-SuperText in your project, you can install it via npm or yarn:

```bash
npm install react-supertext
```

or

```bash
yarn add react-supertext
```

## Usage

### TypingText

`TypingText` is a component that simulates typing animation. It progressively displays text from an array with optional customization.

```jsx
import React from 'react';
import { TypingText } from 'react-supertext';

function MyComponent() {
  const texts = ["Hello, world!", "This is React-SuperText.", "Enjoy the animations!"];

  return (
    <TypingText
      textArray={texts}
      typingSpeed={50} // Speed of typing in milliseconds per character
      loop={true} // Loop through the textArray
      fontSize="24px"
      fontWeight="bold"
      color="black"
      className="custom-typing-text"
      triggerOnce={true} // Only trigger once on initial render
    />
  );
}
```

**Props for `TypingText` Component:**

1. `textArray` (Array):
   - An array of strings that represent the text to be displayed and typed out.

2. `typingSpeed` (Number):
   - The speed at which each character is typed in milliseconds. Smaller values make it faster.

3. `loop` (Boolean):
   - Determines whether the animation should loop through the `textArray` once it reaches the end.

4. `fontSize` (String):
   - Sets the font size of the displayed text.

5. `fontWeight` (String):
   - Sets the font weight of the displayed text.

6. `color` (String):
   - Sets the color of the text.

7. `className` (String):
   - Adds a custom CSS class name to the outer div of the component for styling.

8. `triggerOnce` (Boolean):
   - Determines whether the animation should trigger only once when the component comes into view.

### LastWordTypingText

`LastWordTypingText` is a component that types out the last word in a sentence, providing a unique effect.

```jsx
import React from 'react';
import { LastWordTypingText } from 'react-supertext';

function MyComponent() {
  return (
    <LastWordTypingText
      text="This is a simple example."
      typingSpeed={150}
      loop={false}
      lastWords={["example.", "component.", "effect.", "features."]}
      fontSize="24px"
      fontWeight="bold"
      color="blue"
      className="custom-text"
    />
  );
}
```

**Props for `LastWordTypingText` Component:**

1. `text` (String):
   - The initial text before the last word that will be typed.

2. `typingSpeed` (Number):
   - The speed at which each character of the last word is typed in milliseconds.

3. `lastWords` (Array):
   - An array of words. The component will type out each word sequentially from this array.

4. `loop` (Boolean):
   - Determines whether the animation should loop through the `lastWords` once it reaches the end.

5. `fontSize` (String):
   - Sets the font size of the displayed text.

6. `fontWeight` (String):
   - Sets the font weight of the displayed text.

7. `color` (String):
   - Sets the color of the text.

8. `className` (String):
   - Adds a custom CSS class name to the outer div of the component for styling.

### Marquee

`Marquee` is a component that creates a scrolling text effect.

```jsx
import React from 'react';
import { Marquee } from 'react-supertext';

function MyComponent() {
  return (
    <Marquee
      text="This is a scrolling text."
      speed={1} // Speed of scrolling (higher value means slower)
      fontSize="24px"
      fontWeight="bold"
      color="blue"
      className="custom-marquee"
      pauseOnHover={true} // Pause scrolling on hover
      scrolldirection="right" // Direction of scrolling ('right' or 'left')
    />
  );
}
```

**Props for `Marquee` Component:**

1. `text` (String):
   - The text that will scroll horizontally within the component.

2. `speed` (Number):
   - The speed of the scrolling text. A higher value means slower scrolling.

3. `fontSize` (String):
   - Sets the font size of the displayed text.

4. `fontWeight` (String):
   - Sets the font weight of the displayed text.

5. `color` (String):
   - Sets the color of the text.

6. `className` (String):
   - Adds a custom CSS class name to the outer div of the component for styling.

7. `pauseOnHover` (Boolean):
   - Determines whether the scrolling animation should pause when the mouse hovers over the component.

8. `scrolldirection` (String):
   - Defines the direction of text scrolling. It can be either `"right"` or `"left"`.

These props allow you to customize the behavior and appearance of each React-SuperText component according to your specific requirements.

## Examples
For more examples and usage details, you can refer to the demo link procided bellow.

Enjoy using React-SuperText to add engaging text animations and effects to your React applications! If you encounter any issues or have suggestions for improvement, please feel free to open an issue on the GitHub repository.
