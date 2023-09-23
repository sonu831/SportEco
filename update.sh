#!/bin/bash

# Check if logged in to eas
if eas whoami &> /dev/null; then
  echo "Already logged in to eas."
else
  # If not logged in, automatically log in with credentials
  eas login --username er.yogendra.7 --password Sonu831$
fi

# Set the default branch to "preview" if the user doesn't enter one
default_branch="preview"
read -p "Enter the branch (default is '$default_branch'): " branch

# Use the default branch if the user didn't provide one
branch="${branch:-$default_branch}"

# Display a message indicating the default branch
echo "Using branch: $branch"

# Run the eas update command with the provided branch and message
eas update --branch "$branch" --message "$message"