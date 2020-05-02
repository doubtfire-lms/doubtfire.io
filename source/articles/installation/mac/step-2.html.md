---

title: Manual Installation of Doubtfire-web on Mac Os
tags: installation, mac
date: 2020-01-19 20:00 AEST


author: Sai Chaitanya Ravuri

summary: This document provides manual installation steps with commands for Doubtfire.web on Mac OS 

---

## Getting Started
Continue following below steps to manually install `doubtfire-web` on Mac OS.


Install [Node.js](https://nodejs.org/en/) either by [downloading it](https://nodejs.org/download/) and installing it manually, or via [Homebrew](https://brew.sh/) on OS X:

```
  $ brew install node
```
or by using apt-get :

```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install Ruby [SASS](https://sass-lang.com/):

```
$ gem install sass
```

If gem fails, you should read the Doubfire API [README](https://github.com/doubtfire-lms/doubtfire-web) to install ruby. If you are not using rbenv, e.g., using Docker instead, you may need to prepend sudo to the above commands to have root write access.

If using rbenv, rehash to ensure each of the gems are on your PATH:

```
$ rbenv rehash
```

Install and sign the git hooks using overcommit:

```
$ overcommit --install
$ overcommit --sign
```

Install all node dependencies using npm, as well as [grunt-cli](https://gruntjs.com/using-the-cli) globally:

```
$ npm install
```

Note: Here you may need to install grunt-cli globally using sudo when SASS file is compiled.

Lastly, to compile and run a watch server and web server, use npm start:

```
$ npm start
```

This will automatically run the angular 1 grunt watch, and the angular 7 ng serve.

You can then navigate to the Doubtfire web interface at [http://localhost:8000](http://localhost:8000/) on your web browser.

---
