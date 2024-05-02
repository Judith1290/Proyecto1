// Obtener la funsion el nodo del canvas y el contexto de dibujo
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const canvasWidth = 985; // Ancho del canvas en píxeles
const canvasHeight = 200; // Alto del canvas en píxeles


// Establecer el ancho y alto del canvas
const w = canvas.width = canvasWidth;
const h = canvas.height = canvasHeight ;

// Dibujar un rectángulo negro del mismo ancho y alto que el canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

// Calcular el número de columnas basado en el ancho del canvas
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
    // Dibujar un rectángulo semitransparente negro encima del dibujo previo
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    // Establecer el color en verde y la fuente en monoespaciada de 15 puntos en el contexto de dibujo
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    // Para cada columna, poner un carácter aleatorio al final
    ypos.forEach((y, ind) => {
        // Generar un carácter aleatorio
        const text = String.fromCharCode(Math.random() * 128);

        // Coordenada x de la columna, la coordenada y ya está dada
        const x = ind * 20;
        // Renderizar el carácter en (x, y)
        ctx.fillText(text, x, y);

        // Reiniciar aleatoriamente el final de la columna si tiene al menos 100px de altura
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        // De lo contrario, solo mover la coordenada y para la columna 20px hacia abajo,
        else ypos[ind] = y + 20;
    });
}

// Renderizar la animación a 20 FPS.
setInterval(matrix, 50);
