# React Progress Bar Application

[visit online](https://main--thunderous-strudel-c4818f.netlify.app/)

This is a React application that uses a custom `ProgressUI` component to display progress bars with different configurations.

## Features

- Displays a progress bar with a customizable title, status, background color, text color, and variant.
- Option to show elapsed time.
- Progress bar color can be set manually or generated randomly.
- Supports both light and dark modes.

## Components

### ProgressUI

A functional component that uses hooks and takes in several props:

- `progress`: A number representing the progress.
- `title`: An optional string for the title.
- `status`: An optional string for the status.
- `bgColor`: An optional string for the background color.
- `textColor`: An optional string for the text color.
- `variant`: An optional string that can be either 'dark' or 'light', with a default value of 'light'.
- `showElapsedTime`: An optional boolean to show elapsed time, with a default value of true.

### App

The main component that maintains a `progress` state and increments it every `stepDuration` milliseconds. It uses the `ProgressUI` component to display progress bars with different configurations.

## Usage

To run the application, use the following command:

```bash
npm start
