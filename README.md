# Password Validator App

## Overview

This is a simple password validation app that allows users to upload a `.txt` file, checks the validity of passwords based on specified rules, and displays the results.

## File Format

The app accepts `.txt` files only. Each line in the file should be formatted as follows:

<character> <min>-<max>: <password>

Where:
- `<character>` is the character the rule is based on.
- `<min>` and `<max>` specify the minimum and maximum number of times the character should appear in the password.
- `<password>` is the actual password to be validated.

### Example Input File

a 1-5: abcdj z 2-4: asfalseiruqwo b 3-6: bhhkkbbjjjb

## Validation Rules

1. Each password is checked to ensure that the specified character appears between the given `<min>` and `<max>` number of times.
   
   - **Example 1**:  
     Rule: `a 1-5: abcdj`  
     The character `a` should appear between 1 and 5 times in the password `abcdj`.  
     Result: **Valid** (the character `a` appears once).

   - **Example 2**:  
     Rule: `z 2-4: asfalseiruqwo`  
     The character `z` should appear between 2 and 4 times in the password `asfalseiruqwo`.  
     Result: **Invalid** (the character `z` does not appear).

   - **Example 3**:  
     Rule: `b 3-6: bhhkkbbjjjb`  
     The character `b` should appear between 3 and 6 times in the password `bhhkkbbjjjb`.  
     Result: **Valid** (the character `b` appears 4 times).

## Features

- Users can upload `.txt` files using the provided file input.
- The app will parse each line, validate the passwords according to the rules, and provide a count of valid passwords.
- The results are displayed directly in the UI.

## Getting Started

To use this app:

1. Upload a `.txt` file with the format specified above.
2. Click the "Validate Passwords" button to check the passwords.
3. The app will display the number of valid and invalid passwords.

## Requirements

- The input file must be in `.txt` format.
- Each line in the file should follow the `<character> <min>-<max>: <password>` structure.

