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

MacOS comes prepackaged with both Ruby and RubyGems, however, some of the Middleman's dependencies need to be compiled during installation and on MacOS that requires Xcode Command Line Tools. Xcode can be installed from the terminal:

```
$ xcode-select --install
```
For switching the Ruby version to 2.4.3 use following command:

```
 $ rbenv local 2.4.3
```

Once you have Ruby and RubyGems up and running, execute the following from the command line to install middleman: 

```
$ gem install middleman
```
To start the middleman server use command 'bundle exec middleman serve' 

You can then navigate to the Doubtfire io interface at [http://10.0.2.15:4567](http://10.0.2.15:4567/) on your web browser.


---
