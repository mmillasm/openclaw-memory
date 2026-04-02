#!/bin/bash

# Script para iniciar servidor web de lead magnets
# Uso: ./start-server.sh [puerto]

PORT=${1:-8080}

echo "🚀 Iniciando servidor de Lead Magnets Vinxe..."
echo ""
echo "📁 Directorio: /home/ubuntu/.openclaw/workspace/public"
echo "🌐 Puerto: $PORT"
echo "🔗 URL: http://100.91.92.50:$PORT"
echo ""
echo "Presiona Ctrl+C para detener"
echo ""

cd /home/ubuntu/.openclaw/workspace/public
python3 -m http.server $PORT
