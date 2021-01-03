---
title: Install Doubtfire as a Virtual Machine
summary: Guides the user through installation with a pre-packaged virtual machine
authors: Justfeedme
---

If you are new to the Doubtfire project, there is a pre-packaged virtual machine that contains a fully-functional
instance of Doubtfire. This method of installation offers a quick, no fuss way to experiment with Doubtfire; to see what
a functional installation should look like. It allows you to interact with both the back-end API and the web interface,
to test user functionality for the various user roles, and to familiarize yourself with the codebase. However,
installation through this method is limited:

- To minimize the size of the virtual machine itself, the virtualized instance of Doubtfire does not contain LaTeX,
  meaning that the platform's PDF functionality will not work.

- The virtual hard disk allocated to the machine has also been limited to the size required for a bare-bones Doubtfire
  installation.

- VirtualBox's overheads may impair the performance of Doubtfire software; it is recommended you run Doubtfire with an
  allocated hard drive of 20 GB or more, and with 4 GB or more of RAM.

This installation method requires you to install the VirtualBox software onto your host machine. VirtualBox is an
open-source hypervisor developed by Oracle. It effectively emulates the hardware of a computer, within your existing
computer and operating system--allowing you to run a computer within a computer. Installation instructions are available
through the [VirtualBox website](https://www.virtualbox.org/). Note: it may also be possible to install the packaged
virtual machine using another hypervisor by exporting/importing the provided virtual machine. This method has not been
tested.

Once VirtualBox has been installed, download the
[Doubtfire Virtual Machine](https://deakin365-my.sharepoint.com/:u:/g/personal/jwtayl_deakin_edu_au/Ea5v4lk7mqZKi4bs9-sykoIBvtC9YY6JrYtneqIrp899fw?e=xJ0aH).
Import the Virtual Machine into VirtualBox using the import utility, as depicted below.

![Virtual Machine Import](/guides/installation-virtual-machine/1.png)

Once the Virtual Machine has been imported, starting the machine should load Ubuntu desktop. Note that **_doubtfire_**
is both the username _and_ password for this Ubuntu machine.

![Ubuntu Desktop](/guides/installation-virtual-machine/2.png)
