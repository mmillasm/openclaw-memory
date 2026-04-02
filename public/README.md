# 🌐 Servidor de Archivos Vinxe

## Estructura de Archivos para Descarga

```
/home/ubuntu/.openclaw/workspace/public/
├── index.html          # Landing page de captura
├── gracias.html        # Página de agradecimiento post-descarga
├── descargas/          # PDFs listos para descargar
│   ├── vinxe-checklist.pdf
│   ├── vinxe-calculadora.pdf
│   ├── vinxe-guia.pdf
│   └── vinxe-templates-whatsapp.pdf
└── assets/             # Imágenes, CSS, JS
    ├── css/
    ├── js/
    └── images/
```

## Configuración del Servidor

### Opción 1: Python SimpleHTTPServer (Testing)
```bash
cd /home/ubuntu/.openclaw/workspace/public
python3 -m http.server 8080
```

Acceso: http://100.91.92.50:8080/

### Opción 2: Nginx (Producción)
Configurar en `/etc/nginx/sites-available/vinxe-leads`

### Opción 3: Subir a servicio de hosting
- Netlify (gratis)
- Vercel (gratis)
- GitHub Pages (gratis)
- Cloudflare Pages (gratis)

## URLs de Descarga (una vez deployado)

| Recurso | URL |
|---------|-----|
| Checklist | https://vynxe.cl/recursos/checklist |
| Calculadora | https://vynxe.cl/recursos/calculadora |
| Guía | https://vynxe.cl/recursos/guia |
| Templates WhatsApp | https://vynxe.cl/recursos/templates |

## Base de Datos de Leads

Formato sugerido para almacenar emails capturados:

```json
{
  "leads": [
    {
      "id": "uuid",
      "email": "corredor@ejemplo.cl",
      "nombre": "Juan Pérez",
      "recurso_descargado": "checklist",
      "fecha_captura": "2026-04-02T23:15:00Z",
      "ip": "xxx.xxx.xxx.xxx",
      "utm_source": "instagram",
      "utm_medium": "bio"
    }
  ]
}
```

Almacenamiento:
- Airtable (recomendado, ya configurado)
- Google Sheets
- Base de datos SQLite local
- Email notification

## Integración con Airtable

Los emails capturados se envían automáticamente a la tabla "Leads" en Airtable.

Endpoint: POST a Airtable API
Tabla: "Leads"
Campos: Email, Nombre, Recurso, Fecha, Origen

## Seguridad

- Rate limiting: Máximo 3 descargas por IP por hora
- Validación de email: Verificar formato válido
- Spam protection: Honeypot field (campo oculto)
- HTTPS: Certificado SSL obligatorio

## Analytics

Tracking de eventos:
- Pageview de landing
- Form submission
- PDF download
- Time on page

Herramientas:
- Google Analytics 4
- Plausible (privacy-friendly)
- Airtable native analytics
