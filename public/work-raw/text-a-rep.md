![image here](/img/work/rep.png)

# Text A Rep

## Links

* [Landing page](http://git.io/text-congress)
* [Source (GitHub)](//github.com/krrishd/text-a-rep-backend)

## Tools

I used the Twilio API for texts sent and received, Phaxio for the faxes to Congress, [unitedstates/congress-legislators](https://github.com/unitedstates/congress-legislators) for the relevant Congressional data, and Node.js to put it all together.

## Concept

This was built for [CalHacks](http://calhacks.io), UC Berkeley's 36-hour hackathon in collaboration with [Major League Hacking](//mlh.io).

The core idea at play was simple: contacting Congress feels tough (and thus has a high barrier-to-entry) because phone-calls feel like a lot of effort and faxing isn't as optimized for the common person as it could be. Text is probably a more ubiquitous (and low-effort) medium to rely on, so, given the right APIs, it would simply be a matter of leveraging SMS => fax => congress.

The Twilio and Phaxio APIs made the text and fax aspects non-issues, so all that remained was figuring out how to systematically choose which Congressperson a text should reach (and thus which fax #), and how to obtain that data. Luckily, [@unitedstates on GitHub](https://github.com/unitedstates/congress-legislators) provides an open dataset in which Congress, their states/districts, and fax details are all consolidated into YAML.

With that data, I then had to build a fairly straightforward server layer in Node that:

1. listened for texts
2. determined the sender's relevant state based on their phone number (allowing them to specify their own district via text)
3. checked the open data to find their relevant Congressperson and their fax #
4. generated a PDF to fax based on what the sender sent
5. sent that PDF to the relevant fax # via Phaxio
6. confirmed with the sender that their fax was sent

## Status

It was a hackathon project, and in the (unfortunate) spirit of a lot of hackathon projects, it has been mostly abandoned. Emily Ellsworth had an important (and popular) [tweetstorm about how to best reach Congress](https://twitter.com/editoremilye/status/797243849798074368), and the ideas that stuck out to me were that **most letters/faxes rarely get real attention** and that **phone calls were the most effective way to reach them**. In that effect, I don't actually know that making faxing to Congress more accessible would solve any real issues.

Several months after I built this proof-of-concept at CalHacks, a more polished/effective version called [Resistbot](https://resistbot.io/) popped up and started getting a lot of traction. Check them out if you're still interested in the concept!
