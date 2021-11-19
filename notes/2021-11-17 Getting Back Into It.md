# Overview

Okay so, I've been struggling with getting anything done at all for the last few months. But today I've been able to actually sit down and do some work.

The task for today was really just to get myself back into the habit of real work. The stuff I will been working on is rebuilding my portfolio in Next.js, with today mostly focused on getting the navbar to work.

# Accessibility

I *finally* worked out why I couldn't get tabbing to work for my navbar. It turns out it wasn't actually my fault at all - it's due to an insane MacOS setting that **disables link tabbing by default**. It is an OS-wide setting. I have absolute no idea why such a maliciously stupid design choice has been allowed to exist for so long.

I found the answer here: https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html

Apparently Apple has some really awful accessibility defaults. This is actually really quite bad, especially give how popular macbooks are with developers, and web developers in particular. Might be worth doing a blog post on this topic at some point.

# Navbar Animations

I've made it so that the animation is always disabled on first-render. This fixes the previous issue of a weird opening animation.

It still has a height shift for the buttons on loading, but I think it looks acceptable now - it just looks like its loading, not like a bug.