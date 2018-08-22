![image here](/img/work/write.png)

# Write (2016)

## Links

* [Try it out!](http://write.itskrish.co)
* [Source (GitHub)](//github.com/krrishd/write)

## Press

* [Product Hunt (front page, 200+ upvotes)](https://www.producthunt.com/posts/write-4)
* [Parenting Roundabout Podcast](http://parentingroundabout.libsyn.com/episode-171-stop-the-calendar-we-want-to-get-off)
* [FreeTech4Teachers](http://www.freetech4teachers.com/2017/05/write-surge-minimalist-writing-platform.html#.WSCZvrzzRSV)
* [UsefulInterweb.com](http://usefulinterweb.com/post/160835994896/keep-writing-or-everything-gets-deleted)
* [HVG Tech (Hungarian tech publication)](http://hvg.hu/tudomany/20170519_write_gyors_iras_gepeles)

## Tools

I used Sketch for the basic design/wireframing, and then React (JavaScript) for implementation. Currently hosted on surge.sh.

## Concept

My initial spec was fairly straightforward since the underlying concept of the editor is not new: to implement a free version of **[Flowstate](http://hailoverman.com/flowstate) built for the web, with a cleaner UI, less cognitive load along the way, and room for rapid iteration**.

For clarity, Flowstate is a desktop-based editor with two core constraints: you choose a fixed duration within which you write, and **if you decide to stop typing** for more than a few seconds within that duration, **all your work is erased**.

Flowstate was designed with such constraints to address the broader issue of writer's block; I've found (retrospectively) that in addition to **mitigating writer's block**, the format incidentally makes it really easy to engage in **stream-of-consciousness writing**, which is otherwise very difficult to actually keep up with and derive value from, at least for a non-writer.

The current feature-set of Write includes:

* the ability to choose from 4 preset durations within which to write
* the editor, including keybindings for bold/italic text (no toolbar because it would distract)
* a timer within the editor, including both the time left in minutes/seconds + a subtle progress bar at the top
* the ability to access saved journals (and download/upload export files that archive them)

## UX Insight

I've been using the tool for several months for **therapeutic journalling**, and from my perspective that might be the most value I've found in the tool. Being able to force every thought in my mind – latent or prominent – into writing, has allowed for **unprecedented levels of clarity in my mind**. Choosing the 15 minute duration (the default) initially left me out of things to write about around the ~7 minute mark, but given that I was forced to keep writing, I had to keep typing until something else bubbled up from my thoughts. I found a lot of thoughts coming up that I'd otherwise ignore; it's those kinds of thoughts that unclutter the mind when clarified.

I've tried journalling before but was never able to make a habit of it. Two factors have made this tool habitual (every 2-3 days) for me:

* For one, the duration being finite makes it easy to approach, given that it's clear that after 15 minutes I can move on to whatever else I wanted to do.
* More powerful, in my opinion, is that **I've been [Pavlov'd](https://www.learning-theories.com/classical-conditioning-pavlov.html)** into a flow where, when my mind is unclear or cluttered, I automatically want to journal about it for the finite duration. I didn't design Write around such a cognitive trigger, so I can only assume that the utility from journalling with it has been so significant that **my subconscious mind craves that utility** when it needs it. Whether that's utility inherent to journalling or just my tool remains to be seen; either way, it's utility I've only gained access to through the constraints of Write & Flowstate.
