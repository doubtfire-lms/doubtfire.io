---
title: Installing Doubtfire on Windows
summary: Guides the user through an installation on Ubuntu WSL distribution
authors: C-Blenco, MattK18
---

The aim of this document is to provide instruction on how to setup a functional install of Doubtfire on Windows, via the
Windows Subsystem for Linux (WSL). This document will also entail how to properly modify the codebase (using Visual
Studio Code), such that no incompatibilities arise between the Windows and Linux filesystems.

Once you have all of these steps complete you should be setup and ready to start using Doubtfire

# Requirements

Ensure the following is setup and ready to use:

1. **An updated installation of Windows 10, with the Windows Subsystem for Linux optional feature enabled** (follow the
   instructions [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10)).

1. **WSL Ubuntu distribution** (install from the Windows Store
   [here](https://www.microsoft.com/en-au/p/ubuntu/9nblggh4msv6))

1. **Visual Studio Code** (download from <https://code.visualstudio.com/>).

Once these are all activated/installed, proceed to [Step 1](./step-1).

# Step 1: Setup WSL & Ubuntu

1. **If you haven't already, enable the Windows Subsystem for Linux optional feature of Windows 10.** To do this, launch
   the “Windows Features” dialog, activate the “Windows Subsystem for Linux” feature, and click “OK”. You may have to
   restart Windows.

   ![Activate WSL](/guides/installation-windows/activate_wsl.png)

2. **Install the WSL Ubuntu distribution if it is not yet installed.** This can be downloaded via the Windows Store
   [here](https://www.microsoft.com/store/productId/9NBLGGH4MSV6).

3. **Launch the Ubuntu terminal**, via either the “Ubuntu” entry in the start menu, or ubuntu.exe accessible via the
   command line (pictured). You will be prompted to enter a Unix username & password upon first launch. Ensure your
   username consists of lowercase letters.

   ![Initialise Ubuntu](/guides/installation-windows/ubuntu_initial.png)

4. **Update Ubuntu** by executing the commands `sudo apt update` and `sudo apt dist-update` to update Ubuntu the package
   lists and upgrade packages respectively.

   ![Update Ubuntu](/guides/installation-windows/ubuntu_update.png)

Your WSL Ubuntu environment is now setup and ready to install Doubtfire, proceed to the next step!

# Step 2: Setup the Doubtfire Backend

Now that your Ubuntu distribution is configured, it's time to install the Doubtfire backend.

1.  **First, create the Doubtfire directory and enter the directory.** This step is optional, but it is useful keep the
    codebase in its own directory.

    ![Create Doubtfire directory](/guides/installation-windows/doubtfire_directory.png)

2.  **Clone the Doubtfire repositories** by cloning from the Doubtfire GitHub repository links below using
    `git clone <repo_link>`.

    **Note:** It is recommended that you first fork the repositories onto your own Github account, and clone from there.
    Please refer to the
    [guide on contributing](https://github.com/OnTrack-UG-Squad/doubtfire-api/blob/development/CONTRIBUTING.md#1-forking-and-cloning-the-repository)
    for detailed instructions.

    - **doubtfire-api:** <https://github.com/doubtfire-lms/doubtfire-api.git>
    - **doubtfire-web:** <https://github.com/doubtfire-lms/doubtfire-web.git>
    - **doubtfire.io:** <https://github.com/doubtfire-lms/doubtfire.io.git>

    ![Clone Doubtfire repositories](/guides/installation-windows/doubtfire_clone.png)

3.  **Enter the doubtfire-api directory, and run the setup script to install the doubtfire-api** by typing `./setup.sh`.
    You may be asked at times to interact with the console (such as entering your password, pressing enter etc.) so keep
    an eye on it. This may take a while.

    ![Setup doubtfire-api](/guides/installation-windows/api_setup.png)

4.  **Ensure that doubtfire-api is installed correctly** by starting the backend server with `bundle exec rails s`.

    ![Start doubtfire-api](/guides/installation-windows/api_test.png)

    Confirm that the backend is running by navigating to `http://localhost:3000/api/docs/` in your web browser. You
    should see the Swagger UI and a list of all the API endpoints.

Leave the server running and open a new Ubuntu terminal by opening the Ubuntu app from the start menu again. Continue to
step 3 to install the Doubtfire frontend.

# Step 3: Setup the Doubtfire Frontend

1. **In the new terminal, run the doubtfire-web setup** by changing directory to `~/Doubtfire/doubtfire-web` and
   executing the setup script.

   ![Doubtfire set up](/guides/installation-windows/Doubtfire_one.PNG)

2. **Start the frontend** by executing npm start.

   ![Start frontend](/guides/installation-windows/doubtfire_two.PNG)

3. **Verify the frontend is running** by navigating to `http://localhost:4200/`. You should see the Doubtfire login
   interface (as long as the backend is also running).

   ![Setup doubtfire-api](/guides/installation-windows/doubtfire_three.PNG)

   To stop the server, open the terminal window and press `Ctrl + C`

   Continue to step 4 for information regarding development with WSL.

# Step 4: Developing with WSL

To avoid any errors between the Windows filesystem and Linux filesystem when editing, Microsoft has implemented features
into Windows and Visual Studio Code itself to prevent corruption of the Linux subsystem, therefore VS Code must be the
editor you use. **Ensure you have the latest version of Windows 10 and Visual Studio Code before proceeding.**

1. **Install VS Code Server on Ubuntu.** This is as simple as running the command `code` inside of the terminal.

   ![Install Server](/guides/installation-windows/doubtfire_four.PNG)

2. **Open VS Code in the Doubtfire directory and configure.** Running `code .` will open VS Code in the directory you
   are currently in.

   ![Open VS Code](/guides/installation-windows/doubtfire_five.PNG)

   This will open a new VS Code window in the Doubtfire directory. If prompted to install "WSL – Remote" click the
   install button (this may require a reload).

   ![VS Code](/guides/installation-windows/doubtfire_six.PNG)

   You should now see the Doubtfire codebase! The bottom left hand corner should indicate that you are connected to
   <img src="/guides/installation-windows/doubtfire_seven.PNG" alt="WSL" class="inline">
