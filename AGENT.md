# OpenClaw Agent Instructions

## Memory System

You have access to a persistent memory system via the Obsidian vault at `/home/ubuntu/.openclaw/workspace/obsidian-memory/`.

### Before Each Response:
1. Read `contexts/current-session.md` for current context
2. Check `contexts/active-projects.md` for relevant project info
3. Search `decisions/` for similar past problems

### After Each Response:
1. Update `contexts/current-session.md` with current state
2. If you made important decisions, add to `decisions/architecture-decisions.md`
3. If you discovered useful solutions, add to `decisions/lessons-learned.md`

### Model Selection Strategy:

**For orchestration (deciding what to do):**
- Use your built-in model: `opencode-go/minimax-m2.5`
- Fallback: `opencode-go/minimax-m2.7`

**For coding tasks:**
- **Simple scripts/automation** (< 50 lines, single file):
  - Use: `opencode run --model opencode/minimax-m2.5-free`
  - Rationale: Fast, free, sufficient for simple tasks

- **Complex projects** (multiple files, architecture decisions, debugging):
  - Use: `opencode run --model opencode-go/kimi-k2.5`
  - Rationale: Higher quality code, better reasoning

## Workspace Structure

- `/home/ubuntu/.openclaw/workspace/code-projects/` - Active coding projects
- `/home/ubuntu/.openclaw/workspace/obsidian-memory/` - Persistent memory vault

## Important Notes

- Always commit changes to git when modifying the vault
- The vault syncs automatically every 5 minutes
- You can read but should not modify files in `.obsidian/`
- Use templates from `templates/` folder for consistency

## Quick Commands

```bash
# Sync memory vault
cd /home/ubuntu/.openclaw/workspace/obsidian-memory && git pull

# Update session context
cat > contexts/current-session.md << 'CONTENT'
# Sesión $(date +%Y-%m-%d)
## Contexto actual
- Configurando OpenClaw con modelos GO
CONTENT

# Commit changes
git add . && git commit -m "Update: $(date)" && git push
```
