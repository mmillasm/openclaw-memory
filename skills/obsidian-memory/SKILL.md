---
name: obsidian-memory
description: Read and write persistent memory from Obsidian vault for context across sessions
metadata:
  openclaw:
    emoji: 🧠
    requires:
      bins:
        - git
    always: true
---

# Obsidian Memory Skill

Provides persistent memory for OpenClaw using an Obsidian vault synced via Git.

## Overview

This skill allows OpenClaw to maintain context across sessions by reading from and writing to an Obsidian vault. The vault is stored at `/home/ubuntu/.openclaw/workspace/obsidian-memory/` and synced with Git.

## When to Use

**USE this skill when:**
- Starting a new session to check context from previous sessions
- Making important architectural decisions that should be remembered
- Discovering solutions to complex problems
- Updating project status
- Before responding to complex queries to gather context

**DO NOT use this skill when:**
- The task is a simple one-off command
- No persistent context is needed
- Working with sensitive information that should not be logged

## Tools Available

### Read Context

Before responding to complex queries, read the relevant context files:

```bash
# Read current session context
cat /home/ubuntu/.openclaw/workspace/obsidian-memory/contexts/current-session.md

# Read active projects
cat /home/ubuntu/.openclaw/workspace/obsidian-memory/contexts/active-projects.md
```

### Search Memory

Search through the vault for relevant information:

```bash
# Search for specific terms
grep -r "search-term" /home/ubuntu/.openclaw/workspace/obsidian-memory/
```

### Write Memory

After completing tasks, update the memory:

```bash
# Update session context
cd /home/ubuntu/.openclaw/workspace/obsidian-memory
cat > contexts/current-session.md << 'EOF'
# Sesion Update
## Context
[Current work context]
EOF
```

### Sync Memory

Sync changes with the remote repository:

```bash
cd /home/ubuntu/.openclaw/workspace/obsidian-memory
git pull --quiet
git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M')"
git push --quiet
```

## File Structure

- contexts/active-projects.md - Current projects and their status
- contexts/current-session.md - Current session context
- decisions/architecture-decisions.md - Important technical decisions
- decisions/lessons-learned.md - Solutions and learnings
- AGENT.md - Base instructions for the agent

## Best Practices

1. Always read context first
2. Keep it concise
3. Sync regularly
4. Document decisions
