![image here](/img/work/gocontribute.png)

# goContribute

## Links

* [Demo](http://gocontribute.herokuapp.com)
* [Source (GitHub)](//github.com/krrishd/gocontribute)
* The demo may be half-broken due to changes in the GitHub API; due to rate-limiting, after ~2 queries on the tool, it breaks for approximately 10 minutes. It was years ago ¯\_(ツ)_/¯.

## Tools

GitHub API, HTML/CSS, Node.js, Angular.js (1.x)

## Concept

I built this for the Third Annual Github Data Challenge.

The core idea was to build a tool which would figure out for the end-user which GitHub repositories they'd be most fit to contribute to.

I used Node + Angular to implement a very rudimentary start to doing so, the logic of which is described as follows. Be warned, this was written during my sophomore year of high school at which point my math knowledge was limited to basic calc + AP Statistics:

In essence, it takes two primary factors:

- Your language of proficiency/preference
- Your prioritization of
     - no. of stars
     - frequency of activity
     - no. of issues
     - the size of the contributor base

and gives you the ten best repositories on GitHub for you to contribute to.

### Reasoning behind the four factors of prioritization

Why did I choose the number of stars, frequency of activity, number of issues, and the size of the contributor base as the determining factors?

**No. of stars**

The number of stars criteria was because many people are looking to add credibility to their GitHub profiles. One way to do this successfully is to be a contributor to very popular repositories on GitHub; having played a part in the development of a library of piece of software used by hundreds, thousands, or even millions is quite the credential to have in the realm of open source.

**Frequency of activity**

A large part of contributing to open source is the activity around the software. It may not be worth your while to try to contribute to a repository where not much has been going on for a while. It can be beneficial to contribute to a repository where changes are constantly being pushed, which will increase the likelihood of the administrators seeing your pull request and getting your changes merged into the repository at all.

**Number of issues**

Rather than simply making changes that are helpful but not necessarily of priority, it's generally more productive to address existing issues in the software. In addition, the more issues that exist, the more issues that will match your skillset and proficiency.

**Number of contributors**

Having a large number of contributors is reflective on a repository's willingness to take outside contribution. Some open source projects are generally closed to most outsiders, whereas some tend to accept a large number of contributions from outsiders; it's more beneficial to try to contribute to the latter.

### The math.

Upon using the tool, you'll find that each repository listed is given a certain composite score. Here's how I calculated them.

1. I first took the top 100 repositories of a certain language, via the GitHub Search API.
2. Then, I calculated the means and standard deviations of:
     - stars
     - number of issues
     - contributors
     - the difference between the current date and the last push
3. After that, I calculated a z-score for the stars, issues, contributors, and activity of each repository. For anyone who may not recall what a z score is: http://en.wikipedia.org/wiki/Standard_score
4. I then collected the percentages of influence the user allotted to stars, contributors, issues, and activity.
5. With that data, I then used the following formula to get the final score of a repository:
```
(
     ( percentageForStars * starsZScore ) +
     ( percentageForIssues * issuesZScore ) +
     ( percentageForActivity * activityZScore ) +
     ( percentageForContributors * contributorsZScore )
) * 100
```
