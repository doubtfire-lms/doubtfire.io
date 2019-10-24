---

title: Writing a guide for Doubtfire
date: 2019-04-20 04:44 UTC
tags: contributing

---

This tutorial will cover the details of how to write guide for the Doubtfire website.

You will need:

  1. a [GitHub](http://github.com) account,
  2. a Ruby development environment to build the website,
  3. an awesome idea for a guide!

## Getting Ready

In order to test your guide in the Doubtfire website, you need to download the source code for the website. To do this, make sure you are logged into GitHub, and then [create a fork](http://github.com/doubtfire-lms/doubtfire.io/fork) of the website repository onto your own personal GitHub account.

Once you have forked the website repository, you should then [clone your fork](https://help.github.com/articles/cloning-a-repository/) of the repository to your local machine by selecting "clone or download" and copying the link. You can do this via the `git clone <link>` command in the terminal, or by using [GitHub Desktop](https://desktop.github.com).

Once you have cloned your forked repository, follow the instructions posted in the website's [readme](https://github.com/doubtfire-lms/doubtfire.io/blob/master/README.md).

## Creating The Guide

To create a new guide, navigate to the directory where you cloned the repository:

```
cd /path/to/doubtfire.io
```

Guides are categorised using a _tag_. Once you have decided for one or more tag for your guide, execute the following command:

```
bundle exec middleman article "[Name of Guide]" -t [tags]
```

Once you execute this command, you will see that the guide you have named appears under `source/articles/guides` using the current day's date. For example, `source/articles/guides/20XX-XX-XX-my-guide.html.md`.

## Adding Required Frontmatter

Open this file in a text editor and you will see the following:

```yaml
---

title: My Guide
date: 2017-12-11 06:44 UTC
tags: tag1,tag2

---
```

<div class="alert alert-warning">
  <strong>Note:</strong> All tags should be in lowercase.
</div>

The data separated by the three dashes (`---`) is known as the _frontmatter_ of the guide. This contains metadata about the guide, which (by default) includes the guide name, date created, and associated tags.

<div class="alert alert-warning">
  <strong>Note:</strong> You <strong>must</strong> add the following keys to the frontmatter:
  <ul>
    <li>
      <strong><code>author</code></strong>:
      your full name,
    </li>
    <li>
      <strong><code>author_url</code></strong>:
      a URL to your GitHub profile or personal website, and
    </li>
    <li>
      <strong><code>summary</code></strong>:
      a summary of the guide that should be no more than two to three lines and should embody the gist of the guide.
    </li>
  </ul>
  <strong>If you do not do this you may break the API documentation generation!</strong>
</div>

We suggest you copy and paste the following example to add it to the frontmatter to ensure no mistakes:

```yaml
---

title: My Guide
date: 2017-12-11 06:44 UTC
tags: tag1,tag2
author: Fred Smith
author_url: http://github.com/fsmith
summary: |
  This guide discusses how you can write a guide.

---

```

## Provide valid tags

The tags are used to position the article within the website. The following tags are commonly used

- `staff_guides` - the article will appear as a guide for staff
- `student_guides` - the article will appear as a guide for students
- `contributing` - the article relates to writing code or articles for Doubtfire
- `unit_chair_guides` - the article is for people who run units
- `all_users` - the guide is for any user of Doubtfire

## Write the guide

Underneath the bottom three dashes, you may begin writing your guide using [Github-flavoured Markdown](https://guides.github.com/features/mastering-markdown/). You won't need to add the title of the guide as a Heading 1 (`<h1>` or `#`) as this is automatically added for you.

<div class="alert alert-warning">
  <strong>Note:</strong> When writing your guide, ensure you only use
  Heading 2 to Heading 6 (<code>&lt;h2&gt;</code> ... <code>&lt;h6&gt;</code> or <code>##</code> ... <code>######</code>).
  This is because Heading 1 is reserved for the guide's title.
</div>

Remember to keep the language friendly, include examples and ensure it is high quality.

If you would like to include images in your guide, **host them on [Imgur](http://imgur.com)** as this will ensure they exist permanently (unlike temporary image hosting services such as [puush](http://puush.me/)).

## Test the guide

After you have finished writing, it's time to make sure everything looks right!

From your terminal, where you created the guide, run the following command to start running the website locally:

```
bundle exec middleman serve
```

Now, visit [`http://localhost:4567`](http://localhost:4567) to see the website.

Run through the following checklist to make sure:

1. that you can navigate to the guides and see your guide your guide indexed in the _right_ tag group that you tagged your guide under,
2. make sure it all looks good (i.e., no visual errors), and
3. make sure the spelling is correct. (You may want to run your guide through a spellchecker).

## Merging your guides into the Doubtfire website

If it's all looking good, it's time to submit a "pull request" so that a core member of the Doubtfire team can review your proposed guide and get it published.

To do this, push your changes via GitHub, and visit the GitHub webiste for your fork. View this [GitHub tutorial](https://help.github.com/guides/creating-a-pull-request/) for more details on how to do this. A member of the Doubtfire team will view your guide, give feedback, and otherwise make sure everything looks good. Finally, they will then publish your guide!

Doubtfire is completely open source, and free to use &mdash; any contributions to the project are appreciated!

If at any stage of this process you run into any issues, feel free to raise an issue on GitHub.

