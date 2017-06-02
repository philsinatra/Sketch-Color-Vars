[![Download from Sketchpacks.com](https://badges.sketchpacks.com/plugins/com.sketch.sketch-color-vars/version.svg)](https://api.sketchpacks.com/v1/plugins/com.sketch.sketch-color-vars/download) [![Compatible Sketch Version](https://badges.sketchpacks.com/plugins/com.sketch.sketch-color-vars/compatibility.svg)](https://sketchpacks.com/philsinatra/Sketch-Color-Vars)
[![license](https://img.shields.io/github/license/philsinatra/Sketch-Color-Vars.svg?style=flat-square)]()

# Sketch Color Variables

A Sketch plugin that will export the fill color of selected layers to SCSS, LESS and CSS files.

## Installation

1. Download the plugin.
1. Double click "Color-Vars.sketchplugin" to install it.

**OR**

Use [Sketch Toolbox](http://sketchtoolbox.com)

<img src="http://cdn.philsinatra.com/libraries/sketch/Sketch-Color-Vars/skech_toolbox-color_vars.png" alt="Sketch Toolbox window showing Sketch Color Vars plugin" style="width: 450px">

## How it works

1. Name the layers your preferred variable names.
1. Select the layers containing the colors you want exported.
1. Run the plugin via the Plugins menu, or via the keyboard shortcut <kbd>shift</kbd> + <kbd>cmd</kbd> + <kbd>,</kbd>

You will be prompted where to save the variable files:

- _colors.scss
- _colors.less
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
