---

title: Manual Installation of Doubtfire-web on Mac Os
tags: installation, mac
date: 2020-01-19 20:00 AEST


author: Doubtfire Team

summary: This document provides manual installation steps with commands for Doubtfire.web on Mac OS 

---

## Getting Started
Continue below steps to manually install `doubtfire-web` on Mac OS.
For installing Doubtfire-web dependencies we have to clone project and change working directory to web

```
$ git clone https://github.com/doubtfire-lms/doubtfire-web.git

$ cd ./doubtfire-web
```

Install [Node.js](https://nodejs.org/en/) either by [downloading it](https://nodejs.org/download/) and installing it manually, or via [Homebrew](https://brew.sh/) on OS X:

```
  $ brew install node
```
For swtiching the Ruby version to 2.3.8 use the following command:

```
 $ rbenv local 2.3.8
```


Install overcommit and Ruby [SASS](https://sass-lang.com/):

```
$ gem install overcommit sass
```

If gem fails, you should read the Doubfire API README to install ruby. If you are not using rbenv, e.g., using Docker instead, you may need to prepend sudo to the above commands to have root write access.

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

Lastly, to compile and run a watch server and web server, use npm start:

```
$ npm start
```

This will automatically run the angular 1 grunt watch, and the angular 9 ng serve.

You can then navigate to the Doubtfire web interface at [http://localhost:8000](http://localhost:8000/) on your web browser.

---