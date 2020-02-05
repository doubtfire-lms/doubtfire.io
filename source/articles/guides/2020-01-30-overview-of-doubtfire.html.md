---

title: Overview of Doubtfire
date: 2020-01-30 10:34 AEST
tags: contributing

author: Prem
summary: This document provides an overview of Doubtfire

---

## Doubtfire Overview
A getting started guide

---
###### Menu

[Introduction](#intro)  
[Framework](#framework)  
[Technologies used](#tech)  
[Installing the Development Environment](#install)  
[Code Exploration](#code)  
[UML Class Diagrams](#uml)  
[Contributing](#contrib)  
[Useful References](#refs)

---

<a id="intro"></a>
### Introduction

#### What is Doubtfire

Doubtfire is a modern, lightweight learning management system.

Central to this approach is use for frequent
formative feedback to help each student develop a portfolio of
work to demonstrate they have achieved unit learning outcomes.
This approach aims to provide greater opportunities for students to
be more goal-oriented and self-regulated.

Doubtfire, has been used by both staff
and students as a platform to support such frequent formative
feedback in assisting students to construct their knowledge.

Doubtfire aims to help support students set learning goals and
work toward achieving these, thereby helping support the
development of self-regulation. To better support these features,
we have enhanced Doubtfire with open learner model
visualisations to provide better support for indicating the links
among these tasks and the unit’s learning outcomes as well as
expected outcomes.

#### What does it do

Doubtfire allows staff and student to explore the links between tasks
and learning outcomes, enabling staff to monitor student progress
toward achievement of learning outcomes, and supporting
students in better manage their learning progress.

It provides a platform for online learning, by giving tutors the means to 
allocate tasks to students and assess them, and giving students a portal
to complete and submit tasks, set a grade goal, track their progress via
Burndown chart, and submitting a final portfolio. The portfolio is 
automatically generated into pdf book form by collation of the students 
weekly tasks.

Teachers are allowed to give feedback to students, so that students can 
revise their submission and re-submit. Students can request time extensions 
if they are running behind schedule on a particular task.

A link to using some of the basic features for **staff** can be found 
[here](https://doubtfire-lms.github.io/doubtfire.io/articles/guides/tags/staff_guides/).

A link to using some of the basic features for **students** can be found 
[here](https://doubtfire-lms.github.io/doubtfire.io/articles/guides/tags/student_guides/).

#### Learning and Assessment

The learning
outcomes guide all other activities, and are therefore defined at the
start of the unit design. The aim of this process is to define what
all students need to demonstrate in order to pass the unit, so these
outcomes need to be clearly expressed in a language that students
can engage with. Once outcomes are set, assessment criteria need
to be defined to indicate how students can demonstrate these
outcomes to different grade standards. Student activity is then
directed by defining a range of tasks designed to help students
achieve the unit learning outcomes to each of the grade standards.

The method of unit delivery is
changed to be student-centered, where students can aim to achieve
a given grade by working through the related tasks. During unit
delivery, students work on tasks and submit this work for
formative feedback with flexible deadlines to help students
achieve the tasks to the required standard. In this model, staff
assess student work to provide formative feedback aimed at
helping the student improve their work and address any
misconceptions. Where the task is of a good standard it is signed
off by staff as being Complete, otherwise students are asked to fix
and resubmit the work. This helps ensure that students take notice
of formative feedback, and that this feedback is then acted upon to
help inform student learning.

At the end of the teaching period, students use the work they have
completed though the unit’s tasks to create a portfolio. Student
portfolios are then assessed in order to determine final student
grades. The assessment process uses the unit’s assessment criteria
and unit learning outcomes to determine results. This process can
then be informed by the status of each student’s tasks, with the
assessor knowing that those that are marked as complete and have
been assessed by staff as demonstrating the required knowledge.

#### Burndown charts - An Agile approach

A key principle of Agile software development methods
is that they embrace change by allowing for adaptive, peri-
odic adjustment of activities, resulting in robust and effective
outcomes. 

A key driver of Agile development is the use of Burn down charts - a central requirement for the Doubtfire tool. 

Doubtfire allows teaching staff to outline the tasks students need to
complete during the semester. Student are then able to monitor
their progress against these tasks using burn down charts. The
charts show the backlog of work remaining week by week,
which decreases as work is completed.

These charts give
students a visual way to know how many tasks they need to
complete over the semester, and estimate the relative complex-
ity of those tasks – a skill which many seem to lack. Students
should also be able to use the tool to determine whether they
need to increase their rate of progress (velocity) and, if so,
commit more time to the subject or take greater advantage of
resources available to them.
In addition to the simple scrum-style marking of tasks as
completed, it was also seen that students could use the system
to indicate if they were working on, or having trouble with,
particular tasks.
To account for task heterogeneity, staff need to be able
to weight tasks, based on predicted size and complexity. A
students projected completion should be recalculated as tasks
and weeks progress.

#### Who developed it

The main contributors of Doubtfire are Andrew Cain (@macite), Alex Cummaudo (@alexcu)
and Jake Renzella (@jakerenzella)

---

<a id="framework"></a>
### Framework - High Level Structure


#### Doubtfire Web
   
 Doubtfire Web is the front end - client side - and is written in Javascript, using 
[Angular](http://angularjs.org) application built using 
[Bootstrap](http://getbootstrap.com).
                   
#### Doubtfire API

Doubtfire API is the backend - server side - and uses the Ruby on Rails framework.

![Imgur](https://imgur.com/4ZTVYAi.gif)
*High Level Structure of Doubtfire*

Grape API is a Restful API.
Access to the API via http verbs:

- get - read data
- put - change data
- post - create data
- delete - delete data

Firstly we need to start the Rails server by navigating to the doubtfire-api folder and running:

    bundle exec rails s

![Imgur](https://imgur.com/Ousq0PH.png)
*Starting the Rails server*

Once you have Rail server running, navigate to 0.0.0.0:3000/api/docs/, it gives us access to the API endpoints.

![Imgur](https://imgur.com/xeGu9TU.png)
*Doubtfire API Documentation*

For example, clicking on "users" shows endpoints 
such as Get, Post, etc, which represent the same in the code users_api.rb

![Imgur](https://imgur.com/QLHn0Dj.png)

The endpoints above (Get, Post, etc) are found in the code in users_api.rb, as below.

![Imgur](https://imgur.com/2dPNtAF.png)
*users_api.rb file*

You can then fully interact with the API. 

##### Getting the list of users in the database

First off, let's log in, and view the existing list of users in the database.

If we click on "Users" in the API documentation, it looks like this:

![Imgur](https://imgur.com/nOWEhGJ.png)
*Users*

We then want to click on "GET" (Get the list of users), which looks like this: 

![Imgur](https://i.imgur.com/6Koxh3U.png)
*Get the list of users*

However, we need an authentication code to do this or any action, i.e. we need to be logged in as a user. To do this, click on "auth":

![Imgur](https://imgur.com/GRUzdp5.png)
*Auth*

Then click on "POST" to sign in, using:

    username: aadmin
    password: password

![Imgur](https://imgur.com/UDlXoaQ.png)
*Signing in*

Click on "Try it out", then scroll down and copy the **auth_token**:

![Imgur](https://imgur.com/ZNtjzlp.png)
*Auth token*

We can then go back to "Users", and use this "auth_token" to get the list of users.

![Imgur](https://imgur.com/JnX88im.png)
*Using auth_token to access API endpoints as a logged in user*

Now, if we "Try it out", this time we will get the list of users from the database. Make sure to scroll down to see the full list.

![Imgur](https://imgur.com/oC4V64d.png)
*"Getting" the list of users from the database*

##### Creating a user

Next, lets say we want to create a new user into the database.

We should go to Users in the API, select "POST create new user", and populate the values for the new user. Also we should add the same auth_token we used when signing in, as below:

![Imgur](https://imgur.com/glBwPBC.png)
*Creating a new user*

After clicking "Try it out", the Response Body should show the database update as below:

![Imgur](https://imgur.com/m8LsPIk.png)
*New user added*

Finally to see the newly created user in the list of users, we can go back to "Users" in the API and use the function "GET - Get the list of users" again.

This time, if we scroll down to the body, we should see our newly created user.

![Imgur](https://imgur.com/31H3e0F.png)
*Newly created user found at the bottom of the List of Users*

Similarly, we can interact with different sections of the API, and get feedback from the database.



---

<a id="tech"></a>
### Technologies Used

#### Javascript - Angular Framework (front end)

Angular JS is a JavaScript based Open source front end web framework, maintained by Google and by a group of individuals and corporations to address many of the challenges faced in developing a single page application with components commonly used in Internet applications. In our case it’s OnTrack. Aim of angular JS is to simplify both testing and developing by providing a framework for client side with MVC ( Model View Controller ) and MVVM ( Model View viewmodel ).  

Angular JS is a part of MEAN (Used to build dynamic web pages and applications) which contains MongoDB Data base, Express Java script web application server framework, Angular JS and Node JS server runtime environment.  

##### What does angular JS DO? 

The AngularJS framework works by first reading the Hypertext Markup Language (HTML) page, which has an additional custom HTML attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. 

##### Aim of Angular JS’s design

- to decouple DOM manipulation from application logic. The difficulty of this is dramatically affected by the way the code is structured. 

- to decouple the client side of an application from the server-side. This allows development work to progress in parallel and allows for reuse of both sides. 

- to provide structure for the journey of building an application: from designing the UI, through writing the business logic, to testing. 

#### NodeJS (front end - server)

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 

Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionalities. Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions. Node.js's modules use an API designed to reduce the complexity of writing server applications.

#### Ruby On Rails (back end)

Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. Rails is written in Ruby, the programming language which is also used alongside Rails. Ruby is to Rails as PHP is to Symfony and Zend, or as Python is to Django. Ruby on Rails development is convention over configuration. This means that the programmer does not have to spend a lot of time configuring files in order to get setup, Rails comes with a set of conventions which help speed up development. **Rails is the emphasis on RESTful application design.** REST (Representational State Transfer) is a style of software architecture based around the client-server relationship. It encourages a logical structure within applications, which means they can easily be exposed as an API (Application Programming Interface). 

##### Why are we using Ruby On Rails? 

1. The process of programming is much faster than with other frameworks and languages, partly because of the object-oriented nature of Ruby and the vast collection of open source code available within the Rails community. 

2. The Rails conventions also make it easy for developers to move between different Rails projects, as each project will tend to follow the same structure and coding practices. 

3. Rails is good for rapid application development (RAD), as the framework makes it easy to accommodate changes. 

4. Ruby code is very readable and mostly self-documenting. This increases productivity, as there is less need to write out separate documentation, making it easier for other developers to pick up existing projects. 

5. Rails has developed a strong focus on testing and has good testing frameworks. 

6. Rails and most of its libraries are open source, so unlike other commercial development frameworks there are no licensing costs involved. 

#### GitHub 

Github is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project. 

##### How it works? 

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. You'll create your own repository and learn GitHub's Pull Request workflow, a popular way to create and review code 

##### What is a pull request? 

A pull request (PR) is a method of submitting contributions to an open development project. It occurs when a developer asks for changes committed to an external repository to be considered for inclusion in a project's main repository after the peer review.  

##### Why to use Github? 

It includes access controls as well as a number of collaboration features like tools for basic task management and for all projects you handle. GitHub hosts your source code projects in a variety of different programming languages and keeps track of the various changes made to every iteration. 

#### Restful API 

#### MVC model (Model-View-Controller)

It’s a Software design pattern Commonly used for developing user Interfaces which divides the related program logic into three interconnected elements, This is done to separate internal representations of information from the ways information is presented to and accepted from the user. This patten us used for designing the layout of the web page. Popular programing languages like Java, Python, Ruby, PHP etc have MVC frameworks used for web and mobile application development. 

![Imgur](https://imgur.com/3el2erJ.png)
*The MVC Model*

##### Why use MVC model

1. Multiple developers can work simultaneously on the model, controller and views. 

2. MVC enables logical grouping of related actions on a controller together. The views for specific model are also grouped together. 

3. The very nature of the MVC framework is such that there is low coupling among models, views or controllers 

4. Because of the separation of responsibilities, future development or modification is easier. 

5. Models can have multiple views 

#### Active Record

guides.rubyonrails.org -> Models -> Active Record Basics
https://guides.rubyonrails.org/active_record_basics.html

#### Facade Design pattern (front end of Doubtfire)

The facade pattern is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or structural code.

A facade can improve the readability and usability of a software library by masking interaction with more complex components behind a single (and often simplified) API.

In other words, **a simplified API (facade) with required user functions are provided to the user.** The user can then access the required functionality through the API's methods, without needing to understand the underlying complexities of the system.

![Imgur](https://imgur.com/OziTXxv.png)
*The Facade design pattern*




##### When to use Facade pattern

Developers often use the facade design pattern when a system is very complex or difficult to understand because the system may have many interdependent classes. **This pattern hides the complexities of the larger system and provides a simpler interface to the client.**

---

<a id="install"></a>
### Installing the Development Environment

---

<a id="code"></a>
### Code Exploration

#### Doubtfire-API

##### Database and Object model mapping

The database is found in **app > db > schema.rb**. It shows the current version of the database, which consists of the various create_table statements to create the database structure. Schema.rb tells us the different tables in the database and the values they contain. 

![Imgur](https://imgur.com/pCR4bwz.jpg)
*Schema.rb*

Doubtfire uses the Object model, where all the objects are found in app > models folder.
We can then map the "projects" table in schema.rb, to the project.rb object in the **app > models** folder. Whereas the "projects" table contains the definition of the attributes of the object, the project.rb object contains the functionality. 

![Imgur](https://imgur.com/vZQhJlK.jpg)
*Mapping of Projects Table (left) with Project Object (right)*

Doubtfire utilises the migrations feature of Active Record to incrementally modify the database, and then regenerate the schema definition.

To look into this further, one should look at the various tables in **schema.rb** and their corresponding mappings with their Object classes and class functions in the **app > models** folder.



#### Doubtfire-Web

---



<a id="uml"></a>
### UML Class Diagrams

---

<a id="contrib"></a>
### Contributing

---

<a id="refs"></a>
### Useful References

---
