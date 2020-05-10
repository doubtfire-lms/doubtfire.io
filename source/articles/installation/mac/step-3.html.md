---

title: Manual Installation of Doubtfire.io on Mac Os
tags: installation, mac
date: 2020-01-19 20:00 AEST


author: Doubtfire Team

summary: This document provides manual installation steps with commands for Doubtfire.io on Mac OS 



---

## Getting Started
For Installing the Doubtfire.io dependencies clone project and change the working directory to io
by follwings steps 

```
$ git clone https://github.com/doubtfire-lms/doubtfire.io.git

$ cd ./doubtfire.io
```
Start by ensuring you have ruby on your system but Mac OS users will have a pre-installed ruby on the system. You must install [rbenv](https://github.com/rbenv/rbenv) to keep your ruby versions under control. Refer to rbenv's [installation guide](https://github.com/rbenv/rbenv#installation) on how to do so.


Ensure you have installed ruby version 2.4.3 if not use the command:

```
$ rbenv install 2.4.3
$ rbenv rehash
```
The command 'rbenv rehash' is used to install shims for all Ruby executables known to rbenv 

Then, install [bundler](https://bundler.io/) to sort out your ruby dependencies:

```
$ gem install bundler
$ bundle install
```
To install middleman on the system use the command 

```
$ sudo gem install middleman
```
To start the middleman server use command 'bundle exec middleman serve' 

You can then navigate to the Doubtfire io interface at [http://10.0.2.15:4567](http://10.0.2.15:4567/) on your web browser.


---
