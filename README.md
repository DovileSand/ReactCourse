# ReactCourse
Following introductory React.js course
======================================

Mini Project #1
---------------

### HelloReact basic project

First commit adds a basic React.js project. It can be used as an example how to
get started with a React and can be later evolved into a more complex project or
used as a React refresher. It contains a basic node server, essential
dependancies in the `package.json` file and additional dependancies, such as
`babel` in the script tags.

It introduces examples for such concepts as **events callbacks** in React,
**component properties**, **component state**, **nested components** and **aside
props state**.

This mini project allows to enter a name and/or a message in one or two of the
input fields and upon the button click it updates the greeting message. It is
achieved by rendering a simple **container component** in the browser, which
maintains the state of its two children components. One of them responds to the
user input while another, _presentational component_, displays the message.

This project can be seen checking out at this commit:
8386706bb3ed3e6ffc29748ae0999a3bfffa7593

After cloning this project please run `npm install` in your command line and to
start a server run `node server.js`.
