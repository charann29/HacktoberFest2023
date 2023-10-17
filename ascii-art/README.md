## ascii-art

Ascii art is a project that involves taking a string as an argument and displaying the string in a graphical representation using ASCII characters.

## Learning Objectives

This project will help you learn and apply the following skills :
- Use client utilities
- Manipulation of the Go programming
- Methods for receiving data 
- Methods for outputing data 
- Manipulation of strings
- Manipulation of data structures

## Features

- Conversion of characters into ASCII art using predefined banner.
- Handling of special characters, including spaces and breaks.
- Support for various ASCII graphical banner.

## Project Structure

The basic structure of the project is organized as follows:

```
ascii-art/
|
├── banner/
│   ├── shadow.txt
│   └── standard.txt
|   └── thinkertoy.txt
└── tools/
    ├── manage.go
    ├── read.go
    └── write.go
├── go.mod
├── main.go
└── README.md

```

- `main.go`: The entry point of the project that takes input and produces corresponding ASCII art.
- `banner/`: Folder constaining ASCII templates for each character.
- `tools/`: Folder containing utility functions for reading, managing and writing data.


## Usage 

1. Ensure that Go is installed on your system.
2. Clone this repository into your Go workspace.
3. Customize ASCII banner in the `Banner/` folder or use the existing banner.
4. Run the `main.go` file using the `go run . <something>` command.


## Author

- Ndeye Siga POUILLE @seegah