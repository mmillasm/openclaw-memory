# MEMORY.md - Memoria de Largo Plazo

## Usuario
- Nombre: Ader M
- Usuario Telegram: @aderzeit (ID: 6637360763)
- Idioma: español

## Configuración activa
- Modelo: `opencode-go/minimax-m2.5`
- Workspace: `/home/ubuntu/.openclaw/workspace`
- Python: en actualización (usuario va a actualizar a 3.10+)
- Tailscale IP: `100.91.92.50`

## Proyecto principal: Mission Control
- Instalado en `~/mission-control/`
- URL: `https://xplain-vnic.tail918e51.ts.net/`
- Video de referencia: "OpenClaw is 100x better with this tool (Mission Control)" by Alex Finn
- Features: Calendar, Projects, Memories, Docs, Office (pixel art), Mission Statement, Reverse Prompting
- Arquitectura: Docker + Next.js 14 + Tailscale Serve

## Configuración de OpenClaw con Obsidian como memoria persistente
- Skill `obsidian-memory` en desarrollo

## Archivos importantes
- `contexts/current-session.md` — tareas activas de configuración
- `memory/2026-03-31.md` — diario de sesiones

## Reglas y recordatorios
- Siempre listar las cosas que encuentre
- Guardar todo en archivos, no en notas mentales
- Respaldo automático de sesión antes de actualizaciones/reinicios
- Git commit automático después de respaldos