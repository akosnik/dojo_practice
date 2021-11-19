# CSS in Easy Steps notes

## Cursor property

default, arrow
pointer, mickey mouse
move, cardinal directions
wait, hourglass
progress, hourglass and arrow
pg 96

## Shadows

normal
box-shadow: 10px 10px 10px black
text-shadow: 3px 3px black

glow
0 0 10px 10px DarkOrange

inset
10px 10px 30px Gray inset

## Gradients

Linear
background: linear-gradient( 45deg, DarkOrange, Bisque );

Radial
radial-gradient(DarkOrange 20%, Bisque 40%, OrangeRed 50% );

### try this

border-image: repeating-linear-gradient ( 45deg, OrangeRed, Orange 20% ) 33%;

## Transform

Scale, ScaleX, ScaleY (grows)
skew... (angles)
rotate...       rotateZ (rotate by angle amount)
translate (moves)
matrix(n,n,n,n,n,n) does it all scale, skew, translate

## Transition

linear consistent speed
ease (default) increases from start to reach full speed then decreases at end
ease-in-out increases at start and decreases at end
steps(n) jump to n intervals
cubic-bezier(x1,y1,x2,y2) Elastic or bounce between coordinates

### Example
transform: background-color 5s ease-in-out 0.5s; property length transitionspeed delay

## Animate

@keyframes
from { top: 0}
50%  { top: 100px}
to   { top: 400px}

## Fit Objects

for images and videos

# Flex Grow/Shrink

flex-grow: 5; will allow this to grow to a flex property of 5
flex-shrink: 0; will not allow this to shrink

# Query Media

all     detect all media types
print   detect printers
screen  detect pc desktop tablet and phone screens
speech  detect screenreaders

## screen

min-width
max-width
orientation

@media screen and (max-width: 600px) {
    //do stuff
}

## Hide stuff

display: none - takes out of flow and hides
visibility: hidden - leaves it in the flow and hides to viewer and screen reader
opacity: 0 - leaves it in flow but screen reader can find it


## Other stuff

resize: both; resizable container
overflow: auto; adds scrollbar
column-count: 3; adds columns

