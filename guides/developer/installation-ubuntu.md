---
title: Install Doubtfire on Ubuntu
summary: Guides the user through an installation on Ubuntu
authors: Justfeedme, jeevanFernandes
---

# Automated Installation Scripts

The automated installation scripts are the simplest way to install Doubtfire using Ubuntu as your fully-fledged
development environment.

To begin, you will first need to clone the `doubtfire-web`, `doubtfire-api`, and `doubtfire.io` repositories. Before
doing so, you should fork each of these repositories to your own Github account, to allow your own development and
enable the creation of pull requests at a later stage. If you are using Ubuntu within a virtualized development
environment, you should also consider taking a snapshot of your machine before you begin this process.

Once the repositories have been cloned to your local machine, in order, execute the `setup.sh` scripts located in each
of the following directories:

- `doubtfire-api`,
- `doubtfire-web`, and
- `doubtfire.io`.

It is not necessary to execute the setup scripts with sudo privileges, although you will be prompted for your password
throughout stages of the setup. You may be prompted for information or to continue the installation at various stages
throughout the installation; simply respond as required.

---

# Manual Installation

## Installing doubtfire-api

### Getting Started

If you are a developer for the project, it is usually better to
[create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) for the repository and then
follow the steps given below.

First, clone the doubtfire-api repository to your local machine:

```shell
$ git clone <link>
```

### Install rbenv and ruby-build

Install [rbenv](https://github.com/rbenv/rbenv) and ruby-build:

```shell
$ cd ~
$ git clone git://github.com/sstephenson/rbenv.git .rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ exec $SHELL

$ git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
$ exec $SHELL
```

**Note:** if you're using [Oh-My-Zsh](https://ohmyz.sh/), add to your `.zshrc`:

```shell
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(rbenv init -)"' >> ~/.zshrc
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.zshrc
```

Now install Ruby v2.3.8:

```shell
$ sudo apt-get install -y libreadline-dev
$ rbenv install 2.3.8
```

### Install Postgres

Install [Postgres](https://www.postgresql.org/download/linux/):

```shell
$ sudo apt-get install -y postgresql postgresql-contrib libpq-dev

$ sudo service postgresql restart
```

Ensure `pg_config` is on the `PATH`, and then login to Postgres. You will need to locate where `apt-get` has installed
your Postgres binary and add this to your `PATH`. You can use `whereis psql` for that, but ensure you add the directory
and not the executable to the path

```shell
$ whereis pqsl
/usr/bin/psql
$ export PATH=/usr/bin:$PATH
$ sudo -u postgres createuser --superuser $USER
$ sudo -u postgres createdb $USER
$ psql
```

Create the Doubfire user the following at the Postgres prompt:

```sql
CREATE ROLE itig WITH CREATEDB PASSWORD 'd872$dh' LOGIN;
```

### Install native tools

Install `imagemagick`, `libmagic` and `ghostscript`. You will also need to install the Python `pygments` package:

```shell
sudo apt-get install -y ghostscript imagemagick libmagickwand-dev libmagic-dev python-pygments ffmpeg curl libreadline-dev gcc make libssl1.0-dev zlib1g-dev
```

### Install Doubtfire API dependencies

Clone project and change your working directory to the api:

```shell
$ git clone https://github.com/doubtfire-lms/doubtfire-api.git
$ cd ./doubtfire-api
```

Set up [overcommit](https://github.com/sds/overcommit) and install hooks:

```shell
$ gem install overcommit -v 0.47.0
$ rbenv rehash
$ overcommit --install
```

Then install Doubtfire API dependencies using [bundler](https://bundler.io/):

```shell
$ gem install bundler -v 1.17.3
$ bundler install --without production replica staging
$ rbenv rehash
$ source ~/.bashrc
```

### Create and populate Doubtfire

Whilst still in the Doubtfire API project root, execute:

```shell
$ bundle exec rake db:create
```

You can choose to populate the database with some fake test data using:

```shell
$ bundle exec rake db:populate
```

### Install LaTeX to generate PDFs

```shell
sudo apt-get install texlive-full
```

Follow the [Generating PDFs](https://github.com/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs) guide to assist with
installing LaTeX to generate PDFs. This step is optional unless you wish to generate PDF submissions.

## Installation of doubtfire-web

### Getting Started

Before you get started, make sure you have the `doubtfire-api` up and running. You will need to do this before
continuing.

Usually if you are the developer, its always better to
[create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and then follow the below
steps. Firstly we need to clone the web repository to your local machine by selecting "clone or download" and copying
the link. You can do this by using command below and change to the root directory:

```shell
$ git clone <link>
$ cd ./doubtfire-web
```

Install [Node.js](https://nodejs.org/en/) either by [downloading it](https://nodejs.org/download/) and installing it
manually by using `apt-get`

```shell
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install [overcommit](https://github.com/sds/overcommit) and Ruby [SASS](https://sass-lang.com/):

```shell
$ gem install overcommit sass
```

If `gem` fails, you should read the
[Doubtfire API README](https://github.com/doubtfire-lms/doubtfire-api/blob/development/README.rdoc) doc to install ruby.
If you are not using rbenv, e.g., using Docker instead, you may need to prefix `sudo` to the above commands to have root
write access.

If using `rbenv`, rehash to ensure each of the gems are on your `PATH`:

```shell
$ rbenv rehash
```

Install and sign the git hooks using `overcommit`:

```shell
$ overcommit --install
$ overcommit --sign
```

Install all node dependencies using `npm`, as well as [grunt-cli](https://gruntjs.com/using-the-cli) globally:

```shell
$ npm install
```

**Note:** You may need to install `grunt-cli` globally in Linux using sudo.

Lastly, to compile and run a watch server and web server, use `npm start`:

```shell
$ npm start
```

This will automatically run the angular 1 `grunt watch`, and the angular 9 `ng serve`.

You can then navigate to the Doubtfire web interface at [http://localhost:8000](http://localhost:8000/).

## Installation of doubtfire.io

This middleman project contains pages that document the Doubtfire project - a task oriented system designed to help
support frequent formative feedback.

Doubtfire is an open-source, innovative, learning management system designed to put the student first.

Inside the website, you can find :

1. Installation guides for Doubtfire.
2. User guides.
3. Extend Doubtfire and Contributions.

Link to the [Website](https://doubtfire-lms.github.io/doubtfire.io/)

### Getting started

Start by ensuring you have ruby on your system. You **must** install [rbenv](https://github.com/rbenv/rbenv) to keep
your ruby versions under control. Refer to rbenv's [installation guide](https://github.com/rbenv/rbenv#installation) on
how to do so.

Ensure you have installed ruby version 2.4.3:

```shell
$ rbenv install 2.4.3
$ rbenv rehash
```

Then, install [bundler](https://bundler.io/) to sort out your ruby dependencies:

```shell
$ gem install bundler
$ bundle install
```

Once successfully installed, you can start the server using

```shell
bundle exec middleman serve
```

Then, navigate to [http://localhost:4567](http://localhost:4567/) using Firefox
