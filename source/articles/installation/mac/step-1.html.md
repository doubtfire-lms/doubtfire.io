---

 

title: Manuall Installation of Doubtfire-api on Mac Os
date: 2020-01-19 20:00 AEST
tags: installation, mac


author: Doubtfire Team

summary: This document contains the necessary steps required to install Doubtfire-API on MAC OS. These steps include installing Homebrew, Homebrew Cask, rbenv, ruby build, Postgres, native tools, and Doubtfire API dependencies. Finally you need populate doubtfire.  
 

---

#### Steps Involved:
[1. Install Homebrew and Homebrew Cask](#Install_Homebrew_and_Homebrew_Cask)

[2. Install rbenv and ruby-build](#Install_rbenv_and_ruby-build)

[3. Install Postgres](#Install_Postgres)

[4. Install native tools](#Install_native_tools)

[5. Install Doubtfire API dependencies](#Install_Doubtfire_API_dependencies)

[6. Create and populate Doubtfire](#Create_and_populate_Doubtfires)

[7. Install LaTex to generate PDFs](#Install_LaTex_to_generate_PDFs)

[8. Get it up and running!](#Get_it_up_and_running!)

 

---
<a id="Install_Homebrew_and_Homebrew_Cask"></a>
## 1. Install Homebrew and Homebrew Cask


Install [Homebrew](http://brew.sh) for easy package management, if you haven't already, as well as [Homebrew Cask](http://caskroom.io):

 
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew tap caskroom/cask

```
---


<a id="Install_rbenv_and_ruby-build"></a>
## 2. Install rbenv and ruby-build

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

Now install Ruby v2.3.8:
 
```
$ rbenv install 2.3.8
```
---

<a id="Install_Postgres"></a>
## 3. Install Postgres
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

 
```
CREATE ROLE itig WITH CREATEDB PASSWORD 'd872$dh' LOGIN;
```

---


<a id="Install_native_tools"></a>
## 4. Install native tools
Install `imagemagick` at version 6, `libmagic` and `ghostscript` using Homebrew:

```
$ brew install imagemagick@6 libmagic ghostscript ffmpeg

$ brew link --force imagemagick@6
```

You will also need to install the Python `pygments` package:

 
```
$ sudo easy_install Pygments
```
If you are a developer for the project, it is usually better to [create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) for the repository and then follow the steps given below

---


<a id="Install_Doubtfire_API_dependencies"></a>
## 5. Install Doubtfire API dependencies
Clone project and change your working directory to the api:

 ```

$ git clone https://github.com/doubtfire-lms/doubtfire-api.git

$ cd ./doubtfire-api
```
 

Set up [overcommit](https://github.com/brigade/overcommit) and install hooks:

 ```

$ sudo gem install overcommit -v 0.47.0

$ rbenv rehash

$ overcommit --install

```

Then install Doubtfire API dependencies using [bundler](http://bundler.io):

``` 

$ sudo gem install bundler -v 1.17.3

$ bundle install --without production replica staging

$ rbenv rehash
```
---

<a id="Create_and_populate_Doubtfires"></a>
## 6. Create and populate Doubtfire
Whilst still in the Doubtfire API project root, execute:

 
```
$ bundle exec rake db:create
```
 

You can choose to populate the database with some fake test data using:

 
```
$ bundle exec rake db:populate
```
---

<a id="Install_LaTex_to_generate_PDFs"></a>
## 7. Install LaTex to generate PDFs
Install Latex now

```
$ brew cask install mactex
```

Follow the [Generating PDFs](/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs) guide to assist with installing LaTeX to generate PDFs. This step is optional unless you wish to generate PDF submissions.

---
<a id="Get_it_up_and_running!"></a>
## 8. Get it up and running!

Once you've installed using either the install script or the manual install steps, use the following command to run the api

```
bundle exec rails s
```

---