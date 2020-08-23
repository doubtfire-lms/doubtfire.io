---

 

title: Installing Doubtfire-api image on Mac Os 
date: 2020-01-19 20:00 AEST
tags: installation, mac, Docker


author: Doubtfire Team

summary: This document contains the necessary steps required to install Doubtfire-API image on MAC OS.
 

---

## Installing Doubtfire-api image on Mac Os

## System Requirements

Make sure that the Docker environment is downloaded on to your local desktop. 

## Steps for creating the Doubtfire-api container 

1. [Creating Folder](###-Step-1:-Creating-Folder)

2. [Clone](###-Step-2:-Clone)

3. [Building Doubtfire-api](###-Step-3:-Building-Doubtfire-api-Container)

4. [Testing Doubtfire-api Container](###-Step-4:-Testing-Doubtfire-api-Container)

5. [Run Doubtfire-api Container](###-Step-5:-Running-Doubtfire-api-Container)

6. [List Image and Container](###-Step-6:-List-Image-and-Container)

### Step 1: Creating Folder

 Create a folder in your desired directory and open the terminal pointing at the folder location 

### Step 2: Clone 

 Clone the Doubtfire-api repository to your created folder using the terminal. 

```
$ git clone https://github.com/doubtfire-lms/doubtfire-api 
```

 All the files will be copied to your new directory with the folder name Doubtfire-api with all of its contents.

 Open a new terminal at the Doubtfire-api location that been created at the newly-created directory. 

### Step 3: Building Doubtfire-api Container

 Run the following command in the terminal to build the Doubtfire-api container 

```
$ docker-compose up --build -d && docker-compose exec api bundle exec rake db:setup db:migrate 
```

### Step 4: Testing Doubtfire-api Container

Check Doubtfire-api is up and running by connecting to the localhost http://localhost:3000/api/docs/  

You should see all the Doubtfire endpoints, which means the API is running. 

In case you need to Stop Doubtfire-api container use the following command

```
$ docker-compose down 
```

### Step 5: Running Doubtfire-api container 

After ensuring that the Doubtfire container is all set to run, use the following command to make it operational.

```
$ docker-compose up -d && docker-compose exec api bundle exec rake db:setup db:migrate 
```
 
### Step 6: List Image and Container  

To list the image and the container use the following commands

```
$ docker image ls 
```
```
$ docker container ls 
```
Finally, you can see the Doubtfire-api image and the container running. 
 


 

