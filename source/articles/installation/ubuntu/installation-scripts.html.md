---

title: Ubuntu Automated Installation Scripts
tags: installation,ubuntu
date: 2020-01-19 20:00 AEST
author: Jacob Taylor

---

The automated installation scripts are the simplest way to install Doubtfire using Ubuntu as your fully-fledged development environment.

To begin, you will first need to clone the `doubtfire-web`, `doubtfire-api`, and `doubtfire.io` repositories.
Before doing so, you should fork each of these respositories to your own Github account, to allow your own development and enable the creation of pull requests at a later stage.
If you are using Ubuntu within a virtualised development environment, you should also consider taking a snapshot of your machine before you begin this process.

Once the repositories have been cloned to your local machine, in order, execute the `setup.sh` scripts located in each of the following directories:

- `doubtfire-api`, 
- `doubtfire-web`, and
- `doubtfire.io`.

It is not necessary to execute the setup scripts with sudo privileges, although you will be prompted for your password throughout stages of the setup.
You may be prompted for information or to continue the installation at various stages throughout the installation; simply respond as required.


