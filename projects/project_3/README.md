# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: MEAN Stack - Group Project

## Overview

For your 3rd project, you will be collaborating to make an application using the MEAN stack.

Use your imagination! You get to create whatever you want for this app. Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**, but you'll have partners to help you carry the load.

## Project due date
**Friday, May 5**<br>
Submit an issue (as you normally do for homework) with a link to your repo AND a link to your live site. You will be presenting your projects in front of the class. The title for your issue should be `Your Names - Project 3`. Also, be sure to add your project to the google doc that will become available Wed/Thurs of project week. 

## Attendance
You are required to be present at 10:00 am EDT each day during the project. We will be taking attendance - this will count for both morning and afternoon attendance.

## Standups
We will have student-run stand-ups each morning at 10:00 am EDT where you will answer the following questions:
- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

This meeting should take no longer than 15 minutes.

If you have ideas on how you can help a fellow-student with work that they are stuck on, please follow-up with information AFTER the stand up.






## Meetings with instructors
_Your instructor will contact you to setup a meeting time_

**Friday, April 28**<br>
- Projects and groups are announced
- Meet to discuss your ideas with your teammate(s) and choose one idea (remember, you can always use other ideas for your next project(s))
- You will have a 15 minute meeting with an instructor in the afternoon to get your project approved
<br>

- Create a new Github repo *OUTSIDE* of your wdi-remote-hopper repository (more details with info about collaborating on a repo below)
- Create your user stories and add them to your README.md
- Write what features will meet MVP and then list out other features as stretch goals
- Make wireframes and add them to your README.md (or put images and add links)
- Create your daily tracker
- Read the working_in_groups.md (link towards the bottom under resourses - also in this directory)


**Monday, May 1 - Thurdsay, May 4**<br>
15 minute meetings to check in with instructors. We will do things like check your wireframes, overall progress, and direct you to resources.

## Technical Requirements
### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

* A **working full-stack application, built by you & your group members**
* Use the MEAN stack : **M**ongo, **E**xpress, **A**ngular, **N**ode
* You app should consume an API (your own, a third party, or both)
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the **very beginning** of the project. Commit early, commit often
* At **least** one Github commit per day per member
* A daily tracker that all group members use (Trello, github issues, or another similar tracker), that can be reviewed by the instructional team
* **Be deployed online** and accessible to the public via Heroku
* Have a **link to your hosted working app** in the `README.md` file in your github repo

Lastly, a **technical demonstration** of your app which:

  * Is ~5-10 minutes in length
  * All group members should speak during the presentation
  * Shows off all features of the app
  * Explains the technical details
  * Explains the technical challenges
  * Explains which improvements you might make

Additionally, we would like each group member to answer at least at least one of the following questions:
1) What went well for your group?
2) What was your groups biggest struggle?
3) What was the most useful tool that your group relied on the most
4) What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate

---
### &#x1F535; Not mandatory:
#### Recommended features

* **Include portfolio-quality styling**
* **Use a CSS framework** like skeleton or bootstrap
* **Include User Stories**
* **Include wireframes** that you designed during the planning process (uploaded to your github repo)
* **A ``readme.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, and notes to yourself/group members so you can come back to your project later and be able to pick up your train of thought, etc
* **Use a data visualization library like D3**

### Important note about APIs!

When you are calling APIs that require a key, it's up to you to store those keys somewhere private. They are the only proof that you are you and you are allowed to call that API, after all.

For example, it is very important that you not push your API keys to a public Github repo.

This is especially true when working with Amazon Web Services (AWS). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

### Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given several days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. 


## Make a new repo and set up your files for Heroku Deployment 
Take the following steps to ensure you have the right file structure/set up in order to deploy your site to heroku 

- One group member will make the github repo (This will be the owner). This group member will then add other members as collaborators. Collaborators will clone the repo. 

- Owner will create a `.gitignore` file in the root of the repository directory. Put node_modules as the content of this file. Do this *BEFORE* first `git add .` `git commit -m ''` <br>
- Make sure your `server.js` and `package.json` are in the root of the repository. See illustration below
<br>
- On npm init specify `server.js` as your entry point
<br>
- If you did not set up your entry point in `package.json` correctly, make sure that you edit your `pacakge.json` so that `main` is set to `server.js`

<details><summary> Expected File Structure </summary>


![Suggested File Structure](https://i.imgur.com/jY7cBLB.png)

</details>

### Useful Resources

* **[Group Work](https://github.com/ga-students/wdi-remote-hopper/blob/master/projects/project_3/working_in_groups.md)**
* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_





## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
4. Submit a Github issue **on the wdi-remote-hopper** class Github account to receive help from an instructor. Note: You must do @your_instructors_github_handle, inside the comment area of your issue, to notify your instructor that you have created an issue.

## Formatting your GitHub Issue for wdi-remote-hopper to ask for help

*PUSH OFTEN! Your code on GitHub should be up to date. Submitting an issue and linking us to old, out-of-date code will hinder the process.*

1. **WHAT YOU ARE TRYING TO SOLVE:**
  - Write a detailed explanation of the feature or user story you're working on.

2. **DETAILED DESCRIPTION OF THE BUG/ERROR:**
  - A detailed description of the problem, the bug, and/or the error. This means: the full steps to reproduce, a link to the file on github, and the line number of where the relevant code is.
The error(s) returned, copy and pasted/typed out/screenshot, not paraphrased.
  - If there is other code in a different file that is also essential to the functioning of the code that currently works point us to that and explain the relationship.

3. **WHAT I'VE TRIED**
  - List everything you've done to solve the bug on your own in detail. list all resources you've looked up and tried to implement and provide links. Providing code if you have it surrounded by the md syntax to display nicely is very helpful.

4. **QUESTION**
  - After going through all this what is your questions specifically, more specifically than how can I make this work?
