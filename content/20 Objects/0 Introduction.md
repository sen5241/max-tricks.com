---
title: Introduction
---

%%

http://20objects.com
http://darwingrosse.com/20Objects/lesson01.html
http://darwingrosse.com/20Objects/lesson02.html
%%



# 20 Objects: A Pragmatic Method for Learning Max/MSP/Jitter and Max for Live


---

Lessons and Texts: 
- [Introduction](http://darwingrosse.com/20Objects/index.html)
- [01 - button](http://darwingrosse.com/20Objects/lesson01.html)
- [02 - number box](http://darwingrosse.com/20Objects/lesson02.html)
- [03 - message box](http://darwingrosse.com/20Objects/lesson03.html)
- [04 - pack/unpack](http://darwingrosse.com/20Objects/lesson04.html)
- [05 - metro](http://darwingrosse.com/20Objects/lesson05.html)
- [06 - random](http://darwingrosse.com/20Objects/lesson06.html)
- [07 - noteout](http://darwingrosse.com/20Objects/lesson07.html)
- [08 - patcher](http://darwingrosse.com/20Objects/lesson08.html)
- [09 - scale](http://darwingrosse.com/20Objects/lesson09.html)
- [10 - pattr](http://darwingrosse.com/20Objects/lesson10.html)
- [11 - table](http://darwingrosse.com/20Objects/lesson11.html)
- [12 - cycle~](http://darwingrosse.com/20Objects/lesson12.html)
- [13 - buffer~](http://darwingrosse.com/20Objects/lesson13.html)
- [14 - svf~](http://darwingrosse.com/20Objects/lesson14.html)
- [15 - line~](http://darwingrosse.com/20Objects/lesson15.html)
- [16 - jit.movie](http://darwingrosse.com/20Objects/lesson16.html)
- [17 - jit.matrix](http://darwingrosse.com/20Objects/lesson17.html)
- [18 - jit.brcosa](http://darwingrosse.com/20Objects/lesson18.html)
- [19 - jit.xfade](http://darwingrosse.com/20Objects/lesson19.html)
- [20 - jit.gl.render](http://darwingrosse.com/20Objects/lesson20.html)
%%- [~~Conclusion~~](http://darwingrosse.com/20Objects/lesson99.html)%%
- [Downloads](http://darwingrosse.com/20Objects/downloads.html)




---




# Course Introduction

This course outlines a new model for teaching (or self-learning) Cycling '74's Max. It offers a pragmatic approach that limits the needs for memorization and requires a lot of hands-on patching. We focus on 20 objects as _bellwether_ examples of Max functions, adding "friend" and "related" objects to round out the programming experience.

This is an introductory course, so some MSP (audio) and Jitter (video) functions will be included when appropriate - but the Max event and processing system is our focus. This syllabus is a work-in-progress, so things will change quite often. If you have experience teaching from this syllabus, please let me know - I'd appreciate any comments, complaints or concerns.

%%
**_Note: With the help of Andrea Mazzariello, this series is undergoing a bit of a facelift for Max 7. Please bear with us during the transition._**
%%
# Things you should have available

Since we stay focused on Max programming, there isn't a lot of software that will be required for using this course. Most importantly, you will need a working copy of Max/MSP/Jitter; you can download a 30-day trial from [here](https://cycling74.com/downloads), with discounted versions available for students. Other than Max, you won't need any specific software. This coursework is system-agnostic, so you can be using either the Mac or Windows operating system without concern. This course is also as usable with Max for Live as it is for the standalone Max program, so having both Live and Max for Live is an option.

Hardware requirements are slightly greater, since we will be playing with device input in a variety of ways. In addition to your computer, you will want to have some sort of MIDI input device (preferably a keyboard). Perhaps the most important bit of hardware to have is a monitor that you are comfortable with and that provides plenty of screen real estate. As a visual programming language, Max needs room for its patches to spread out.

# Things you should already know

This course does not start at the most basic; it expects that the user has the most basic understanding of the Max environment. Some things that the user is expected to know:

- How to launch Max
- What patchcords represent
- A basic concept of what Max is good at...

Perhaps the easiest place to get this information is from the Max help and tutorial system. However, the video that is typically used to show how patching and object selection isn't currently available, so it might be best just to browse around YouTube looking at Max example videos to get a sense of how it works.

# If You Are Teaching...

Each of the lessons in this course follow the same basic format:

- The primary object is introduced.
- The variety of uses are explained.
- "Friend" objects are introduced and used.
- "Related" objects are introduced and used.
- Any relevant theory is discussed.
- Links and ideas are provided for further study.

Each of these sections will include one or more proposed exercises, and it is important to have the students work through the exercises. Max, even more than most programming environments, is best learned through "doing". Plan on having sufficient time for your students to work through the exercises as you work through the text, and try to catch any missing information **before** you move to the next subject. All of the lessons build on earlier data, so if something isn't clear, it can subvert the entire course.

Another technique that is critical is to have students watch you build Max patches and build them along with you. This over-the-shoulder or "patchalong" approach is much more informative than lecturing, so try to build in plenty of opportunity to allow your students to patch with you. Some concepts (like using shortcut keys for adding objects) are best reinforced by seeing them used over and over. Don't be scared to make mistakes! Making and fixing mistakes are a key concept in the interactive programming model of Max.

---
# Links

Here are some links that will be useful throughout this course:

[The Cycling '74 site](http://www.cycling74.com/): This is the main location for all things Max. There are downloads, tutorials and interviews with Max/MSP/Jitter users. There are also links to current projects on the web and user-created extensions to Max. Lots of useful information.

[MaxObjects.com](http://www.maxobjects.com/): A searchable database of Max objects, including a majority of the third-party objects created for the Max environment. If you are looking for an object that does something specific, MaxObjects.com is likely to be able to help.

[Online Max Docs](https://docs.cycling74.com/latest): An online version of all the documentation, tutorials and hint information that is normally included in Max. This is useful for wherever-you-are lookups, or for reference on a second machine when you are deep into programming. Another cool addition to your Max toolkit.

---

Next: [[1 The button object]]