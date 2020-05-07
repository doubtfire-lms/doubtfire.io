---

title: Step 1 - Setup WSL and Ubuntu
tags: installation,windows
date: 2020-05-06 15:00 AEST
author: Conor Blencowe
author_url: https://github.com/C-Blenco

---

1. **If you haven't already, enable the Windows Subsystem for Linux optional feature of Windows 10.** To do this, launch the “Windows Features” dialog, activate the “Windows Subsystem for Linux” feature, and click “OK”. You may have to restart Windows.
    
    <img alt="Activate WSL" src="/images/articles/installation/windows/activate_wsl.png" style="width: 400px; display:block; margin: 0 auto;"></img>

2. **Install the WSL Ubuntu distribution if it is not yet installed.** This can be downloaded via the Windows Store [here](https://www.microsoft.com/store/productId/9NBLGGH4MSV6).

3. **Launch the Ubuntu terminal**, via either the “Ubuntu” entry in the start menu, or ubuntu.exe accessible via the command line (pictured). You will be prompted to enter a Unix username & password upon first launch. Ensure your username consists of lowercase letters.  

    <img alt="Initialise Ubuntu" src="/images/articles/installation/windows/ubuntu_initial.png" style="width: 500px; display:block; margin: 0 auto;"></img>

4. **Update Ubuntu** by executing the commands `sudo apt update` and `sudo apt dist-update` to update Ubuntu the package lists and upgrade packages respectively.

    <img alt="Update Ubuntu" src="/images/articles/installation/windows/ubuntu_update.png" style="width: 500px; display:block; margin: 0 auto;"></img>

Your WSL Ubuntu environment is now setup and ready to install Doubtfire, proceed to the next step!