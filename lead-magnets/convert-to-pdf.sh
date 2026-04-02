#!/bin/bash

# Script para convertir Lead Magnets de Markdown a PDF
# Uso: ./convert-to-pdf.sh

set -e

echo "🚀 Convirtiendo Lead Magnets a PDF..."

# Directorio base
BASEDIR="/home/ubuntu/.openclaw/workspace/lead-magnets"
cd "$BASEDIR"

# Crear directorio de salida
mkdir -p pdfs

# Función para convertir un archivo
convert_file() {
    local input_file=$1
    local title=$2
    local subtitle=$3
    local description=$4
    local icon=$5
    local output_file=$6
    
    echo "📄 Convirtiendo: $input_file → $output_file"
    
    # Crear HTML temporal con metadatos
    pandoc "$input_file" \
        --template=template.html \
        --variable=title:"$title" \
        --variable=subtitle:"$subtitle" \
        --variable=description:"$description" \
        --variable=icon:"$icon" \
        -f markdown \
        -t html \
        -o "pdfs/temp_${output_file%.pdf}.html"
    
    # Convertir HTML a PDF
    wkhtmltopdf \
        --page-size A4 \
        --margin-top 0 \
        --margin-bottom 0 \
        --margin-left 0 \
        --margin-right 0 \
        --enable-local-file-access \
        --encoding UTF-8 \
        "pdfs/temp_${output_file%.pdf}.html" \
        "pdfs/$output_file"
    
    # Limpiar HTML temporal
    rm "pdfs/temp_${output_file%.pdf}.html"
    
    echo "✅ Listo: pdfs/$output_file"
}

# Convertir Checklist
convert_file \
    "vinxe-checklist-dejando-pasar-clientes.md" \
    "¿Tu Agencia Está Dejando Pasar Clientes?" \
    "Guía de auto-evaluación para corredores de propiedades" \
    "Descubre en 5 minutos cuántos clientes potenciales estás perdiendo sin darte cuenta. Responde 15 preguntas simples y recibe recomendaciones personalizadas." \
    "📋" \
    "vinxe-checklist.pdf"

# Convertir Calculadora
convert_file \
    "vinxe-calculadora-dinero-perdido.md" \
    "¿Cuánto Dinero Dejas de Ganar?" \
    "Descubre cuántas ventas se te escapan por no responder a tiempo" \
    "Responde 6 preguntas simples y calcula cuánto dinero estás dejando en la mesa cada mes. Incluye proyección anual y potencial de recuperación." \
    "🧮" \
    "vinxe-calculadora.pdf"

# Convertir Guía
convert_file \
    "vinxe-guia-atender-clientes-rapido.md" \
    "Cómo Atender Clientes Rápido Sin Estar Pendiente del Celular" \
    "Estrategias probadas por corredores de propiedades en Chile" \
    "Aprende a organizar tu atención al cliente para que ningún mensaje quede sin respuesta. Sistema práctico en 3 pasos con ejemplos reales." \
    "📘" \
    "vinxe-guia.pdf"

# Convertir Templates
convert_file \
    "vinxe-10-mensajes-whatsapp.md" \
    "10 Mensajes Listos para WhatsApp de Inmobiliaria" \
    "Copia, pega, personaliza. Ahorra horas cada semana." \
    "10 templates de mensajes de WhatsApp listos para usar. Desde la primera respuesta hasta el cierre de venta. Incluye consejos de personalización." \
    "💬" \
    "vinxe-templates-whatsapp.pdf"

echo ""
echo "🎉 ¡Conversión completada!"
echo ""
echo "📁 PDFs generados en: $BASEDIR/pdfs/"
ls -lh pdfs/
