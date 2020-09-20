---

 

title: Installing Doubtfire-web image on Ubuntu using Docker 
date: 2020-01-19 20:00 AEST
tags: installation, Ubuntu, Docker


author: Doubtfire Team

summary: This document contains the necessary steps required to install Doubtfire-web image on Ubuntu using Docker.
 

---

## Installing Doubtfire-web image on Ubuntu using Docker

## System Requirements 

Make sure that Docker is downloaded on to your local desktop. 

Have the Doubtfire-API services running at the background. 

## Steps for creating Doubtfire-web container. 

1. [Creating Folder](###-Step-1:-Creating-Folder)
2. [Clone](###-Step-2:-Clone)
3. [Creating Docker Image](###-Step-3:-Creating-Docker-Image)
4. [Run the Image](###-Step-4:-Run-the-Image)
5. [Connecting to Doutdfire-web](###-Step-5:-Connecting-Doubtfire-web)
6. [List the Image in Container](###-Step-6:-List-the-image-in-container)


### Step 1: Creating folder 

 Create a folder in your desired directory and open the terminal pointing at the folder location 

### Step 2: Clone 

 Clone the Doubtfire-web repository to your created folder using the terminal. 

```
 $ git clone https://github.com/doubtfire-lms/doubtfire-web 
```

All the files will be copied to your new directory with the folder name Doubtfire-web with all of its contents. 

Now open a new terminal at the Doubtfire-web location that been created at the newly created directory. 

### Step 3: Creating Docker Image 

To create the docker image for Doubtfire-web follow the below command: 

Note that the image name must be followed by the dot which means that the path of the Docker build context and Dockerfile is the current folder. 

```
$ sudo docker build -t <imagename> . 
```

Eg: $ sudo docker build -t dfireweb . 

This process will take 1-2 minutes to complete and in the end, you will get a successful message with an image tag name. 

### Step 4: Run the Image 

Run the below command to run the image that had been created. 

```
$  sudo docker run -d -it -p 4200:4200/tcp --name <repository name>:<image tag> 
```

To stop the Doubtfire-web container running 

```
$  sudo docker-compose down 
```

### Step 5: Connecting to Doubtfire-web  

Doubtfire-web will get connected to localhost on browser on https://localhost:4200/ with api services running at the background, the Doubtfire-web now will be connected to backend. 


### Step 6: List the Image in Container

To list the Image and Container  

```
$ sudo docker image ls 
```
```
$ sudo docker container ls
```
Finally, you can see the Doubtfire-web image and the container running.