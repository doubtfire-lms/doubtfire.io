---
title: Installing Doubtfire on macOS
summary: Guides the user through an installation on macOS
authors: macite, jakerenzella
---

To get Doubtfire installed on macOS, follow the steps below:

Once you have all of these steps complete you should be setup and ready to using Doubtfire.

---

# Step 1: Installing doubtfire-api

## 1. Install Homebrew and Homebrew Cask

Install [Homebrew](https://brew.sh/) for easy package management, if you haven't already, as well as
[Homebrew Cask](http://caskroom.io):

```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew tap caskroom/cask
```

---

## 2. Install rbenv and ruby-build

Install [rbenv](https://github.com/rbenv/rbenv) and ruby-build:

```shell
$ brew install ruby ruby-build rbenv
```

Add the following to your `.bashrc`:

```shell
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

_or_, if you're using [Oh-My-Zsh](https://ohmyz.sh/), add to your `.zshrc`:

```shell
$ echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

Now install Ruby v2.3.8:

```shell
$ rbenv install 2.3.8
```

Clone project and change your working directory to the api:

```shell
$ git clone https://github.com/doubtfire-lms/doubtfire-api.git

$ cd ./doubtfire-api
```

For switching the Ruby version to 2.3.8 use the following command:

```shell
$ rbenv local 2.3.8
```

---

## 3. Install Postgres

Install the [Postgres App](https://postgresapp.com/):

```shell
$ brew cask install postgres --appdir=/Applications
```

Ensure `pg_config` is on the `PATH`, and then login to Postgres:

```shell
$ export PATH=/Applications/Postgres.app/Contents/Versions/*/bin:$PATH

$ psql
```

Create the Doubfire user the following at the Postgres prompt:

```sql
CREATE ROLE itig WITH CREATEDB PASSWORD 'd872$dh' LOGIN;
```

---

## 4. Install native tools

Install `imagemagick` at version 6, `libmagic` and `ghostscript` using Homebrew:

```shell
$ brew install imagemagick@6 libmagic ghostscript ffmpeg

$ brew link --force imagemagick@6
```

You will also need to install the Python `pygments` package:

```shell
$ sudo easy_install Pygments
```

If you are a developer for the project, it is usually better to
[create a fork](https://help.github.com/github/getting-started-with-github/fork-a-repo) for the repository and then
follow the steps given below.

---

## 5. Install Doubtfire API dependencies

Set up [overcommit](https://github.com/sds/overcommit) and install hooks:

```shell
$ gem install overcommit -v 0.47.0

$ rbenv rehash

$ overcommit --install
```

Then install Doubtfire API dependencies using [bundler](https://bundler.io/):

```shell
$ gem install bundler -v 1.17.3

$ bundle install --without production replica staging

$ rbenv rehash
```

---

## 6. Create and populate Doubtfire

Whilst still in the Doubtfire API project root, execute:

```shell
$ bundle exec rake db:create
```

You can choose to populate the database with some fake test data using:

```shell
$ bundle exec rake db:populate
```

---

## 7. Install LaTex to generate PDFs

Install LaTeX now

```shell
$ brew cask install mactex
```

Follow the
[Generating PDFs](<[/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs](https://github.com/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs)>)
guide to assist with installing LaTeX to generate PDFs. This step is optional unless you wish to generate PDF
submissions.

---

## 8. Get it up and running!

Once you've installed using either the install script or the manual install steps, use the following command to run the
api

```shell
$ bundle exec rails s
```

---

# Step 2: Installing doubtfire-web

Continue below steps to manually install `doubtfire-web` on Mac OS. For installing Doubtfire-web dependencies we have to
clone project and change working directory to web

```shell
$ git clone https://github.com/doubtfire-lms/doubtfire-web.git

$ cd ./doubtfire-web
```

Install [Node.js](https://nodejs.org/) either by [downloading it](https://nodejs.org/download/) and installing it
manually, or via [Homebrew](https://brew.sh/) on OS X:

```shell
$ brew install node
```

For switching the Ruby version to 2.3.8 use the following command:

```shell
$ rbenv local 2.3.8
```

Install overcommit and Ruby [SASS](https://sass-lang.com/):

```shell
$ gem install overcommit sass
```

If gem fails, you should read the Doubfire API README to install ruby. If you are not using rbenv, e.g., using Docker
instead, you may need to prepend sudo to the above commands to have root write access.

If using rbenv, rehash to ensure each of the gems are on your PATH:

```shell
$ rbenv rehash
```

Install and sign the git hooks using overcommit:

```shell
$ overcommit --install
$ overcommit --sign
```

Install all node dependencies using npm, as well as [grunt-cli](https://gruntjs.com/using-the-cli) globally:

```shell
$ npm install
```

Lastly, to compile and run a watch server and web server, use npm start:

```shell
$ npm start
```

This will automatically run the angular 1 grunt watch, and the angular 9 ng serve.

You can then navigate to the Doubtfire web interface at [http://localhost:8000](http://localhost:8000/) on your web
browser.

---

# Step 3: Installing Doubtfire.io

For Installing the Doubtfire.io dependencies clone project and change the working directory to io by follwings steps

```shell
$ git clone https://github.com/doubtfire-lms/doubtfire.io.git

$ cd ./doubtfire.io
```

Ensure you have installed ruby version 2.4.3:

```shell
$ rbenv install 2.4.3
$ rbenv rehash
```

MacOS comes prepackaged with both Ruby and RubyGems, however, some of the Middleman's dependencies need to be compiled
during installation and on MacOS that requires Xcode Command Line Tools. Xcode can be installed from the terminal:

```shell
$ xcode-select --install
```

For switching the Ruby version to 2.4.3 use following command:

```shell
$ rbenv local 2.4.3
```

Once you have Ruby and RubyGems up and running, execute the following from the command line to install middleman:

```shell
$ gem install middleman
```

To start the middleman server use command 'bundle exec middleman serve'

You can then navigate to the Doubtfire io interface at [http://10.0.2.15:4567](http://10.0.2.15:4567/) on your web
browser.

---
