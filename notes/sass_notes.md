# Sass

Sass allows for more script like CSS

```css
@import './resets';
@import './variables';


$primary-color: #272727;
$accent-color: #ff652f;
$text-color: #fff;
$font-weights {
    "regular": 400,
    "medium": 500,
    "bold": 700
}

@function weight($weight-name) {
    @return map-get($font-weights, $weight-name);
}

@mixin flexCenter($direction) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
}

@mixin mobile {
    @media (max-width: $mobile) {
        @content;
    }
}

body {
    background: $primary-color;
    color: $text-color;
}

.main {
    @include flexCenter(row);
    width: 80%;
    margin: 0 auto;

    @include mobile {
        flex-direction: column;
    }

    #{&}__paragraph {
        font-weight: weight(bold);
    }
}
```
