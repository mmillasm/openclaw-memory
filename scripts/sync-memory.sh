#!/bin/bash
# OpenClaw Memory Vault Sync Script
# Synchronizes Obsidian vault with remote repository

VAULT_PATH="/home/ubuntu/.openclaw/workspace/obsidian-memory"
LOG_FILE="/home/ubuntu/.openclaw/workspace/logs/memory-sync.log"

# Create log directory if it does not exist
mkdir -p "$(dirname "$LOG_FILE")"

# Function to log with timestamp
log() {
    echo "[$(date "+%Y-%m-%d %H:%M:%S")] $1" >> "$LOG_FILE"
}

# Check if vault exists
if [ ! -d "$VAULT_PATH/.git" ]; then
    log "ERROR: Vault not initialized or not a git repository"
    exit 1
fi

cd "$VAULT_PATH" || exit 1

# Pull latest changes
log "Pulling latest changes..."
if git pull --quiet 2>/dev/null; then
    log "Pull successful"
else
    log "WARNING: Pull failed or nothing to pull"
fi

# Check for local changes
if [ -n "$(git status --porcelain)" ]; then
    log "Local changes detected, committing..."
    git add .
    git commit -m "Auto-sync: $(date "+%Y-%m-%d %H:%M")" --quiet
    
    if git push --quiet 2>/dev/null; then
        log "Push successful"
    else
        log "ERROR: Push failed"
    fi
else
    log "No local changes to commit"
fi
