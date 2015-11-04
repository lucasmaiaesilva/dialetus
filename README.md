# Dialetus

A compilation of the most varied dialects spoken around Brazil.

###### select language:
[![](flag-br.png)](readme-pt-br)
[![](flag-en.png)](README.md)

---

## Getting started:

#### Installation

First at all, install the dependencies to run this project.

* [Node](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com)

Run the following commands to download and install the application:

    #clone this repository
    $ git@github.com:jjaderg/dialetus.git
    $ cd dialetus

    # install dependencies
    $ npm install


## Structure:

    dialetus -
      |-- build/
          |-- css/
                main.css
          |-- js/
                all.min.js
          |-- img/

      |-- app/    
          |-- src/
              |-- img
              |-- js
              |-- styl

      .gitignore
      gulpfile.js
      package.json
      README.md
      readme-pt-br
      flag-en
      flag-br

## Tasks:

* `gulp`: Initialize watch for changes and a server (localhost:8080)
* `gulp-deploy`: Build and Deploy project to github-pages

## License:

See the [LICENSE]() file.
