---

 

title: Installing Doubtfire-api image on Ubuntu
date: 2020-01-19 20:00 AEST
tags: installation, ubuntu, Docker 


author: Doubtfire Team

summary: This document contains the necessary steps required to install Doubtfire-API image on Ubuntu. 
 

---
## Installing Doubtfire-api image on Ubuntu

### Prerequisites

Docker downloaded on to your local desktop.
1. 
## Steps for Downloading Doubtfire-API:
1. [Create a folder](#step-1---create-a-folder)
2. [Clone Repo](#Step-2---clone-repo)
3. [Open terminal and run command](#Step-3---open-terminal-and-run-command)
4. [Access Doubtfire-API running on localhost](#Step-4---access-doubtfire-api-running-on-localhost)
5. [Stopping Doubtfire-API Container](#Step-5---stopping-doubtfire-api-container)
6. [Running container](#Step-6---running-container)
7. [List images and container in your workplace](#Step-7---list-images-and-container-in-your-workplace)

***

## Step 1 - Create a folder
Create a folder in your desired directory in your local machine and open the terminal pointing at the desired folder location

## Step 2 - Clone Repo
Clone the Doubtfire-API repository to your created folder using the terminal.

      $ git clone https://github.com/doubtfire-lms/doubtfire-API

All the files will be copied to your new directory with the folder name Doubtfire-API with all of its contents.

## Step 3 - Open terminal and run command
Open a new terminal at the Doubtfire-API location that been created at the newly-created directory. Run the following command in the terminal to build the Doubtfire-API container

      $ sudo docker-compose up --build -d && docker-compose exec api bundle exec rake db:setup db:migrate

## Step 4 - Access Doubtfire-API running on localhost
Doubtfire-API should be up and now running in the localhost 

      http://localhost:3000/api/docs/ 

You should see all the Doubtfire endpoints, which means the API is running.

## Step 5 - Stopping Doubtfire-API Container
Doubtfire-API container can stop running using below command:

      sudo docker-compose down

## Step 6 - Running container
Run Doubtfire-API container

      $ sudo docker-compose up -d && docker-compose exec api bundle exec rake db:setup db:migrate

## Step 7 - List images and container in your workplace
You can list image and container present in your workplace with the help of following commands:

      $ sudo docker image ls
      $ sudo docker container ls


