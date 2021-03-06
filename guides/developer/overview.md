---
title: Overview of Doubtfire
summary: This document provides an overview of Doubtfire
authors: Justfeedme
---

# Introduction

## What is Doubtfire

Doubtfire is a modern, lightweight learning management system.

Central to this approach is use for frequent formative feedback to help each student develop a portfolio of work to
demonstrate they have achieved unit learning outcomes. This approach aims to provide greater opportunities for students
to be more goal-oriented and self-regulated.

Doubtfire, has been used by both staff and students as a platform to support such frequent formative feedback in
assisting students to construct their knowledge.

Doubtfire aims to help support students set learning goals and work toward achieving these, thereby helping support the
development of self-regulation. To better support these features, we have enhanced Doubtfire with open learner model
visualisations to provide better support for indicating the links among these tasks and the unit’s learning outcomes as
well as expected outcomes.

## What does it do

Doubtfire allows staff and student to explore the links between tasks and learning outcomes, enabling staff to monitor
student progress toward achievement of learning outcomes, and supporting students in better manage their learning
progress.

It provides a platform for online learning, by giving tutors the means to allocate tasks to students and assess them,
and giving students a portal to complete and submit tasks, set a grade goal, track their progress via Burndown chart,
and submitting a final portfolio. The portfolio is automatically generated into pdf book form by collation of the
students weekly tasks.

Teachers are allowed to give feedback to students, so that students can revise their submission and re-submit. Students
can request time extensions if they are running behind schedule on a particular task.

A link to using some of the basic features for **staff** can be found [here](/guides#staff).

A link to using some of the basic features for **students** can be found [here](/guides#student).

## Learning and Assessment

The learning outcomes guide all other activities, and are therefore defined at the start of the unit design. The aim of
this process is to define what all students need to demonstrate in order to pass the unit, so these outcomes need to be
clearly expressed in a language that students can engage with. Once outcomes are set, assessment criteria need to be
defined to indicate how students can demonstrate these outcomes to different grade standards. Student activity is then
directed by defining a range of tasks designed to help students achieve the unit learning outcomes to each of the grade
standards.

The method of unit delivery is changed to be student-centered, where students can aim to achieve a given grade by
working through the related tasks. During unit delivery, students work on tasks and submit this work for formative
feedback with flexible deadlines to help students achieve the tasks to the required standard. In this model, staff
assess student work to provide formative feedback aimed at helping the student improve their work and address any
misconceptions. Where the task is of a good standard it is signed off by staff as being Complete, otherwise students are
asked to fix and resubmit the work. This helps ensure that students take notice of formative feedback, and that this
feedback is then acted upon to help inform student learning.

At the end of the teaching period, students use the work they have completed though the unit’s tasks to create a
portfolio. Student portfolios are then assessed in order to determine final student grades. The assessment process uses
the unit’s assessment criteria and unit learning outcomes to determine results. This process can then be informed by the
status of each student’s tasks, with the assessor knowing that those that are marked as complete and have been assessed
by staff as demonstrating the required knowledge.

## Burndown charts - An Agile approach

A key principle of Agile software development methods is that they embrace change by allowing for adaptive, periodic
adjustment of activities, resulting in robust and effective outcomes.

A key driver of Agile development is the use of Burn down charts—a central requirement for the Doubtfire tool.

Doubtfire allows teaching staff to outline the tasks students need to complete during the semester. Student are then
able to monitor their progress against these tasks using burn down charts. The charts show the backlog of work remaining
week by week, which decreases as work is completed.

These charts give students a visual way to know how many tasks they need to complete over the semester, and estimate the
relative complexity of those tasks—a skill which many seem to lack. Students should also be able to use the tool to
determine whether they need to increase their rate of progress (velocity) and, if so, commit more time to the subject or
take greater advantage of resources available to them. In addition to the simple scrum-style marking of tasks as
completed, it was also seen that students could use the system to indicate if they were working on, or having trouble
with, particular tasks. To account for task heterogeneity, staff need to be able to weight tasks, based on predicted
size and complexity. A students projected completion should be recalculated as tasks and weeks progress.

## Who developed it

The main contributors of Doubtfire are Andrew Cain ([@macite](https://github.com/macite)), Alex Cummaudo
([@alexcu](https://github.com/alexcu)) and Jake Renzella ([@jakerenzella](https://github.com/jakerenzella))

---

# Framework - High Level Structure

## Doubtfire Web

Doubtfire Web is the front end (client side) and is written in Javascript, using [AngularJS](http://angularjs.org) and
[Bootstrap](http://getbootstrap.com).

## Doubtfire API

Doubtfire API is the backend (server side) and uses the [Ruby on Rails framework](https://rubyonrails.org).

![High Level Structure of Doubtfire](/guides/overview/high-level-structure.gif)

Grape API is a Restful API. Access to the API via http verbs:

- `GET` - read data
- `PUT` - change data
- `POST` - create data
- `DELETE` - delete data

Firstly we need to start the Rails server by navigating to the `doubtfire-api` folder and running:

```shell
bundle exec rails s
```

![Starting the Rails server](/guides/overview/start-rails-server.png)

Once you have Rail server running, navigate to `localhost:3000/api/docs/`, it gives us access to the API endpoints.

![Doubtfire API documentation](/guides/overview/api-documentation.png)

For example, clicking on "users" shows endpoints such as `GET /api/users`, `POST /api/users`, etc,

![Users API](/guides/overview/users-api.jpg)

The corresponding code can be found in the `users_api.rb` file,

![users_api.rb file](/guides/overview/users-api-ruby.jpg)

You can then fully interact with the API.

### Getting the list of users in the database

First off, let's log in, and view the existing list of users in the database.

If we click on "Users" in the API documentation, it looks like this:

![Users](/guides/overview/users-api.jpg)

We then want to click on `GET /api/users` (Get the list of users), which looks like this:

![Get the list of users](/guides/overview/get-users-endpoint.png)

However, we need an authentication code to do this or any action, i.e. we need to be logged in as a user. To do this,
click on "auth":

![Auth API](/guides/overview/auth-api.png)

Then click on `POST /api/auth` to sign in, using:

```
username: aadmin
password: password
```

![Signing in](/guides/overview/auth-endpoint.jpg)

Click on "Try it out", then scroll down and copy the **auth_token**:

![Auth token](/guides/overview/auth-token.jpg)

We can then go back to "Users", and use this "auth_token" to get the list of users.

![Using auth_token to access API endpoints as a logged in user](/guides/overview/authenticated-api-request.jpg)

Now, if we "Try it out", this time we will get the list of users from the database. Make sure to scroll down to see the
full list.

!["Getting" the list of users from the database](/guides/overview/get-users-response.jpg)

### Creating a user

Next, lets say we want to create a new user into the database.

We should go to Users in the API, select `POST /api/users`, and populate the values for the new user. Also we should add
the same auth_token we used when signing in, as below:

![Creating a new user](/guides/overview/post-users-endpoint.jpg)

After clicking "Try it out", the Response Body should show the database update as below:

![New user added](/guides/overview/post-users-response.png)

Finally to see the newly created user in the list of users, we can go back to "Users" in the API and use the function
"GET - Get the list of users" again.

This time, if we scroll down to the body, we should see our newly created user.

![Newly created user found at the bottom of the List of Users](/guides/overview/post-users-response-result.jpg)

Similarly, we can interact with different sections of the API, and get feedback from the database.

---

# Technologies Used

## Javascript - Angular Framework (front end)

Angular JS is a JavaScript based Open source front end web framework, maintained by Google and by a group of individuals
and corporations to address many of the challenges faced in developing a single page application with components
commonly used in Internet applications. In our case it’s OnTrack. Aim of angular JS is to simplify both testing and
developing by providing a framework for client side with MVC ( Model View Controller ) and MVVM ( Model View viewmodel
).

### What does angular JS DO?

The AngularJS framework works by first reading the Hypertext Markup Language (HTML) page, which has an additional custom
HTML attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the
page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be
manually set within the code, or retrieved from static or dynamic JSON resources.

### Aim of Angular JS’s design

- to decouple DOM manipulation from application logic. The difficulty of this is dramatically affected by the way the
  code is structured.

- to decouple the client side of an application from the server-side. This allows development work to progress in
  parallel and allows for reuse of both sides.

- to provide structure for the journey of building an application: from designing the UI, through writing the business
  logic, to testing.

## Ruby On Rails (back end)

Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The
Rails framework helps developers to build websites and applications, because it abstracts and simplifies common
repetitive tasks. Rails is written in Ruby, the programming language which is also used alongside Rails. Ruby is to
Rails as PHP is to Symfony and Zend, or as Python is to Django. Ruby on Rails development is convention over
configuration. This means that the programmer does not have to spend a lot of time configuring files in order to get
setup, Rails comes with a set of conventions which help speed up development. **Rails is the emphasis on RESTful
application design.** REST (Representational State Transfer) is a style of software architecture based around the
client-server relationship. It encourages a logical structure within applications, which means they can easily be
exposed as an API (Application Programming Interface).

### Why are we using Ruby On Rails?

1. The process of programming is much faster than with other frameworks and languages, partly because of the
   object-oriented nature of Ruby and the vast collection of open source code available within the Rails community.

2. The Rails conventions also make it easy for developers to move between different Rails projects, as each project will
   tend to follow the same structure and coding practices.

3. Rails is good for rapid application development (RAD), as the framework makes it easy to accommodate changes.

4. Ruby code is very readable and mostly self-documenting. This increases productivity, as there is less need to write
   out separate documentation, making it easier for other developers to pick up existing projects.

5. Rails has developed a strong focus on testing and has good testing frameworks.

6. Rails and most of its libraries are open source, so unlike other commercial development frameworks there are no
   licensing costs involved.

## GitHub

Github is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool,
GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features,
such as a wikis and basic task management tools for every project.

### How it works?

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on
projects from anywhere. You'll create your own repository and learn GitHub's Pull Request workflow, a popular way to
create and review code

### What is a pull request?

A pull request (PR) is a method of submitting contributions to an open development project. It occurs when a developer
asks for changes committed to an external repository to be considered for inclusion in a project's main repository after
the peer review.

### Why to use Github?

It includes access controls as well as a number of collaboration features like tools for basic task management and for
all projects you handle. GitHub hosts your source code projects in a variety of different programming languages and
keeps track of the various changes made to every iteration.

## Restful API

## MVC model (Model-View-Controller)

It’s a Software design pattern Commonly used for developing user Interfaces which divides the related program logic into
three interconnected elements, This is done to separate internal representations of information from the ways
information is presented to and accepted from the user. This patten us used for designing the layout of the web page.
Popular programing languages like Java, Python, Ruby, PHP etc have MVC frameworks used for web and mobile application
development.

![The MVC Model](/guides/overview/mvc.png)

### Why use MVC model

1. Multiple developers can work simultaneously on the model, controller and views.

2. MVC enables logical grouping of related actions on a controller together. The views for specific model are also
   grouped together.

3. The very nature of the MVC framework is such that there is low coupling among models, views or controllers

4. Because of the separation of responsibilities, future development or modification is easier.

5. Models can have multiple views

## Active Record

guides.rubyonrails.org -> Models -> Active Record Basics https://guides.rubyonrails.org/active_record_basics.html

## Facade Design pattern (front end of Doubtfire)

The facade pattern is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in
architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or
structural code.

A facade can improve the readability and usability of a software library by masking interaction with more complex
components behind a single (and often simplified) API.

In other words, **a simplified API (facade) with required user functions are provided to the user.** The user can then
access the required functionality through the API's methods, without needing to understand the underlying complexities
of the system.

![The Facade design pattern](/guides/overview/facade.png)

### When to use Facade pattern

Developers often use the facade design pattern when a system is very complex or difficult to understand because the
system may have many interdependent classes. **This pattern hides the complexities of the larger system and provides a
simpler interface to the client.**

---

# Installing the Development Environment

---

# Code Exploration

## Doubtfire-API

### Database and Object model mapping

The database is found in `app/db/schema.rb`. It shows the current version of the database, which consists of the various
create_table statements to create the database structure. Schema.rb tells us the different tables in the database and
the values they contain.

![Schema.rb](/guides/overview/schema-ruby.jpg)

Doubtfire uses the Object model, where all the objects are found in `app/models` folder. We can then map the "projects"
table in schema.rb, to the project.rb object in the `app/models` folder. Whereas the "projects" table contains the
definition of the attributes of the object, the project.rb object contains the functionality.

![Mapping of Projects Table (left) with Project Object (right)](/guides/overview/project-schema-to-object-mapping.jpg)

Doubtfire utilizes the migrations feature of Active Record to incrementally modify the database, and then regenerate the
schema definition.

To look into this further, one should look at the various tables in **schema.rb** and their corresponding mappings with
their Object classes and class functions in the `app/models` folder.

## Doubtfire-Web

---

# UML Class Diagrams

---

# Contributing

---

# Useful References

---
