---

title: Ubuntu Manual Installation
date: 2020-04-21 15:11 UTC
tags: installation,ubuntu

author: Jeevan loyd Fernandes
summary: check to see the installation


---
you can install 
[doubtfire-api](#doubtfire_api),
[doubtfire-web](#doubtfire_web) ,
[doubtfire.io](#doubtfire_io)
by using the steps given below.
 


---
<a id="doubtfire_api"></a>
####<strong>Installation of doubtfire API :</strong>
---
#####Getting Started
If you are a developer for the project, it is usually better to [create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) for the repository and then follow the steps given below.

First, clone the doubtfire-api repository to your local machine:

```
$ git clone <link>
```

#####Steps Involed :

[1. Install rbenv and ruby-build](#Install_rbenv_and_ruby_build)

[2. Install Postgres](#Install_postgres)

[3. Install native tools](#Install_native_tools)

[4. Install Doubtfire API dependencies](#Install_Doubtfire_API_dependencies)

[5. Create and populate Doubtfire](#Create_and_populate_Doubtfire)

[6. Install LaTeX to generate PDFs](#Install_LaTeX_to_generate_PDFs)

---
<a id="Install_rbenv_and_ruby_build"></a>
#####1.Install rbenv and ruby-build

Install [rbenv](https://github.com/rbenv/rbenv) and ruby-build:

```
$ cd ~
$ git clone git://github.com/sstephenson/rbenv.git .rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ exec $SHELL
$
$ git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
$ exec $SHELL
```
<strong>Note:</strong> if you're using [Oh-My-Zsh](https://ohmyz.sh/), add to your `.zshrc`:

```
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(rbenv init -)"' >> ~/.zshrc
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.zshrc
```

Now install Ruby v2.3.1:

```
$ sudo apt-get install -y libreadline-dev
$ rbenv install 2.3.1
```
---

<a id="Install_postgres"></a>
#####2.Install Postgres

Install [Postgres](https://www.postgresql.org/download/linux/):

```
$  sudo apt-get install postgresql \
                        postgresql-contrib \
                        libpq-dev

```
Ensure `pg_config` is on the `PATH`, and then login to Postgres. You will need to locate where `apt-get` has installed your Postgres binary and add this to your `PATH`. You can use `whereis psql` for that, but ensure you add the directory and not the executable to the path

```
$ whereis pqsl
/usr/bin/psql
$ export PATH=/usr/bin:$PATH
$ sudo -u postgres createuser --superuser $USER
$ sudo -u postgres createdb $USER
$ psql
```
Create the Doubfire user the following at the Postgres prompt:

```

CREATE ROLE itig WITH CREATEDB PASSWORD 'd872$dh' LOGIN;
```
---
<a id="Install_native_tools"></a>
#####3.Install native tools

Install `imagemagick`, `libmagic` and `ghostscript`. You will also need to install the Python `pygments` package:

```
$ sudo apt-get install ghostscript \
                       imagemagick \
                       libmagickwand-dev \
                       libmagic-dev \
                       python-pygments
```

---
<a id="Install_Doubtfire_API_dependencies"></a>
#####4.Install Doubtfire API dependencies

Clone project and change your working directory to the api:

```
$ git clone https://github.com/doubtfire-lms/doubtfire-api.git
$ cd ./doubtfire-api
```

Set up [overcommit](https://github.com/sds/overcommit) and install hooks:

```
$ gem install overcommit
$ rbenv rehash
$ overcommit --install
```
Then install Doubtfire API dependencies using [bundler](https://bundler.io/):

```
$ gem install bundler
$ rbenv rehash
$ bundle install --without production replica staging
```

---
<a id="Create_and_populate_Doubtfire"></a>
#####5.Create and populate Doubtfire

Whilst still in the Doubtfire API project root, execute:

```
$ bundle exec rake db:create
```

You can choose to populate the database with some fake test data using:

```
$ bundle exec rake db:populate
```

---
<a id="Install_LaTeX_to_generate_PDFs"></a>
#####6.Install LaTeX to generate PDFs

Follow the [Generating PDFs](https://github.com/doubtfire-lms/doubtfire-api/wiki/Generating-PDFs) guide to assist with installing LaTeX to generate PDFs. This step is optional unless you wish to generate PDF submissions.

---
<a id="doubtfire_web"></a>
####<strong>Installation of doubtfire Web</strong>
---
#####Getting Started
Before you get started, make sure you have the [doubtfire-api](#doubtfire_api) up and running. You will need to do this before continuing.


Usually if you are the developer, its always better to [create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and then follow the below steps.
Firstly we need to clone the web repository to your local machine by selecting "clone or download" and copying the link. You can do this by using command below and change to the root directory:

```
$ git clone <link>
$ cd ./doubtfire-web
```
Install [Node.js](https://nodejs.org/en/) either by [downloading it](https://nodejs.org/download/) and installing it manually by using `apt-get`

```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install nodejs
```
Install [overcommit](https://github.com/sds/overcommit) and Ruby [SASS](https://sass-lang.com/):

```
$ gem install overcommit sass
```
If ```gem``` fails, you should read the [Doubfire API README](https://github.com/doubtfire-lms/doubtfire-api/blob/development/README.rdoc) doc to install ruby. If you are not using rbenv, e.g., using Docker instead, you may need to prepend sudo to the above commands to have root write access.

If using ```rbenv```, rehash to ensure each of the gems are on your ```PATH```:

```
$ rbenv rehash
```
Install and sign the git hooks using ```overcommit```:

```
$ overcommit --install
$ overcommit --sign
```

Install all node dependencies using ```npm```, as well as [grunt-cli](https://gruntjs.com/using-the-cli) globally:

```
$ npm install
```

<strong>Note:</strong>You may need to install `grunt-cli` globally in Linux using sudo.

Lastly, to compile and run a watch server and web server, use `npm start`:

```
$ npm start
```

This will automatically run the angular 1 `grunt watch`, and the angular 7 `ng serve`.

You can then navigate to the Doubtfire web interface at [http://localhost:8000](http://localhost:8000/).

---
Go to 
[doubtfire-api](#doubtfire_api)

---
<a id="doubtfire_io"></a>
####<strong>Installation of doubtfire IO </strong>

This middleman project contains pages that document the Doubtfire project - a task oriented system designed to help support frequent formative feedback.

Doubtfire is an open-source, innovative, learning management system designed to put the student first.

Inside the webiste, you can find :

    1.Installation guides for Doubtfire.
    2.User guides.
    3.Extend Doubtfire and Contributions.

Link for the [Website](https://doubtfire-lms.github.io/doubtfire.io/)

#####Getting started

tart by ensuring you have ruby on your system. You <strong>must</strong> install [rbenv](https://github.com/rbenv/rbenv) to keep your ruby versions under control. Refer to rbenv's [installation guide](https://github.com/rbenv/rbenv#installation) on how to do so.

Ensure you have installed ruby version 2.4.3:

```
$ rbenv install 2.4.3
$ rbenv rehash
```

Then, install [bundler](https://bundler.io/) to sort out your ruby dependencies:

```
$ gem install bundler
$ bundle install
```

---
Go to 
[doubtfire-api](#doubtfire_api),
[doubtfire-web](#doubtfire_web)