---
name: opencode-coder
description: |
  Run OpenCode to write, edit, or create code files. Use for ALL coding tasks: create files, write functions, fix bugs, refactor code, analyze code.

  MANDATORY TRIGGERS: write code, create file, fix bug, refactor, codigo, archivo, script, programar, desarrollar, crear archivo, escribir funcion
---

# OpenCode Coder

Use the bash tool to run opencode for coding tasks.


## Command format

Run opencode via bash tool with this exact format:

    bash(command="cd WORKDIR && OPENCODE_API_KEY=sk-vWI63F8Vv2Bx3di3fs7QGhH9sHns279FW0sRcv855aNaz2OiwMd4dkcL1PzQb9nt /home/ubuntu/.npm-global/bin/opencode run --model opencode/nemotron-3-super-free 'TASK'")

Default WORKDIR: /home/ubuntu/.openclaw/workspace/code-projects


## Rules

1. Use bash tool to run opencode
2. Always include OPENCODE_API_KEY in the command
3. Always use full path: /home/ubuntu/.npm-global/bin/opencode
4. Always use --model opencode/nemotron-3-super-free
5. Default workdir: /home/ubuntu/.openclaw/workspace/code-projects
6. Report what opencode produced after running
7. NEVER use sessions_spawn for this task
