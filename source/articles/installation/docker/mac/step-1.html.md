---

 

title: Installing Docker on Mac Os
date: 2020-01-19 20:00 AEST
tags: installation, mac, Docker


author: Doubtfire Team

summary: This document contains the necessary steps required to install Docker on MAC OS. 
 

---
## Installation Steps for Docker on mac OS


### System Requirements
 
1. To install Docker manually on Mac the mac hardware should be a 2010 or a newer model. 

2. Mac OS version should be either version 10.13 or newer such as macOS Catalina (10.15), macOS Mojave (10.14), and macOS High Sierra (10.13). 

Docker Desktop is easy to install on the desktop of Mac applications to build, debug, and test Dockerized apps on a Mac. 
 
### Steps for Installation: 
1. [Installing Docker](##-Step-1---Installing-Docker)
2. [Start Docker on mac](##-Step-2--Start-Docker-on-mac)
3. [Run Docker on mac](##-Step-3---Run-Docker-on-mac)

## Step 1 - Installing Docker

The Docker installation package available in the official repository might not be the latest version. So to ensure the lastest version to download we must install Docker from the official Docker repository. 
  
Now go to [Docker Desktop](https://www.docker.com/products/docker-desktop)

```
Select " Download for Mac"
```

Go to your download folder on your mac 

```
Double-click Docker.dmg to start the install process.  
```

Drag the Docker icon to the Application folder. 

## Step 2 - Start Docker on mac

After dragging the Docker icon to the application folder. 

```
Double click on the Docker application on the application folder of mac
```

So that the application starts on the top status bar that indicates the Docker Desktop which can be accessed from a terminal. 

## Step 3 - Run Docker on mac 

After starting the Docker application to make it run we must follow the following commands on the command line terminal 

Open a command-line terminal then run the following commands to:

Check that you have the latest release of Docker version is installed on the system by the following command 

 ```
$ docker-v
```
If the version gets displayed, then Docker has been successfully installed on your system.
Check that Docker is pulling images and running as expected by the following command 
 
```
$ docker run hello-world 
```

Get more information on a command and docker utilization to use the following command. 
 
```
$ docker COMMAND –help 
```

For more information on the Docker for mac os can be referred from [Docker Desktop](https://docs.docker.com/docker-for-mac/install/)


 
 



