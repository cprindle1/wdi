![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Managing your Projects<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creator: Kristyn Bryan for WDIR-Panthalassa<br>
    Course: WDIR-Hopper<br>
Competencies: Agile, Scrum, Trello, estimating stories<br>
Prerequisites: none <br>

---

# Morning Exercise

In this morning's exercise, I want to introduce you to some of the product management tools that you will be encountering on the job and also get you familiar with Trello. You will be using Trello to keep track of your 3rd project (and beyond!).

## Agile Development 
References can be found [here](https://www.atlassian.com/agile/delivery-vehicles)

Agile development uses four clear delivery vehicles to bring structure to any agile project: 
- user stories
- sprints
- epics
- versions

By working with these vehicles, software teams are able to organize their work such that they can respond to customer feedback and change from the original plan of the project without feeling like the walls have crumbled around them. The ability to change and adapt future plans based on current insights is a hallmark of agility.

For our class projects, we just focus on user stories and how to used them when we develop, but first...scrum.

## Scrum

#### History of Scrum 
References can be found [here](https://en.wikipedia.org/wiki/Scrum_(software_development) )

Scrum was first defined as "a flexible, holistic product development strategy where a development team works as a unit to reach a common goal" as opposed to a "traditional, sequential approach" in 1986 by Hirotaka Takeuchi and Ikujiro Nonaka in the New Product Development Game.[5] Takeuchi and Nonaka later argued in The Knowledge Creating Company[6] that it is a form of "organizational knowledge creation, [...] especially good at bringing about innovation continuously, incrementally and spirally".

 They called this the holistic or rugby approach, as the whole process is performed by one cross-functional team across multiple overlapping phases, where the team "tries to go the distance as a unit, passing the ball back and forth".[7] (In rugby football, a scrum refers to a tight-packed formation of players with their heads down who attempt to gain possession of the ball.[8])

As developers, you will work with your team (developers, product managers, project managers, designers, etc.) to get a product out. With the Scrum method, everyone works on the same team and focuses on what needs to be done to reach the final goal.

#### Daily Scrum

This might look familiar - we do a version of this during your project week:

Each day during a sprint, the team holds a daily scrum (or stand-up) with specific guidelines:

All members of the development team come prepared. The daily scrum...

  ...starts precisely on time even if some development team members are missing<br>
  ...should happen at the same time and place every day<br>
  ...is limited (timeboxed) to fifteen minutes<br>
  
Anyone is welcome, though normally only scrum team roles contribute.
During the daily scrum, each team-member answers three questions:
- What did I do yesterday that helped the development team meet the sprint goal?
- What will I do today to help the development team meet the sprint goal?
- Do I see any impediment that prevents me or the development team from meeting the sprint goal?
Any impediment (stumbling block, risk or issue) identified in the daily scrum should be captured by the scrum master and displayed on the team's scrum board, with an agreed person designated to working toward a resolution (outside of the daily scrum). No detailed discussions should happen during the daily scrum.

### Other Agile Development - Kanban
Another popular approach to development is [Kanban](https://www.atlassian.com/agile/kanban)

![kanban v scrum](https://i.imgur.com/Cgm1DTi.png)

The work of all kanban teams revolves around a kanban board, a tool used to visualize work and optimize the flow of the work among the team. 

Regardless of whether a team's board is physical or digital, their function is to ensure the team's work is visualized, their workflow is standardized, and all blockers and dependencies are immediately identified and resolved. A basic kanban board has a three-step workflow: To Do, In Progress, and Done. 

The kanban methodology relies upon full transparency of work and real-time communication of capacity, therefore the kanban board should be seen as the single source of truth for the team's work.

![kanban board](https://i.imgur.com/4kfEDN2.png)

## Using a tracker in Agile Development

There are a few different tools that can be used to plan scrum development. We're just going to look at briefly at two of them, but here's a more comprehensive [list](https://en.wikipedia.org/wiki/Comparison_of_Scrum_software) of what might be used and the features that come with them.

### Jira

![Jira Example](http://www.sm-cloud.com/content/images/2014/Jun/jiraagile-02_whyja_1_flexibleplanning.png)

### Trello

We're doing small applictions and don't need all the fancy stuff that comes with Jira, so we'll use *Trello* to mimic the flow that most of you will be using during production!

![Trello Example](https://i.imgur.com/L6R0X82.png)

Each column is referred to as a "list" and inside the list sit "cards". Each of these cards is meant to contain information to create one feature of your application. Only one person may take ownership of a card AND only one card should be claimed at a time. Depending how you decide to do this with your team, each card may also represent a branch in Github (this is how it works in Jira). 

### Github Issues & Waffle.io

You can create issues inside your Github repo:

![what it looks like on Github](https://i.imgur.com/ZFtuGX5.png)

You can choose to just use the issues or you can work with it through Waffle.io which is a more visually appealing site (closer to what you see with Jira and Trello).

![waffle screen](https://i.imgur.com/cy2nesq.png)


## User Stories

Writing user stories is simple if you follow these simple steps:

1. As a [role], I can [feature] so that [reason]

When writing user stories, using this pattern will help you focus on what should be happening with your application:

>As an account owner, I can check my balance online so that I can keep a daily balance 24 hours a day.

In some instances the suffix is redundant and can be be removed:

>As an account owner, I can check my balance online.

Feel free to use slight deviations of this template using synonyms:

- As a [role], I want [feature] because [reason]
- As a [role], I can [feature]
- As a [role], I can [feature] so that [reason]

Once you have your users stories written, you can continue with the planning...

## Scrum poker (Estimating Stories)
References can be found [here](https://en.wikipedia.org/wiki/Planning_poker)

Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed. 

If you are doing this remotely, you will count to three and then throw up your fingers (or hold up your cards OR use the calculator on your smartphone to display your number) to show your number estimation (kind of like rock, paper, scissors).

By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.

### How to play
Planning poker is based on a list of features to be delivered, several copies of a deck of cards and optionally, an egg timer that can be used to limit time spent in discussion of each item.

The feature list, often a list of user stories, describes some software that needs to be developed.

The cards in the deck have numbers on them. A typical deck has cards showing the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) including a zero: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

Why is the Fibonacci sequence used? There are many [opinions on this](http://stackoverflow.com/questions/9362286/why-is-the-fibonacci-series-used-in-agile-planning-poker) and I've linked them here. Ultimately, I think that it's because it helps to represent the hours that it might take to complete the work. Something that might be a 1 would take you 2 hours while something that is a 3 would take you 6 hours... not just 1 extra hour, etc.

Doing planning poker will help you figure out how long your overall plan will take, sets time aside to discuss any unforseen problems before coding begins, and also might help you figure out who to assign to which task.

<hr>

### Your Turn to Practice

1. Decide with your partner whether to create Github Issues (with or without Waffle.io) OR create a Trello account: www.trello.com. If you want to use Github issues, one person should create a repo (or use an old one), add your partner as a Collaborator.
2. When making your Trello account, be sure to take note of your screenname OR update the screenname that they automatically assign to you to something that you will remember (and that is at least semi-professional).
3. With your partner, decide who will create the issues / cards for this activity (you only need one board / repo for this activity, but you should both have access to it).
4. If you're using Trello, create the lists for "To-Do", "In Progress", "In Review", and "Done". If you're using Github Issues, you can create Labels with these words, OR connect to Waffle.io at this time. 
5. With the following user stories, create cards (issues) under "To-Do" that split up the work into pieces (stories) that can be individually tackled. 

**USER STORIES**
 - The user should be able to log in to their account.
 - The user should be able to see the songs when they land on the home page.
 - The user should be able to click on a song from the home page and see the details of that song on a seperate page.
 - The user should be able to save the song to their playlist.

6. Discuss which card that you'd like to take and work on for your first stab at the project. Remember - only take one card! It's advisable to select things that won't have you working inside the same file - this way you won't have merge conflicts (so perhaps somene can do some styling while the other person works on some logic). *Add yourself* to the card (`Members`) and move it over to the "In Progress" List.
7. Have you run into any issues? Can you see how this might be advantageous to use when working with other people?
8. If you have extra time, try giving [Scrum poker](https://www.mountaingoatsoftware.com/tools/planning-poker) a try on your cards and assign them a value. Because you're doing this remotely (and I've seen this done in multiple settings even in-person), you will count to three and then throw up your fingers to show your number estimation (kind of like rock, paper, scissors). If your numbers are totally off (one of you throws a 1 and the other throws a 5), you can each discuss why you assigned it that number.
