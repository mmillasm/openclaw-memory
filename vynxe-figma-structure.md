# 🎨 VINXE — ESTRUCTURA FIGMA PARA MOCKUPS

> Guía de organización y componentes para diseñar la landing page en Figma

---

## 📁 ESTRUCTURA DE PÁGINAS EN FIGMA

```
📦 VINXE - Website Design
├── 📄 Cover
├── 🎨 Design System
│   ├── 🎯 Colors
│   ├── 🔤 Typography
│   ├── 🧩 Components
│   └── 🖼️ Assets
├── 📱 Mobile
│   ├── 🏠 Home
│   ├── ℹ️ About
│   ├── 💰 Pricing
│   └── ✅ Confirmation
├── 💻 Desktop
│   ├── 🏠 Home
│   ├── ℹ️ About
│   ├── 💰 Pricing
│   └── ✅ Confirmation
├── 🎬 Social Media
│   ├── 📱 Instagram Posts
│   └── 🎥 Reel Thumbnails
└── 🖼️ Marketing
    ├── 📧 Email Templates
    └── 📄 PDF Proposals
```

---

## 🎨 DESIGN SYSTEM EN FIGMA

### 1. COLORES (Crear como Styles)

**Brand Colors:**
```
🟣 Indigo 500 (Primary): #6366F1
🟣 Indigo 400: #818CF8
🟣 Indigo 600: #4F46E5

🟪 Violet 500: #8B5CF6
🟪 Violet 400: #A78BFA

⚫ Neutral 900: #1F2937
⚫ Neutral 700: #374151
⚫ Neutral 500: #6B7280
⚫ Neutral 300: #D1D5DB
⚫ Neutral 100: #F3F4F6
⚪ Neutral 50: #FAFAFA

🟢 Success: #10B981
🟡 Warning: #F59E0B
🔴 Error: #EF4444
🔵 Info: #3B82F6
```

**Gradient Styles:**
```
▶️ Primary Gradient: 135° from Indigo to Violet
▶️ Hero Gradient: 135° Indigo → Violet → Indigo Dark
▶️ Subtle Gradient: 180° White to Gray-100
```

---

### 2. TIPOGRAFÍA (Crear como Text Styles)

**Font Family:** Inter (Google Fonts)

**Text Styles:**

| Nombre | Size | Weight | Line Height | Letter Spacing |
|--------|------|--------|-------------|----------------|
| 📝 H1 Desktop | 48px | Bold (700) | 1.1 | -0.02em |
| 📝 H1 Mobile | 36px | Bold (700) | 1.1 | -0.02em |
| 📝 H2 Desktop | 36px | SemiBold (600) | 1.25 | -0.02em |
| 📝 H2 Mobile | 30px | SemiBold (600) | 1.25 | -0.02em |
| 📝 H3 | 24px | SemiBold (600) | 1.3 | 0 |
| 📝 H4 | 20px | SemiBold (600) | 1.4 | 0 |
| 📝 Body Large | 18px | Regular (400) | 1.625 | 0 |
| 📝 Body | 16px | Regular (400) | 1.625 | 0 |
| 📝 Body Small | 14px | Regular (400) | 1.5 | 0 |
| 📝 Caption | 12px | SemiBold (600) | 1.4 | 0.1em |
| 📝 Button | 16px | SemiBold (600) | 1 | 0 |

---

### 3. COMPONENTES (Crear como Components)

#### 🔘 Buttons

**Primary Button:**
- Height: 48px
- Padding: 12px 24px
- Background: Indigo 500
- Text: White, 16px, SemiBold
- Border Radius: 8px
- Shadow: Shadow MD
- Hover: Transform translateY(-2px), Shadow Glow

**Secondary Button:**
- Height: 48px
- Padding: 12px 24px
- Background: Transparent
- Border: 2px Indigo 500
- Text: Indigo 500, 16px, SemiBold
- Border Radius: 8px
- Hover: Background Indigo 500, Text White

**Ghost Button:**
- Height: auto
- Padding: 8px 0
- Background: Transparent
- Text: Indigo 500, 16px, SemiBold
- Underline: 2px offset

---

#### 🎴 Cards

**Feature Card:**
- Background: White
- Border Radius: 12px
- Shadow: Shadow MD
- Padding: 24px
- Width: Flexible (min 280px)

**Pricing Card:**
- Background: White
- Border Radius: 16px
- Border: 2px Indigo 500 (popular)
- Shadow: Shadow LG
- Padding: 32px
- Width: 320px

**Testimonial Card:**
- Background: White
- Border Radius: 20px
- Shadow: Shadow XL
- Padding: 48px
- Max Width: 600px

---

#### 📋 Form Elements

**Input Field:**
- Height: 48px
- Padding: 12px 16px
- Border: 1px Gray-300
- Border Radius: 8px
- Text: 16px, Neutral 900
- Placeholder: Gray-400
- Focus: Border Indigo 500, Ring Indigo 100

**Textarea:**
- Min Height: 120px
- (Same as input)

**Select/Dropdown:**
- Same as input
- Chevron icon on right

---

#### 🏷️ Badges

**Success Badge:**
- Padding: 4px 12px
- Background: Success with 10% opacity
- Text: Success color, 12px, SemiBold
- Border Radius: Full

**Priority Badge:**
- High: Red background, white text
- Medium: Yellow background, dark text
- Low: Green background, dark text

---

### 4. EFFECTS (Crear como Styles)

**Shadows:**
```
📦 Shadow SM: 0 1px 2px rgba(31,41,55,0.05)
📦 Shadow MD: 0 4px 6px -1px rgba(31,41,55,0.1)
📦 Shadow LG: 0 10px 15px -3px rgba(31,41,55,0.1)
📦 Shadow XL: 0 20px 25px -5px rgba(31,41,55,0.1)
📦 Shadow Glow: 0 0 40px rgba(99,102,241,0.3)
```

---

## 📱 ESTRUCTURA DE PÁGINAS

### 🏠 HOME PAGE (Desktop)

#### Section 1: Hero (100vh o min-height 700px)
```
┌─────────────────────────────────────────────────────────────┐
│ [Header: Logo left | Nav center | CTA Button right]         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ¿Hasta qué hora respondiste                                │
│  mensajes hoy?                                              │
│                                                             │
│  Tu asistente virtual atiende clientes 24/7                 │
│  mientras tú cierras ventas.                                │
│                                                             │
│  [Cotiza gratis →]  [Ver cómo funciona]                     │
│                                                             │
│  [Chat Preview Component - Right Side]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Indigo gradient
- Text: White
- H1: 48px, Bold
- Body: 18px, Regular
- Two buttons side by side
- Chat preview on right (40% width)

---

#### Section 2: Stats Bar (Dark background)
```
┌─────────────────────────────────────────────────────────────┐
│  [24/7]        [10x]         [0]           [3h]            │
│  Atención      Más clientes   Clientes     Ahorradas        │
│  continua      atendidos      perdidos     por día          │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Neutral 900
- Numbers: 48px, Bold, Success Green
- Labels: 14px, Regular, White 70%
- Grid: 4 columns equal

---

#### Section 3: Problem
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         ¿Te Suena Familiar?                                 │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ 📱       │  │ ⏰       │  │ 😴       │                  │
│  │ WhatsApp │  │ Llegas   │  │ Visitas  │                  │
│  │ Explota  │  │ Tarde    │  │ Se Pisan │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White
- Cards: 3 columns
- Icon: 48px
- Title: H4
- Description: Body Small

---

#### Section 4: Solution (Gradient background)
```
┌─────────────────────────────────────────────────────────────┐
│  [Indigo Gradient Background]                               │
│                                                             │
│  VYNXE Es Tu Asistente 24/7                                 │
│                                                             │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│  │ 🤖     │ │ 🎯     │ │ 📅     │ │ 📊     │ │ 🔔     │   │
│  │ Card 1 │ │ Card 2 │ │ Card 3 │ │ Card 4 │ │ Card 5 │   │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Primary Gradient
- Text: White
- Cards: Semi-transparent white (10%)
- 5 cards in grid (3 top, 2 bottom centered)

---

#### Section 5: How It Works
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  De Cero a Asistente en 4 Pasos                             │
│                                                             │
│  [1] ──── [2] ──── [3] ──── [4]                            │
│  Connec.  Config.  Integ.   Listo                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White
- Step circles: 60px, Indigo background, White number
- Connecting line: 2px, Indigo
- Title: H4
- Description: Body Small

---

#### Section 6: Pricing
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Planes para Cada Tamaño de Inmobiliaria                    │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ STARTER  │  │   PRO    │  │ AGENCY   │                  │
│  │ $199K    │  │ $399K ⭐ │  │ $799K    │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Gray-100
- 3 cards side by side
- PRO card: Scale 1.05, Border Indigo
- Badge "MÁS POPULAR" on PRO

---

#### Section 7: Testimonial
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────────────────────────────────────────┐               │
│  │                                            │               │
│  │  "Pedro ahora atiende 10x más clientes    │               │
│  │   y cierra el negocio a las 8pm"          │               │
│  │                                            │               │
│  │  Pedro Gómez                               │               │
│  │  Inmobiliaria Gómez & Asociados            │               │
│  └──────────────────────────────────────────┘               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White
- Card: Centered, max-width 800px
- Quote: Body Large, Italic
- Author: Body Small, SemiBold

---

#### Section 8: FAQ
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Preguntas Frecuentes                                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ¿Cuánto cuesta?                              [+]    │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ ¿Puede agendar en mi calendario?             [+]    │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ ¿Cuánto tiempo toma?                         [+]    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Gray-100
- Accordion items
- Border radius: 12px
- Padding: 24px

---

#### Section 9: CTA
```
┌─────────────────────────────────────────────────────────────┐
│  [Dark Background]                                          │
│                                                             │
│  ¿Listo para Automatizar Tu Inmobiliaria?                   │
│                                                             │
│  Agendemos 15 minutos. Sin compromiso.                      │
│                                                             │
│  [Agendar Demo Gratis →]                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Neutral 900
- Text: White
- Button: Success Green background

---

#### Section 10: Footer
```
┌─────────────────────────────────────────────────────────────┐
│  [Dark Background]                                          │
│                                                             │
│  [vynxe]                                                    │
│  Especialistas en automatización para inmobiliarias         │
│                                                             │
│  Servicios    Empresa    Legal                              │
│  - Item 1     - Item 1   - Privacidad                       │
│  - Item 2     - Item 2   - Términos                         │
│                                                             │
│  © 2026 VYNXE. Todos los derechos reservados.               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Neutral 900
- Text: White 70%
- Links: White, hover White 100%
- 4 columns

---

## 📱 MOBILE VERSIONS

### Reglas de Adaptación:

1. **Typography Scale:**
   - H1: 48px → 36px
   - H2: 36px → 30px
   - Body: 18px → 16px

2. **Grid:**
   - 4 columns → 2 columns or 1 column
   - Cards stack vertically

3. **Spacing:**
   - Section padding: 80px → 48px
   - Container padding: 48px → 16px

4. **Navigation:**
   - Horizontal nav → Hamburger menu

5. **Hero:**
   - Side-by-side → Stacked (text first, then image)

---

## 📏 GRIDS Y LAYOUTS

### Desktop (1200px)
```
Margin: 48px (left/right)
Content: 1104px
Columns: 12
Gutter: 24px
```

### Tablet (768px)
```
Margin: 24px
Content: 720px
Columns: 8
Gutter: 16px
```

### Mobile (375px)
```
Margin: 16px
Content: 343px
Columns: 4
Gutter: 16px
```

---

## 🧩 COMPONENTES ESPECÍFICOS

### Chat Preview Component
```
┌──────────────────────────────────┐
│ ● vynxe                    9:41  │
├──────────────────────────────────┤
│                                  │
│  ┌────────────────────────┐      │
│  │ Hola, ¿tienen          │      │
│  │ disponible?            │      │
│  └────────────────────────┘      │
│                                  │
│           ┌──────────────────┐   │
│           │ ¡Hola! Sí, ¿busca │   │
│           │ comprar o arrienda?│   │
│           └──────────────────┘   │
│                                  │
└──────────────────────────────────┘
```

**Specs:**
- iPhone frame or no frame
- WhatsApp-style bubbles
- Gray (client) and Indigo gradient (business)
- Rounded corners: 12px

---

### Stats Component
```
┌────────────────┐
│     24/7       │
│  ─────────     │
│   Atención     │
│   continua     │
└────────────────┘
```

**Specs:**
- Number: 48px, Bold, Success Green
- Line: 40px width, 2px height, White 30%
- Label: 14px, Regular, White 70%

---

### Pricing Card
```
┌────────────────────────────────┐
│                                │
│           Starter              │
│        Para independientes     │
│                                │
│         $199.000               │
│           /mes                 │
│                                │
│  ✓ 1-2 corredores             │
│  ✓ WhatsApp básico            │
│  ✓ Agendamiento               │
│                                │
│    [Elegir Starter]            │
│                                │
└────────────────────────────────┘
```

**Specs:**
- Width: 320px
- Padding: 32px
- Border radius: 16px
- Shadow: Shadow LG
- Checkmarks: Success Green

---

## 📐 ANOTACIONES EN FIGMA

### Cover Page
- Título: "VINXE - Website Design"
- Subtítulo: "Agencia de automatización para inmobiliarias"
- Fecha: [Actual]
- Versión: v1.0

### Design System Page
Agregar notas:
```
📝 NOTAS DE DISEÑO:

- Logo: Wordmark puro "vynxe" en minúscula
- Tipografía: Inter (Google Fonts)
- Colores primarios: Indigo #6366F1, Violeta #8B5CF6
- NO usar iconos de casas
- Fotografía: Auténtica, no stock corporativo genérico
- Voz: Directa, Útil, Humana
```

---

## 🚀 CHECKLIST FIGMA

### Al crear la estructura:
- [ ] Cover page creada
- [ ] Design System page con colores, tipografía, componentes
- [ ] Desktop Home page completa
- [ ] Mobile Home page completa
- [ ] Componentes organizados y nombrados
- [ ] Styles aplicados consistentemente
- [ ] Prototipo básico conectado
- [ ] Assets exportables marcados

### Antes de compartir:
- [ ] Todos los textos son "vynxe" (minúscula)
- [ ] No hay iconos de casas
- [ ] Colores son los de la paleta
- [ ] Tipografía es Inter
- [ ] Espaciado es consistente (8px grid)
- [ ] Responsive versions creadas

---

*Estructura Figma para VYNXE*
*Wordmark puro — Inter — Índigo/Violeta*
*Fecha: 2 de abril de 2026*
