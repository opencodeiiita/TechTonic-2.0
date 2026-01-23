#!/bin/sh

echo "🔧 Installing Git hooks..."

ROOT_DIR=$(git rev-parse --show-toplevel)

cp "$ROOT_DIR/tasks/task-04/icyfire8/hooks/pre-commit" "$ROOT_DIR/.git/hooks/pre-commit"
cp "$ROOT_DIR/tasks/task-04/icyfire8/hooks/commit-msg" "$ROOT_DIR/.git/hooks/commit-msg"

chmod +x "$ROOT_DIR/.git/hooks/pre-commit"
chmod +x "$ROOT_DIR/.git/hooks/commit-msg"

echo "✅ Git hooks installed successfully!"
