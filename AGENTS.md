# Inteligencia Natural

Blog estático de cristiantomo (Bogotá). HTML + CSS + JS. Sin build ni framework.

Tesis: lo humano que un modelo no puede entrenar (juicio, cuerpo, error, agencia). Los modelos agrandan saber y ejecución; el uso, bueno o malo, sigue siendo de la persona.

## Archivos

- `index.html` — portada e índice. Marca: Bogotá. Kicker: Lo que no se entrena. LinkedIn y X van junto al byline, no en el header.
- Perfiles: [LinkedIn](https://www.linkedin.com/in/cristiantomo/) · [X](https://x.com/cristiantomo). Usar estas URLs en botones nuevos.
- `articulo.html` — plantilla. No está en el índice; no publicarla.
- `agencia.html` — Capítulo I, *Saber no basta*.
- `styles.css`, `theme.js` — estilo (papel/tinta, Anton + Libre Baskerville + Special Elite). El tema por defecto es oscuro; el botón lo cambia y se guarda en localStorage.

## Voz y forma de cada entrada

Español, tono de manuscrito, no de tech blog. Abrir con un experimento mental. Luego la tesis humana. Cerrar en lo que el modelo no entrega. Título literario, no corporativo. No nombrar productos (Grok, etc.) salvo que Cristian lo pida.

## Añadir una entrada

1. Copiar `articulo.html` a un archivo con slug propio (`atencion.html`, etc.).
2. Completar `<title>`, capítulo (II, III…), `h1`, fecha, resumen y cuerpo.
3. En `index.html`, añadir un `.chapter` que apunte a ese archivo (número, título, extracto, `fecha · etiqueta`).
4. Si hay capítulo siguiente, descomentar `.next` en la entrada anterior.
5. Commit y push a `main`.

## Git

- Remoto: `git@github.com:cristiantomo/inteligencia-natural.git`
- Rama: `main`
- No subir `.DS_Store`
- Tras cambios: `git add . && git commit -m "…" && git push`

Páginas públicas (si GitHub Pages está activo, branch `main`, `/root`): https://cristiantomo.github.io/inteligencia-natural/
