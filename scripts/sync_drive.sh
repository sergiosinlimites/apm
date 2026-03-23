#!/bin/bash
RCLONE="$HOME/.local/bin/rclone"
REMOTE="unal:"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOCAL="$SCRIPT_DIR/../archivos-drive/"

if [ ! -f "$RCLONE" ]; then
    echo "Error: rclone no encontrado en $RCLONE"
    exit 1
fi

case "${1:-pull}" in
    pull)
        echo "Descargando de Google Drive → local (sin borrar archivos locales)..."
        $RCLONE copy "$REMOTE" "$LOCAL" --progress --exclude "extracted/**" --exclude ".rclone*"
        ;;
    push)
        echo "Subiendo de local → Google Drive (sin borrar archivos remotos)..."
        $RCLONE copy "$LOCAL" "$REMOTE" --progress --exclude "extracted/**" --exclude ".rclone*"
        ;;
    list)
        echo "Contenido de Google Drive:"
        $RCLONE ls "$REMOTE" --max-depth 2
        ;;
    *)
        echo "Uso: $0 [pull|push|list]"
        echo "  pull  - Descargar de Drive a local (default)"
        echo "  push  - Subir de local a Drive"
        echo "  list  - Listar contenido de Drive"
        exit 1
        ;;
esac

echo "Completado: $(date)"
