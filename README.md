# Doubtfire Documentation Project

This middleman project contains pages that document the Doubtfire project - a task oriented system designed to help support frequent formative feedback.

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

## License

Licensed under the MIT Licence.
