---

title: Step 2 - Setup the Doubtfire Backend
tags: installation,windows
date: 2020-05-07 15:00 AEST
author: Conor Blencowe
author_url: https://github.com/C-Blenco

---

Now that your Ubuntu distribution is configured, it's time to install the Doubtfire backend.

1. **First, create the Doubtfire directory and enter the directory.** This step is optional, but it is useful keep the codebase in its own directory.

    <img alt="Create Doubtfire directory" src="/images/articles/installation/windows/doubtfire_directory.png" style="width: 500px; display:block; margin: 0 auto;"></img>

2. **Clone the Doubtfire repositories** by cloning from the Doubtfire GitHub repository links below using `git clone <repo_link>`. 
    
    NOTE: It is recommended that you first fork the repositories onto your own Github account, and clone from there. Please refer to the [guide on contributing](https://github.com/OnTrack-UG-Squad-T1-2020/doubtfire-api/blob/development/CONTRIBUTING.md#1-forking-and-cloning-the-repository) for detailed instructions.
    - **doubtfire-api:** <https://github.com/doubtfire-lms/doubtfire-api.git>
    - **doubtfire-web:** <https://github.com/doubtfire-lms/doubtfire-web.git>
    - **doubtfire.io:** <https://github.com/doubtfire-lms/doubtfire.io.git>

    <img alt="Clone Doubtfire repositories" src="/images/articles/installation/windows/doubtfire_clone.png" style="width: 500px; display:block; margin: 0 auto;"></img>

3. **Enter the doubtfire-api directory, and run the setup script to install the doubtfire-api** by typing `./setup.sh`. You may be asked at times to interact with the console (such as entering your password, pressing enter etc.) so keep an eye on it.
This may take a while.

    <img alt="Setup doubtfire-api" src="/images/articles/installation/windows/api_setup.png" style="width: 500px; display:block; margin: 0 auto;"></img>

2. **Ensure that doubtfire-api is installed correctly** by starting the backend server with `bundle exec rails s`.

    <img alt="Start doubtfire-api" src="/images/articles/installation/windows/api_test.png" style="width: 500px; display:block; margin: 0 auto;"></img>

    Confirm that the backend is running by navigating to `http://localhost:3000/api/docs/` in your web browser. You should see the Swagger UI and a list of all the API endpoints.

Leave the server running and open a new Ubuntu terminal by opening the Ubuntu app from the start menu again. Continue to step 3 to install the Doubtfire frontend.
