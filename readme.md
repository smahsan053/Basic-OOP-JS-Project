# Personality Type and Name Inquiry Script

A simple command-line application that determines your personality type and records your name using user input.

## Features

- **Personality Inquiry**: Ask the user if they prefer to talk to others or keep to themselves.
- **Name Inquiry**: Ask the user for their name.
- **Personality Type Output**: Display the user's personality type based on their input.
- **Name Output**: Display the user's name along with their personality type.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/personality-inquiry-script.git
   cd personality-inquiry-script
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Make the script executable:
   ```sh
   chmod +x ./index.js
   ```

## Usage

To start the application, run the following command:

```sh
./index.js

Follow the prompts to enter your personality preference and name.

How It Works
Personality Inquiry: The script prompts you to enter 1 if you like to talk to others or 2 if you prefer to keep to yourself.
Personality Type Determination: Based on your input, the script creates a Person object and determines your personality type.
Name Inquiry: The script then prompts you to enter your name.
Student Object Creation: The script creates a Student object, sets your name, and associates your personality type with it.
Output: Finally, the script outputs your name and personality type.

Example

./index.js

# Output:
# Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: 1
# You are: Extrovert
# What is your name: John
# Your name is: John and your personality type is: Extrovert

Error Handling
If an invalid input (non-integer) is provided for the personality type, the script catches the error and prompts you to enter an integer value.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

```
