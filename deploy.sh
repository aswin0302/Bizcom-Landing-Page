#!/usr/bin/env bash
# Deploy bizcom.in (main branch) on the server.
# Usage: ./deploy.sh
set -euo pipefail

BRANCH="main"
APP_DIR="/home/transport/public_html/website_bizcom"

cd "$APP_DIR"

# Use the Node version pinned in .nvmrc, only for this project (installs nvm/Node if missing)
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo "==> Installing nvm"
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
fi
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"
nvm install   # reads .nvmrc, no-op if already installed
nvm use
echo "==> Node $(node -v)"

echo "==> Pulling latest $BRANCH"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
OLD_HEAD="$(git rev-parse HEAD)"
git pull --ff-only origin "$BRANCH"
NEW_HEAD="$(git rev-parse HEAD)"

# npm install only on first run or when package files changed in the pull
if [ ! -d node_modules ] || ! git diff --quiet "$OLD_HEAD" "$NEW_HEAD" -- package.json package-lock.json; then
  echo "==> Installing dependencies"
  npm install
else
  echo "==> Dependencies unchanged, skipping npm install"
fi

echo "==> Building"
npm run build

echo "==> Done. Site files are in $APP_DIR/dist (serve bizcom.in from there)"
