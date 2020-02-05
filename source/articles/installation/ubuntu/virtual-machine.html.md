---

title: Ubuntu Pre-packaged Virtual Machine
tags: installation,ubuntu
date: 2020-01-19 20:00 AEST
author: Jacob Taylor

---

If you are new to the Doubtfire project, there is a pre-packaged virtual machine that contains a fully-functional instance of Doubtfire.
This method of installation offers a quick, no fuss way to experiment with Doubtfire; to see what a functional installation should look like.
It allows you to interact with both the back-end API and the web interface, to test user functionality for the various user roles, and to familiarise yourself with the codebase.
However, installation through this method is limited:

- To minimise the size of the virtual machine itself, the virtualised instance of Doubtfire does not contain Latex, meaning that the platform's PDF functionality will not work.
- The virtual hard disk allocated to the machine has also been limited to the size required for a bare-bones Doubtfire installation.
- VirtualBox's overheads may impair the performance of Doubtfire software; it is recommended you run Doubtfire with an allocated hard drive of 20 GB or more, and with 4 GB or more of RAM.

This installation method requires you to install the VirtualBox software onto your host machine.
VirtualBox is an open-source hypervisor developed by Oracle.
It effectively emulates the hardware of a computer, within your existing computer and operating system--allowing you to run a computer within a computer.
Installation instructions are available through the [VirtualBox website](https://www.virtualbox.org/).
Note: it may also be possible to install the packaged virtual machine using another hypervisor by exporting/importing the provided virtual machine.
This method has not been tested.

Once VirtualBox has been installed, download the [Doubtfire Virtual Machine](https://deakin365-my.sharepoint.com/:u:/g/personal/jwtayl_deakin_edu_au/Ea5v4lk7mqZKi4bs9-sykoIBvtC9YY6JrYtneqIrp899fw?e=xJ0aH).
Import the Virtual Machine into VirtualBox using the import utility, as depicted below.

<img alt="Virtual Machine Import" src="/images/articles/installation/ubuntu/1.png" style="width: 700px; display:block; margin: 0 auto;"></img>

Once the Virtual Machine has been imported, starting the machine should load Ubuntu desktop.
Note that ***doubtfire*** is both the username *and* password for this Ubuntu machine.

<img alt="Ubuntu Desktop" src="/images/articles/installation/ubuntu/2.png" style="width: 700px; display:block; margin: 0 auto;"></img>

