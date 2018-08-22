![image here](/img/work/contrary-landing.png)

# Contrary - Website (2017)

## Links

* [Marketing Website](//contrarycap.com)

## Tools

A Node.js (Express) backend (to integrate with Google Drive + Slack), React on the front-end, Sketch for designs.

## My Involvement

I became the owner of this project right around the time the initial design decisions had been made.

The bulk of the UI work was around leveraging React to handle the interactivity on the [Team](//contrarycap.com/team) page (the ability to search/filter through all of our members, etc) as well as on the [Companies](//contrarycap.com/companies) page. Additionally, the designs were aesthetically quite sophisticated, so there was a solid amount of CSS-wrangling to make the site as pixel perfect as possible.

Aside from the logistics of displaying copy/images in an pleasing + functional way that aligned with the Contrary brand, there was also work around leveraging data from a few different sources.

### Google Drive

Google Drive was the data source for two significant components of the website: the [Team](//contrarycap.com/team) page and the [Companies](//contrarycap.com/companies) page. Both of these rely on spreadsheets that exist in the company shared Google Drive, and so there was work around making all the metadata surrounding the Contrary team as well as the portfolio accessible through developer-friendly REST endpoints. This also makes it very simple and intuitive for any Contrary member to update their bio or other metadata without touching any unfamiliar software/code.

### Slack

We were also faced with the task of having all of our team members' portraits available on the Team page -- in a previous iteration of the site, these were all managed as static files within the site repository. This time around, it made more sense to instead integrate with our Slack workspace and delegate the responsibility of hosting/serving all of those images + to give everyone the ability to very easily update them via Slack.


