#!/bin/bash

HOOKS_DIR=".git/hooks"
SOURCE_DIR="tasks/task-04/ishanrajsingh/hooks"

if [ ! -d "$HOOKS_DIR" ]; then
  echo ".git/hooks directory not found. Are you in the project root?"
  exit 1
fi

echo "Installing Git hooks..."

cp "$SOURCE_DIR/pre-commit" "$HOOKS_DIR/pre-commit"
cp "$SOURCE_DIR/commit-msg" "$HOOKS_DIR/commit-msg"

chmod +x "$HOOKS_DIR/pre-commit"
chmod +x "$HOOKS_DIR/commit-msg"

echo "Git hooks installed successfully."
