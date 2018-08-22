

<img src="/img/work/flm.png" class="fancy" />

# Fundraising 2.0 at First Look (2018)

## Tools

React, Relay, Node.js, GraphQL, PostgreSQL

## My Involvement

You might recognize First Look as home to:
* [The Intercept](//theintercept.com)
* [Press Freedom Defense Fund](https://www.pressfreedomdefensefund.org/)
* [Topic Studios](https://www.topic.com/topic-studios)
* [Field Of Vision](https://fieldofvision.org/)
* [The Nib](https://thenib.com/)

The fundraising platform for these social-good oriented brands and non-profits was initially one weakly-branded, context-deficient form, hosted and maintained by a third-party. My project this summer was to create a white-labeled platform for editorial staff at all the FLM brands that'd:

* let staff create one-off fundraising campaigns with rich content and imagery to provide context
* allow for analytics to better understand our funnel and tweak our fundraising approaches
* be template-driven, allowing for flexibility in how these campaigns would be presented
* integrate into the existing data pipelines + content management systems at FLM
* integrate seamlessly with the underlying systems handling our transactions/memberships (ie. Stripe + Salesforce)

My time there encompassed all the components of the product development lifecycle.

### Scoping/Architecture

I first researched the functionality that the current solution already provided, to ensure parity between the new platform and the status quo as a bare minimum. I also researched other fundraising solutions to understand the landscape.

I also worked with the Chief Architect at FLM to determine how the pieces would fit into the existing architecture underlying all of FLM -- this involved becoming familiar with all the different systems at FLM and brainstorming the best way to represent/manage campaigns as data.

### Implementation

There were three main phases of implementing this platform.

* **Data**: Underlying all of the brands at FLM and their content-management was a sophisticated GraphQL service (interfacing with Elasticsearch for reads & PostgreSQL for mutations). I spent a decent amount of time implementing the various components of this new platform (campaigns, template, brands) as entities within this service.

* **Content Management**: I spent some time in their custom content-management system powered by React/Relay + the GraphQL service, building the interface to create these fundraising campaigns.

* **Campaigns**: I built a platform (React + Relay) that'd serve the various templates for these campaigns. I also built the first template for The Intercept/Intercepted brands. This phase also encompassed me designing the UI that I'd then develop for this template.
</div>



