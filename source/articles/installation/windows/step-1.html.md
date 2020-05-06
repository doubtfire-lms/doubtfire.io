---

title: Step 1 - Setup WSL and Ubuntu
tags: installation,windows

---

1. **Enable the Windows Subsystem for Linux optional feature of Windows 10.** To do this, launch the “Windows Features” dialog, activate the “Windows Subsystem for Linux” feature, and click “OK”. You may have to restart Windows.
    
    <!-- ![Test](https://i.imgur.com/Uw7ZQK7.png) -->

    ```console
    <font size="1"> 
    user@computer:~$ sudo apt update
    [sudo] password for user:
    Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
    Hit:2 http://archive.ubuntu.com/ubuntu bionic InRelease
    Get:3 http://archive.ubuntu.com/ubuntu bionic-updates InRelease [88.7 kB]
        ...
    Fetched 18.6 MB in 2min 5s (149 kB/s)
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    28 packages can be upgraded. Run 'apt list --upgradable' to see them.

    user@computer:~$ sudo apt dist-upgrade
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    Calculating upgrade... Done
    The following packages will be upgraded:	
        …
    Processing triggers for libc-bin (2.27-3ubuntu1) ...
    Processing triggers for systemd (237-3ubuntu10.39) ...
    Processing triggers for man-db (2.8.3-2ubuntu0.1) ... 

    user@computer:~$ 
    ```

2. **Install the WSL Ubuntu distribution.** This can be downloaded via the Windows Store [here](https://www.microsoft.com/store/productId/9NBLGGH4MSV6).
