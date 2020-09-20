---

 

title: Installing Docker on Ubuntu  
date: 2020-01-19 20:00 AEST
tags: installation, ubuntu, Docker


author: Doubtfire Team

summary: This document contains the necessary steps required to install Docker on Ubuntu. 

---
## Installation Steps for Docker

### Prerequisites

1. Ubuntu 18.04 server set up by following the Ubuntu 18.04 initial server setup guide, including a sudo non-root user and a firewall.
2. An account on Docker Hub if you wish to create your own images and push them to Docker Hub, as shown in Steps 7 and 8.

## Steps for Installation:
1. [Installing Docker](#step-1---installing-docker)
2. [Executing the Docker Command Without Sudo](#Step-2---Executing-the-Docker-Command-Without-Sudo)
3. [To view the options available to a specific command, type](#Step-3---To-view-the-options-available-to-a-specific-command-type)
4. [Access and Download images from Docker Hub](#Step-4---Access-and-Download-images-from-Docker-Hub)

***

## Step 1 - Installing Docker

The Docker installation package available in the official Ubuntu repository may not be the latest version. To ensure we get the latest version, we’ll install Docker from the official Docker repository. To do that, we’ll add a new package source, add the GPG key from Docker to ensure the downloads are valid, and then install the package. First, update your existing list of packages:

       sudo apt update

Next, install a few prerequisite packages which let apt use packages over HTTPS:

       sudo apt install apt-transport-https ca-certificates curl software-properties-common

Then add the GPG key for the official Docker repository to your system:

       curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Add the Docker repository to APT sources:

       sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

Next, update the package database with the Docker packages from the newly added repo:

       sudo apt update

Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:

      apt-cache policy docker-ce

You’ll see output like this, although the version number for Docker may be different:

      Output of apt-cache policy docker-ce
      docker-ce:
        Installed: (none)
        Candidate: 18.03.1~ce~3-0~ubuntu
        Version table:
           18.03.1~ce~3-0~ubuntu 500
              500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages

Notice that `docker-ce` is not installed, but the candidate for installation is from the Docker repository for Ubuntu 18.04 (bionic). Finally, install Docker:

	sudo apt install docker-ce

Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:

	sudo systemctl status docker

The output should be similar to the following, showing that the service is active and running:

        Output
         docker.service - Docker Application Container Engine
           Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
           Active: active (running) since Thu 2018-07-05 15:08:39 UTC; 2min 55s ago
             Docs: https://docs.docker.com
         Main PID: 10096 (dockerd)
            Tasks: 16
           CGroup: /system.slice/docker.service
                   ├─10096 /usr/bin/dockerd -H fd://
                   └─10113 docker-containerd --config /var/run/docker/containerd/containerd.toml

Installing Docker now gives you not just the Docker service (daemon) but also the docker command-line utility, or the Docker client. We’ll explore how to use the docker command later in this tutorial


## Step 2 - Executing the Docker Command Without Sudo

By default, the docker command can only be run the root user or by a user in the docker group, which is automatically created during Docker’s installation process. If you attempt to run the docker command without prefixing it with sudo or without being in the docker group, you’ll get an output like this:

        Output
        docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
        See 'docker run --help'.

If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:

        sudo usermod -aG docker ${USER}

To apply the new group membership, log out of the server and back in, or type the following:

        su - ${USER}

You will be prompted to enter your user’s password to continue. Confirm that your user is now added to the docker group by typing:

        id -nG

The output will be

        Output
        sammy sudo docker


## Step 3 - To view the options available to a specific command, type

        docker-subcommand --help


## Step 4 - Access and Download images from Docker Hub

        docker run hello-world

Output will be:

        Output
        Unable to find image 'hello-world:latest' locally
        latest: Pulling from library/hello-world
        9bb5a5d4561a: Pull complete
        Digest: sha256:3e1764d0f546ceac4565547df2ac4907fe46f007ea229fd7ef2718514bcec35d
        Status: Downloaded newer image for hello-world:latest
        Hello from Docker!

The above output shows that the docker is up and running.

For more information refer [How to install Docker on Ubuntu v18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)

