---

title: Step 4 - Developing with WSL
tags: installation,windows
date: 12-05-2020
author: Matthew Kramersh
author_url: https://github.com/MattK18

---

To avoid any errors between the Windows filesystem and Linux filesystem when editing, Microsoft has implemented features into Windows and Visual Studio Code itself to prevent corruption of the Linux subsystem, therefore VS Code must be the editor you use. **Ensure you have the latest version of Windows 10 and Visual Studio Code before proceeding.**

1. **Install VS Code Server on Ubuntu.** This is as simple as running the command “code” inside of the terminal.

    <img alt="Install Server" src="/images/articles/installation/windows/doubtfire_four.PNG" style="width: 600px; display:block; margin: 0 auto;"></img>

2. **Open VS Code in the Doubtfire directory and configure.** Running “code .” will open VS Code in the directory you are currently in.

     <img alt="Open VS Code" src="/images/articles/installation/windows/doubtfire_five.PNG" style="width: 600px; display:block; margin: 0 auto;"></img>

     This will open a new VS Code window in the Doubtfire directory. If prompted to install WSL – Remote click the install button (this may require a reload).

    <img alt="VS Code" src="/images/articles/installation/windows/doubtfire_six.PNG" style="width: 600px; display:block; margin: 0 auto;"></img>

    You should now see the Doubtfire codebase! The bottom left hand corner should indicate that you are connected to WSL:<img alt="WSL" src="/images/articles/installation/windows/doubtfire_seven.PNG" style="width: 200px; display:block; margin: 0 auto;"></img> 



