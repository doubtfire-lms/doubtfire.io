---

 

title: Manuall Installation of Doubtfire-api on Mac Os
date: 2020-01-19 20:00 AEST
tags: installation, mac


author: Mohammad Samiullah Belal

summary: This document contains the necessary steps required to install Doubtfire-API on MAC OS. These steps include installing Homebrew, Homebrew Cask, rbenv, ruby build, Postgres, native tools, and Doubtfire API dependencies. Finally you need populate doubtfire.  
 

---

 

## Geting Started

 

---

 

Install [Homebrew](http://brew.sh) for easy package management, if you haven't already, as well as [Homebrew Cask](http://caskroom.io):

 
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew tap caskroom/cask

```

installation

Install [rbenv](https://github.com/sstephenson/rbenv) and ruby-build:

 
```
$ brew install ruby ruby-build rbenv
```

Add the following to your `.bashrc`:

```
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```
 
_or_, if you're using [Oh-My-Zsh](http://ohmyz.sh), add to your `.zshrc`:

```
$ echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

Now install Ruby v2.4.3:
 
```
$ rbenv install 2.4.3
```
Install the [Postgres App](http://postgresapp.com):

```
$ brew cask install postgres --appdir=/Applications
```
 
Ensure `pg_config` is on the `PATH`, and then login to Postgres:

```
$ export PATH=/Applications/Postgres.app/Contents/Versions/*/bin:$PATH

$ psql
``` 

Create the Doubfire user the following at the Postgres prompt:

 

CREATE ROLE itig WITH CREATEDB PASSWORD 'd872$dh' LOGIN;

 

Install `imagemagick` at version 6, `libmagic` and `ghostscript` using Homebrew:

```
$ brew install imagemagick@6 libmagic ghostscript ffmpeg

$ brew link --force imagemagick@6
```

You will also need to install the Python `pygments` package:

 
```
$ sudo easy_install Pygments
```
 

Clone project and change your working directory to the api:

 ```

$ git clone https://github.com/doubtfire-lms/doubtfire-api.git

$ cd ./doubtfire-api
```
 

Set up [overcommit](https://github.com/brigade/overcommit) and install hooks:

 ```

$ gem install overcommit -v 0.47.0

$ rbenv rehash

$ overcommit --install

```

Then install Doubtfire API dependencies using [bundler](http://bundler.io):

``` 

$ gem install bundler -v 1.17.3

$ bundle install --without production replica staging

$ rbenv rehash
```
 

Whilst still in the Doubtfire API project root, execute:

 
```
$ bundle exec rake db:create
```
 

You can choose to populate the database with some fake test data using:

 
```
$ bundle exec rake db:populate
```

Install Latex now

```
$ brew cask install mactex
```

Follow the [Generating PDFs](/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs) guide to assist with installing LaTeX to generate PDFs. This step is optional unless you wish to generate PDF submissions.




 

---