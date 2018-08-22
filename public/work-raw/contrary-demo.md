![image here](/img/work/contrary-demo-ui.png)

# Investor <> Startup Matching at Contrary Demo Day (2018)

## The problem

The task was the scheduling of an optimal set of meetings between ~60 angel/VCs, and our 10 portfolio companies, not only based on **time constraints** but also the **rankings that these investors/startups gave each other** after the Demo Day presentations.

The project was the design & implementation of an algorithm and the surrounding system to take these rankings + timing + other heuristics into account and schedule an optimal set of meetings within a certain timespan on Demo Day.

## Algorithm design

The initial step was to look into conventional 'matching' algorithms (such as [Gale-Shapely](https://www.geeksforgeeks.org/stable-marriage-problem/)) that I'd encountered academically. Unfortunately, given the unique set sizes + scheduling constraints, none of the existing solutions were quite right for this problem (please email me if I'm wrong about that @ [krish@contrarycap.com](mailto:krish@contrarycap.com) :))

With that out of the way, the first step was to establish certain pre-conditions/heuristics that would have to be satisfied:

* we'd want 100% of the investors to be given at least 1 meeting
* given that our startups + the time were scarce, the maximum number of meetings possible were the **number of startups mulitiplied by the number of meeting slots** (we'd want no less)

I spent around a week or two generating test data, designing, and subsequently testing a few different algorithms to do so -- eventually the preconditions were mostly satisfied: 100% of the possible meetings were scheduled, and every investor in the test data got at least 1 meeting.

### Minimizing wait times, less investors with only 1 meeting

Something that emerged upon satisfiability, however, was the phenomenon of certain investors having super long wait times before their very first (and sometimes only) meeting. Intuitively, this seemed like it'd cause some investors to flake, and so to minimize the flaking it seemed valuable to try to **minimize the majority of wait times**. We also wanted to **increase the number of investors who got more than one meeting**.

![image here](/img/work/contrary-demo-analytics.png)

To figure out the meeting duration after which there'd be diminishing returns on both of those fronts, I then instrumented the algorithm to track certain metrics, conducted simulations with several different durations, and worked with our GP to figure out the most reasonable duration based on the results. I briefly considered using some calculus/stats to find a more exact optimal duration, but decided it would be overkill for now.

## Implementation details

The interfaces for collecting the startup/investor rankings were fairly barebones, built in React with an Express.js + MongoDB backend.

![image here](/img/work/contrary-demo-ui.png)

We also leveraged Heroku for deployment and SendGrid for email delivery.



