# Doubtfire Documentation Project

This middleman project contains pages that document the Doubtfire project - a task oriented system designed to help support frequent formative feedback.

Doubtfire is an open-source, innovative, learning management system designed to put the student first.

Inside the webiste, you can find :
1. Installation guides for Doubtfire.
2. User guides.
3. Extend Doubtfire and Contributions.

[Go to Website](https://doubtfire-lms.github.io/doubtfire.io/)

## How its done?

## Getting started 

Start by ensuring you have ruby on your system. You **must** install [rbenv](https://github.com/rbenv/rbenv) to keep your ruby versions under control. Refer to rbenv's [installation guide](https://github.com/rbenv/rbenv#installation) on how to do so.

Ensure you have installed ruby version 2.4.3:

```bash
$ rbenv install 2.4.3
$ rbenv rehash
```

Then, install [bundler](http://bundler.io) to sort out your ruby dependencies:

```bash
$ gem install bundler
$ bundle install
```

## Creating guides

Guides are categorised using a tag. Once you have decided for one or more tag for your guide, execute the following command:

```bash
bundle exec middleman article "[Name of Guide]" -t [tags]
```

Once you execute this command, you will see that the guide you have named appears under source/articles/guides using the current day’s date. For example, 

**source/articles/guides/20XX-XX-XX-my-guide.html.md.**
 
##Adding Required Frontmatter
Open this file in a text editor and you will see the following:

---

title: My Guide
date: 2017-12-11 06:44 UTC
tags: tag1,tag2

---
**Note**: All tags should be in lowercase.
The data separated by the three dashes (---) is known as the frontmatter of the guide. This contains metadata about the guide, which (by default) includes the guide name, date created, and associated tags.

**Note**: You must add the following keys to the frontmatter:
author: your full name,
author_url: a URL to your GitHub profile or personal website, and
summary: a summary of the guide that should be no more than two to three lines and should embody the gist of the guide.

##Write the guide
Underneath the bottom three dashes, you may begin writing your guide using Github-flavoured Markdown. You won’t need to add the title of the guide as a Heading 1 (<h1> or #) as this is automatically added for you.

**Note**: When writing your guide, ensure you only use Heading 2 to Heading 6 (<h2> … <h6> or ## … ######). This is because Heading 1 is reserved for the guide’s title.
Remember to keep the language friendly, include examples and ensure it is high quality.

If you would like to include images in your guide, host them on Imgur as this will ensure they exist permanently (unlike temporary image hosting services such as puush).

##Test the guide
After you have finished writing, it’s time to make sure everything looks right!

From your terminal, where you created the guide, run the following command to start running the website locally:

bundle exec middleman

Now, visit http://localhost:4567 to see the website.

Run through the following checklist to make sure:

that you can navigate to the guides and see your guide your guide indexed in the right tag group that you tagged your guide under.
make sure it all looks good.
make sure the spelling is correct.

## Developing

Develop using:

```bash
$ bundle exec middleman serve
```

Your website will be watched and hosted locally at **[http://localhost:4567/](http://localhost:4567/)**.

## Publishing

Publish using:

```bash
$ rake publish
```

If this fails, try rebuilding the build folder from scratch then redeploy:

```bash
$ rm -rf build
$ rake publish
```

Doubtfire is completely open source, and free to use — any contributions to the project are appreciated!

## License

Licensed under the MIT Licence.
