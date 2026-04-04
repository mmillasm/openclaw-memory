# VINXE AGENT - Knowledge Base
## Agencia de Automatizaciones IA para Corredores de Propiedades

---

## 🎯 IDENTIDAD DEL PROYECTO

**Nombre:** VYNXE  
**Tipo:** Agencia de Automatizaciones con IA  
**Nicho:** Corredores de propiedades en Chile  
**Propuesta de valor:** "Tu asistente virtual inmobiliario que atiende clientes 24/7, separa a los curiosos de los que quieren comprar, y agenda visitas automáticamente"  
**Estado actual:** Pre-validación (listo para contactar agencias)  
**Fecha de inicio:** Abril 2026

**Presencia Digital:**
- **Sitio web:** https://vynxe.cl (landing lista, pendiente deploy)
- **Instagram:** @vynxe.cl (contenido creado, pendiente cuenta)
- **Email:** hola@vynxe.cl

**Identidad de Marca (Actualizado):**
- **Logo:** Wordmark puro "vynxe" en minúscula (sin iconos, sin casas)
- **Tipografía:** Inter (display + body)
- **Colores:** Indigo #6366F1, Violeta #8B5CF6
- **Voz:** Directa, Útil, Humana
- **Regla:** Sin jerga técnica ("clientes" no "leads", "asistente" no "chatbot")

---

## 📊 INVESTIGACIÓN DE MERCADO

### Market Sizing
| Métrica | Valor |
|---------|-------|
| **TAM** | $15-30M USD anuales (~7,000 corredores) |
| **SAM** | $3-6M USD (~800 agencias direccionables) |
| **SOM (18 meses)** | $60-100K USD (~16 clientes) |

### Competencia Verificada (Chile)
- **GOdevs** (godevs.cl) - Automatización + IA, WhatsApp
- **Growth Buddies** (growthbuddies.cl) - Consultora IA
- **Tecnoapps** (tecnoapps.cl) - 10+ años, chatbots GPT-4
- **Neuronet** (neuronet.cl) - IT + IA + Data Science
- **Mejoria** (mejoria.cl) - IA para empresas
- **AI Think** (ai-think.cl) - Marketing, RRHH, Finanzas
- **JhedAI** (jhedai.com) - Industria + Gobierno
- **Granweb** (granweb.io) - 6+ años, ERP/CRM
- **Gancho IA** (ganchoia.com) - PYMES + gobiernos
- **AutoPilot** (autopilot.cl) - IA a medida
- **Tooldata** (tooldata.io) - Martech + IA
- **Automaxia** (automaxia.com) - Agentes voz y texto

### Nicho Seleccionado: Corredores de Propiedades
**Por qué este nicho:**
- ~7,000 corredores activos en Chile (Emol 2025)
- 30,000+ entidades con giro de corretaje (SII/FNE)
- 40% de tareas automatizables (CNN Chile "Agente 3.0")
- Mercado inmobiliario: USD $10,880M (2023)
- Competencia actual no ofrece IA conversacional especializada

---

## 💰 PRICING

| Paquete | Precio | Target |
|---------|--------|--------|
| **Starter** | $199,000 CLP/mes | 1-2 corredores |
| **Pro** | $399,000 CLP/mes | 3-8 corredores ⭐ TARGET |
| **Agency** | $799,000 CLP/mes | 9+ corredores |

**Setup inicial:** $300,000 - $600,000 CLP

### ROI para el cliente (Paquete Pro)
| Métrica | Sin Chatbot | Con Chatbot |
|---------|-------------|-------------|
| Leads atendidos/mes | 150 | 400 (+167%) |
| Tasa de conversión | 8% | 18% (+125%) |
| Comisiones generadas | $4.8M | $10.8M (+$6M) |
| **ROI mensual** | - | **1,400%** |

---

## 🤖 PRODUCTO: MVP CHATBOT

### Funcionalidades Core
1. **Chatbot Conversacional (IA)**
   - Atiende leads vía WhatsApp 24/7
   - Detecta si viene de propiedad específica
   - Respuestas naturales en español

2. **Calificación Automática de Leads**
   - Sistema de puntuación FIT/INTENT/ENGAGEMENT
   - Clasificación: HOT/WARM/COLD
   - Notificaciones en tiempo real

3. **Agendamiento Inteligente**
   - Integración Google Calendar
   - Horarios disponibles en tiempo real
   - Confirmaciones automáticas

4. **Dashboard de Leads**
   - Panel centralizado
   - Métricas de conversión
   - Pipeline visual

### Flujo de Conversación (Corregido)

#### Punto de Entrada A: Lead desde Propiedad Específica
```
[LEAD]: "Hola, vi una propiedad en su web"

[BOT]: "¡Hola! 👋 Veo que te interesó una propiedad. 
        ¿Me puedes decir cuál? Puedes:
        • Pegar el título del aviso
        • Decirme la dirección aproximada
        • O describirla (ej: 'depto 2D 2B en Las Condes')"

→ Flujo contextual: muestra info de la propiedad + agenda visita
```

#### Punto de Entrada B: Consulta General
```
[LEAD]: "Hola, busco departamento"

[BOT]: "¿Compra o arriendo?"
→ "¿En qué zona?"
→ "¿Cuántos dormitorios?"
→ "¿Presupuesto?"
→ "¿Qué tan pronto?"
→ Muestra 3 propiedades recomendadas
```

### Sistema de Lead Scoring

| Dimensión | Peso | Factores |
|-----------|------|----------|
| **FIT** | 40% | Zona, presupuesto, financiamiento, urgencia |
| **INTENT** | 35% | Vio propiedad, solicitó visita, tipo compra |
| **ENGAGEMENT** | 25% | Velocidad respuesta, datos proporcionados |

**Clasificación:**
- **A (80-100):** HOT - contactar en 2 horas
- **B (60-79):** WARM - seguimiento 24h
- **C (40-59):** TIBIO - recontacto 7 días
- **D (20-39):** COLD - nurture mensual
- **F (0-19):** Disqualify

---

## 🛠️ STACK TÉCNICO

| Componente | Herramienta | Costo/mes |
|------------|-------------|-----------|
| WhatsApp Business API | Meta + Wassenger | $30-$50 USD |
| Orquestador | n8n (self-hosted) | $0 |
| IA Conversacional | OpenAI GPT-4o mini | $20-$30 USD |
| Diseño de Flujos | Voiceflow | Gratis-$50 USD |
| Calendario | Google Calendar API | Gratis |
| Base de Datos | Airtable / Supabase | Gratis-$20 USD |
| CRM | Pipedrive / HubSpot | $15-$50 USD |

**Total:** ~$100-$200 USD/mes por agencia

### Skills Instaladas (20 total)

**Producto & Automatización:**
- client-intake-bot-pro
- voiceflow
- whatsapp-business-api
- n8n
- lead-scorer

**Marketing & Ventas:**
- proposal-writer
- follow-up-sequence-writer
- sales-pipeline-tracker
- instagram-agent
- social-media-marketing
- website-seo
- seo-optimizer

**Branding & Diseño:**
- flwr-branding-studio-kit
- brand-identity
- design-system-creation
- prompt-enhancer
- ai-image-generation-prompts

**Utilidades:**
- markdown
- send-email
- airtable-automation
- airtable-integration

---

## 📧 SISTEMA DE OUTREACH

### Agencias Priorizadas (20)
1. GESCOR Propiedades - 12 corredores - ALTA
2. Boettcher Propiedades - 8 corredores - ALTA
3. Altea Propiedades - 6 corredores - MEDIA
4. Vercetti Propiedades - 5 corredores - MEDIA
5. URBANI - 15 corredores - ALTA
6. Propiedades Yapur - 4 corredores - MEDIA
7. Propital - 3 corredores - BAJA
8. Houm - 20+ corredores - ALTA
9. HousePricing - 3 corredores - BAJA
10. KiteProp - 5 corredores - MEDIA
[... 10 más]

### Secuencia de Cold Emails
- **Día 0:** Email inicial (valor + CTA)
- **Día 3:** Follow-up corto
- **Día 7:** Valor agregado (caso de éxito)
- **Día 14:** Break-up email

### Templates disponibles
- email-inicial.txt
- followup-1.txt
- followup-2.txt
- breakup.txt

---

## 🎤 SCRIPT DE ENTREVISTA DE VALIDACIÓN

### Fase 1: Calificación (5 min)
1. Contexto del negocio (tamaño, tipo propiedades)
2. Volumen de leads por semana/canal
3. Proceso actual (dónde se pierden leads)

### Fase 2: Problema (10 min)
4. El dolor real (historias de pérdida)
5. Costo del problema (comisiones perdidas)
6. Soluciones previas intentadas

### Fase 3: Solución (10 min)
7. Reacción al concepto del chatbot
8. Preocupaciones/objeciones

### Fase 4: Precio (5 min)
9. Disposición a pagar ($199K/$399K/$799K)
10. Compromiso (piloto de 30 días)

**Criterios Go/No-Go:**
- ≥3 entrevistados muestran interés genuino
- ≥2 aceptan piloto a $399K
- Problema se repite en ≥60% de entrevistas

---

## 📊 MÉTRICAS CLAVE

### KPIs de Outreach
| Métrica | Meta |
|---------|------|
| Emails enviados/semana | 10 |
| Open rate | >40% |
| Response rate | >15% |
| Reuniones agendadas | 5 total |
| Piloto conversion rate | 40% |

### KPIs del Producto (post-piloto)
| Métrica | Meta |
|---------|------|
| Tasa de respuesta del bot | >90% |
| Leads calificados/mes | 20+ |
| Visitas agendadas automáticamente | 30% |
| Tiempo promedio primera respuesta | <2 min |
| Conversión lead → visita | 25% |

---

## 📱 MARKETING DIGITAL

### Sistema de Diseño Completo
**Estado:** Finalizado y documentado

**Identidad de Marca:**
- **Archivo:** `vynxe-brand-identity.md`
- **Logo:** Wordmark puro "vynxe" en minúscula (sin iconos, sin casas)
- **Tipografía:** Inter (Google Fonts)
- **Paleta:** Indigo #6366F1, Violeta #8B5CF6, Near Black #1F2937
- **Voz:** Directa, Útil, Humana
- **Regla clave:** Sin jerga técnica ("clientes" no "leads")

**Design Tokens:**
- **CSS:** `vynxe-design-tokens.css` — Variables CSS completas
- **Tailwind:** `vynxe-tailwind.config.js` — Configuración lista para usar
- **Figma:** `vynxe-figma-structure.md` — Estructura de páginas + wireframes

**Guía de Voz por Canal:**
- **Archivo:** `vynxe-voice-guide.md`
- Emails: 4 templates (inicial + 3 follow-ups)
- Instagram: Captions, stories, carousels
- Landing: Copy por sección
- WhatsApp: Respuestas del bot

**Prompts de Imágenes:**
- **Archivo:** `vynxe-image-prompts-branded.md`
- Logo wordmark (3 versiones)
- OG Image 1200x630
- Hero image landing
- 5 Thumbnails Reels
- 6 Iconos de features

### Landing Page (vynxe.cl)
**Estado:** Completada y lista para deploy  
**Archivo:** `vynxe-landing-inmobiliaria.html`

**SEO implementado:**
- Title: "VYNXE — Chatbots IA para Corredores de Propiedades | Chile" (58 chars)
- Meta description optimizado (155 chars)
- Open Graph tags para Facebook/LinkedIn
- Twitter Cards
- Schema.org: Organization + LocalBusiness + FAQPage
- Sitemap.xml + robots.txt

**Estructura de la landing:**
1. Hero — "Tu Asistente Virtual Inmobiliario Que Nunca Duerme"
2. Stats — 24/7, 10x leads, 0 perdidos, 3h ahorradas
3. Problema — WhatsApp explota, respondes tarde, citas se pisan
4. Solución — 6 features específicas inmobiliarias
5. Cómo funciona — 4 pasos sin técnico
6. Pricing — Starter $199K / Pro $399K / Agency $799K
7. Testimonial — Caso Pedro Gómez
8. FAQ — 5 preguntas con Schema markup
9. CTA — Demo gratuita

**Keywords target:**
- chatbot inmobiliaria chile
- automatización corredores propiedades
- WhatsApp Business inmobiliaria
- IA inmobiliaria Chile

### Instagram (@vynxe.cl)
**Estado:** Estrategia y contenido creado (2 versiones)

**Perfil optimizado:**
- Username: @vynxe.cl
- Nombre: VYNXE | Asistente Virtual para Inmobiliarias
- Bio: 🤖 Tu asistente responde WhatsApp por ti / 📍 Especialistas en corredores de Chile / ⚡ Atiende clientes 24/7

**5 Reels creados (Versión Simple - sin tecnicismos):**
1. **"El WhatsApp te Quita el Sueño"** — Storytelling problema/solución
2. **"Lo que las Grandes Agencias No Quieren que Sepas"** — Revelación valor
3. **"Antes y Después — Un Caso Real"** — Prueba social con números
4. **"Cómo Funciona — En 3 Pasos Simples"** — Tutorial accesible
5. **"Mitos vs Realidad"** — Desmintiendo objeciones

**Diccionario lenguaje simple:**
- ❌ "Leads" → ✅ "Clientes potenciales"
- ❌ "Chatbot" → ✅ "Asistente virtual"
- ❌ "Calificación" → ✅ "Separa a los que quieren comprar"

**Calendario semanal:**
- 3 Reels (Lun, Mié, Jue)
- 2 Carousels (Mar, Sáb)
- 7 Stories diarios

**Archivos:**
- `vynxe-instagram-simple.md` — Versión accesible (recomendada)
- `vynxe-instagram-contenido.md` — Versión técnica (backup)

---

## 📁 ARCHIVOS DEL PROYECTO (Índice Completo)

### Dashboard Maestro
- `VINXE-DASHBOARD.md` - Índice central de todo el proyecto

### Producto
- `propuesta-mvp-chatbot-corredores.md` - Propuesta comercial
- `mvp-chatbot-corredores.md` - Flujo de conversación
- `validation-kit.md` - Kit completo de validación

### Outreach
- `cold-email-workflow.md` - Sistema de outreach
- `cold-email-system/agencias.csv` - 10 agencias priorizadas
- `cold-email-system/templates/` - 4 email templates
- `cold-email-system/airtable/` - Scripts de integración

### Marketing Digital
- `vynxe-landing-inmobiliaria.html` - Landing page (SEO optimizada)
- `vynxe-sitemap.xml` + `vynxe-robots.txt` - SEO técnico
- `vynxe-landing-README.md` - Guía de la landing
- `vynxe-instagram-simple.md` - Contenido Instagram (lenguaje simple)
- `vynxe-instagram-contenido.md` - Contenido Instagram (técnico)

### Identidad de Marca & Diseño
- `vynxe-brand-identity.md` - Guía de identidad completa
- `vynxe-design-tokens.css` - Tokens CSS
- `vynxe-tailwind.config.js` - Configuración Tailwind
- `vynxe-figma-structure.md` - Estructura Figma
- `vynxe-voice-guide.md` - Guía de voz por canal
- `vynxe-image-prompts-branded.md` - Prompts de imágenes

### Knowledge Base
- `vynxe-agent.md` - Este archivo
- `vynxe-agent-quickref.md` - Quick reference card

### Configuraciones
- Email SMTP: disenoxplain@gmail.com
- Airtable: https://airtable.com/apptwVpujukA0sS1U
- Variables: ~/.openclaw/openclaw.json

---

## 🎯 PRÓXIMOS PASOS

### Semana 1-2: Validación
1. Crear base en Airtable e importar agencias
2. Enviar primer lote de cold emails (5 agencias ALTA prioridad)
3. Completar 5 entrevistas de validación
4. Documentar resultados

### Decisión Go/No-Go
**GO si:**
- ≥3 entrevistados interés genuino
- ≥2 aceptan piloto a $399K

**NO-GO si:**
- <2 entrevistados califican HOT
- Nadie acepta pagar >$200K/mes

### Semana 3-4 (si GO)
1. Construir MVP con 2 agencias piloto
2. Testing con tráfico real
3. Ajustes según feedback
4. Preparar lanzamiento early-bird

---

## 💡 INSIGHTS CLAVE

### Corrección Importante
El flujo de conversación original tenía un error crítico: el bot hacía preguntas genéricas cuando el lead ya había visto una propiedad específica. Esto perdía el contexto de interés ya declarado.

**Solución:** Detectar el contexto de entrada inmediatamente y bifurcar:
- Si viene de propiedad específica → preguntar cuál directamente
- Si es consulta general → hacer cualificación progresiva

### Aprendizajes del Usuario
- Prefiere que actúe directamente sin pedir permiso constante
- Quiere sistemas completos y funcionales, no solo conceptos
- Valora integración con herramientas existentes
- Necesita documentación clara para ejecutar independientemente

### Diferenciadores Competitivos
1. Especialización inmobiliaria (no chatbot genérico)
2. Flujo contextual inteligente (detecta propiedad específica)
3. Calificación basada en datos (matriz FIT/INTENT/ENGAGEMENT)
4. Stack moderno y escalable (n8n + OpenAI + WhatsApp)

---

## 📞 CONTACTOS Y RECURSOS

### Email configurado
- **Desde:** disenoxplain@gmail.com
- **SMTP:** smtp.gmail.com:465 (SSL)
- **Password:** App Password configurado

### Herramientas recomendadas
- **CRM/Tracker:** Airtable (gratis hasta 1,200 registros)
- **Email outreach:** Scripts Python + Gmail (gratis)
- **Calendario:** Calendly (gratis básico)
- **Notas:** Notion / Obsidian

---

## 🚨 REGLAS ANTI-SPAM

1. **Rate limiting:** Máximo 20 emails/hora, 50/día
2. **Personalización:** Mínimo 3 variables por email
3. **Unsubscribe:** Incluir opción en follow-ups
4. **Horario:** Solo 9 AM - 6 PM hora Chile
5. **Lista limpia:** Verificar emails antes de enviar
6. **No re-enviar:** Respetar "no interesado"

---

## 📅 HISTORIAL DE SESIONES

- **2026-03-31:** Configuración OpenClaw, Mission Control reparado
- **2026-04-01:** Investigación de mercado completada, 20 agencias identificadas
- **2026-04-02 AM:** Sistema completo (propuesta, flujos, outreach, Airtable)
- **2026-04-02 PM:** Landing page SEO, Instagram contenido, Dashboard Airtable
- **2026-04-02 Tarde:** Sistema de diseño completo (brand identity, CSS tokens, Tailwind, Figma, voice guide)

**Último backup:** Git commit `2f4bb53` - Design system + all project assets

**Total archivos creados:** 15+
**Skills instaladas:** 20
**Estado:** Pre-validación, listo para enviar emails

---

*Knowledge Base creado para VINXE AGENT*  
*Proyecto: Agencia de Automatizaciones IA para Corredores*  
*Fecha: 2 de abril de 2026*
