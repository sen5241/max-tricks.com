---
draft: true
---

When you first start learning Jitter, there are a range of new pieces of terminology pushed on you: matrices, planes, cells, matrix-types, dimensions — and it can be a scary (or exhausting) start.


In this module, I want to help overcome some of those initial hurdles, but talking about them one at a time... but really getting to understand them by applying our knowledge as we go.


Dimensions
	Width and height

Planes




Types
	A Salavon exercise.






In this chapter, we'll learn the fundamentals of image processing in Max using the Jitter objects.

download an image set from
https://www.missionjuno.swri.edu/junocam
https://www.missionjuno.swri.edu/junocam/processing


Here is an image made with this: https://www.missionjuno.swri.edu/junocam/processing?id=17137


I'll use this one specifically.
https://www.missionjuno.swri.edu/junocam/processing?id=JNCE_2024329_67C00023_V01


Part 1:


Gray scale images. Intensities of lightness. 


jit.matrix
	buddy objects: bang, qmetro
	jit.movie
	MOPs
jit.pwindow
	Resize your pwindow to 100x100. Let's talk about three ways to do that. You could resize it freehand (and watch the object info in the lower right of your patcher), you could instantiate it at a size: jit.pwindow @size 100 100, or you could do it in the inspector. You know what the Inspector is by now, right? The sidebar on the right — open it up, selector your object, and switch tot he 'ALL' tab.
jit.brcosa (what is BR, what is CO, what is SA? How do they )
	buddy: jit.rgb2hsl / jit.rgb2luma
	jit.hue
jit.unpack / jit.pack

jit.charmap
	buddy: jit.fill (jit.spill aside)
	- begin by copying bits from the helper patcher,,,, (then later build a better one with function)
	UI objects: multislider 
	button
	function (then switch it to curve mode)
	uzi



Let's play for a second. What do you notice if you make abrupt changes in the multisliders?

That's right! You get visible colour bands in the image.

Why is that? Remember: jit.charmap is letting you map numbers from one value to another. When you create a *discontinuity* (or jump)on your multislider, you are dramatically changing the mapping of two numbers that are adjacent (and similar) to become dissimilar. So instead of a smooth gradient, you are creating a strong difference...




Let's plot a histogram of the colours.
jit.histogram...


jit.normalize
	handy if you need to know if there is difference between matrices. Let's come back to something that we stated and skipped over in the intro: how do we know the 3 RGB planes of the images contained the same data?
		Sidenote: what happens when the three colour channels contain the same data? You get a grayscale image. WHY IS THAT? When mixed in equal proportions, there is no dominance in any of the colour channels... so 
	jit.op @op absdiff -> jit.normalize
	jit.3m





EXERCISE:
Make an expressive interpretation of the image, using any techniques you've learned so far.

Send it into a jit.matrix, and export it as a PNG. Share it on your socials with the #maxtricks


---



Part 2:

Cropping
jit.submatrix
jit.split / jit.concat
jit.scissors / jit.glue

Exercise:
jit.split, jit.op (invert), jit.concat

Can you think of an easier way? jit.+ with a 2 cell jit.matrix — what maths could we do?


> jit.gen





Transforming




Part 3: The dimension of time.
jit.movie




jit.xfade




Colour systems? OK-lab etc meh




Working with HSL: tweaking individual channels... use a similar approach to the jit.charmap example before to create a lookup table... What data does each need? (0-255, 0-100, 0-360?)
What does it look like to increate the S, how about lightness?

Colour dynamic range 'compression' and expansion... what happens when we vary the angle or bias of the line on charmap. The `scale` object as a means post processing the values. zmap (clips), jit.map