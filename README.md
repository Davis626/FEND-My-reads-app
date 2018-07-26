# MyReads App Project

<img src="/app.jpg" alt="Project Screenshot">

## Table of Contents
* [Project Overview](#project-overview)
* [Starter code](#starter-code)
* [Backend Server](#backend-server)
* [Important](#important)
* [React Components Structure](#react-components-structure)
* [Dependencies](#dependencies)
* [Instructions](#instructions)
* [About the project](#about-the-project)

## Project Overview
MyReads app - project of the Udacity Front-End Web Developer Nanodegree Program.
Purpose of the project was to convert a static webpage from the starter code to an interactive webpage using React.

## Starter code
Starter code provided by Udacity:
> link https://github.com/udacity/reactnd-project-myreads-starter

## Backend Server

To simplify development process, there is provided a backend server for students to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods that will be needed to perform necessary operations on the backend like:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The **backend API** uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## React Components Structure
```
<App />

  / Main page route path='/'

    <BooksLibrary />
      <BooksShelf />
        <Book />

  / Search page route path='/search'

    <BooksSearch />
      <Book />
```

## Dependencies

* React Router - [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)

## Instructions

* download or clone the repository
* `cd` into the project folder
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site in browser: `http://localhost:3000`

## About the project

Manage your personal book library using this app.
Main page displays a list of book shelves:

* Currently Reading
* Want to Read
* Read

Use the search page for searching books and adding them to one of these shelves.
Afterwards go back to main page to easily move the book from one shelf to another.
You can also remove a book from the library by selecting "none" shelf.
