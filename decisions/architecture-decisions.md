# Decisiones de Arquitectura

## 2026-03-31: Selección de Modelos GO

**Contexto**: Necesitábamos modelos de OpenCode GO para OpenClaw y coding.

**Decisión**: 
- OpenClaw Principal: `opencode-go/minimax-m2.5`
- OpenClaw Fallback: `opencode-go/minimax-m2.7`
- Coding simple: Modelos `-free`
- Coding complejo: `opencode-go/kimi-k2.5`

**Razón**: Balance entre costo y calidad. Minimax M2.5 es económico y suficiente para orquestación. Kimi K2.5 para proyectos complejos.

## 2026-03-31: Integración Obsidian

**Contexto**: Necesitamos memoria persistente entre sesiones.

**Decisión**: Usar Obsidian vault + Git para sincronización.

**Razón**: 
- Gratuito
- Markdown puro
- Sincronización vía Git
- Accesible desde MacBook
