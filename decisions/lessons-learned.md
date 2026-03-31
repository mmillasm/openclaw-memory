# Lecciones Aprendidas

## OpenClaw

### Configuración de Modelos
- Los modelos deben especificarse sin proveedor adicional para opencode-go
- El fallback debe ser array: `fallbacks: [...]` no `fallback`
- Reiniciar servicio después de cambios: `systemctl --user restart openclaw-gateway.service`

### Skills
- El skill `coding-agent` bundled no funciona con llama, usa `opencode-coder` custom
- Los skills workspace están en `~/.openclaw/workspace/skills/`

## Git

### Sincronización
- Configurar auto-pull en cron cada 5 minutos
- Usar quiet mode para evitar logs innecesarios: `git pull --quiet`
