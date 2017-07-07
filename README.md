[![GitHub tag](https://img.shields.io/github/tag/philsinatra/Sketch-Color-Vars.svg?style=flat-square)]()
[![license](https://img.shields.io/github/license/philsinatra/Sketch-Color-Vars.svg?style=flat-square)]()

# Sketch Color Variables

A Sketch plugin that will export the fill color of selected layers to SCSS, LESS and CSS files.

## Installation

### Option 1

1. Download the plugin.
1. Double click "Color-Vars.sketchplugin" to install it.

### Option 2

As of Sketch version 45, managing plugins can be done directly in the app. [Read more](https://blog.sketchapp.com/a-redesigned-color-popover-better-plugin-management-and-more-in-sketch-45-8de62b3d9abe#3221) from the official Sketch app blog. You can search for _Sketch Color Vars_ from the plugin manager.

### Option 3

Use [Sketch Toolbox](http://sketchtoolbox.com)

<img src="http://cdn.philsinatra.com/libraries/sketch/Sketch-Color-Vars/skech_toolbox-color_vars.png" alt="Sketch Toolbox window showing Sketch Color Vars plugin" style="width: 450px">

## How it works

1. Name the layers your preferred variable names.
1. Select the layers containing the colors you want exported.
1. Run the plugin via the Plugins menu, or via the keyboard shortcut <kbd>shift</kbd> + <kbd>cmd</kbd> + <kbd>,</kbd>

You will be prompted where to save the variable files:

- _colors.scss
- _colors.less
- _colors.styl
- _colors.css

## Limitations

1. Only solid fills will be exported, not gradients.
1. Only the first solid fill will be exported (in cases where multiple fills are applied to a single shape/element).

## Example

![](http://cdn.philsinatra.com/libraries/sketch/Sketch-Color-Vars/sketch-example-01.png)

```scss
// _color.scss
$red-D0011B: rgba(82%,0%,11%,1.00);
$green-417505: rgba(25%,46%,2%,1.00);
$blue-4990E2: rgba(29%,56%,89%,1.00);
```

```less
// _color.less
@red-D0011B: rgba(82%,0%,11%,1.00);
@green-417505: rgba(25%,46%,2%,1.00);
@blue-4990E2: rgba(29%,56%,89%,1.00);
```

```stylus
// _color.styl
red-D0011B = rgba(82%,0%,11%,1.00);
green-417505 = rgba(25%,46%,2%,1.00);
blue-4990E2 = rgba(29%,56%,89%,1.00);
```

```css
/* _color.css */
:root {
  --red-D0011B: rgba(82%,0%,11%,1.00);
  --green-417505: rgba(25%,46%,2%,1.00);
  --blue-4990E2: rgba(29%,56%,89%,1.00);
}
```

## What's next?

- [ ] Add select options dialog for user to spec which file type(s) should be exported.
- [ ] Add option for color value type (hex, rgb, rgba).

## Feedback

Feedback and pull requests are welcome :)
