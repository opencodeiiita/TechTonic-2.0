#!/bin/bash

echo "Installing Git hooks..."

HOOKS_DIR=".git/hooks"


if [ ! -d "$HOOKS_DIR" ]; then
  echo ".git/hooks directory not found"
  exit 1
fi

cp tasks/task-04/deepali-kumari-iitp/hooks/pre-commit $HOOKS_DIR/pre-commit
cp tasks/task-04/deepali-kumari-iitp/hooks/commit-msg $HOOKS_DIR/commit-msg

chmod +x $HOOKS_DIR/pre-commit
chmod +x $HOOKS_DIR/commit-msg

echo " Git hooks installed successfully"
