# Pilates Studio — Jimena Monzon

Sitio web profesional para el estudio de pilates de Jimena Monzon, Corrientes.

## Tecnologías

- HTML5 semántico
- SCSS modular (compilado a CSS)
- Bootstrap 5.3
- Google Fonts: Cormorant Garamond + DM Sans

## Estructura del proyecto

```
pilates-v2/
├── index.html
├── pages/
│   ├── clases.html
│   ├── sobreMi.html
│   ├── contacto.html
│   └── turnos.html
├── scss/
│   ├── main.scss
│   └── partial/
│       ├── _variables.scss
│       ├── _body.scss
│       ├── _navbar.scss
│       ├── _header.scss
│       ├── _clases.scss
│       ├── _sobreMi.scss
│       ├── _contacto.scss
│       ├── _turno.scss
│       └── _footer.scss
├── css/
│   └── styles.css          ← compilado, no editar
├── img/
│   ├── hero.jpg
│   ├── reformer.jpg
│   ├── mat.jpg
│   ├── stretching.jpg
│   ├── jimena.jpg
│   └── whatsapp.png
└── README.md
```

## Cómo compilar el SCSS

```bash
# Una vez
sass scss/main.scss css/styles.css

# Con watch (auto-compilar al guardar)
sass scss/main.scss css/styles.css --watch
```

## Deploy en GitHub Pages

1. Subir el repositorio a GitHub
2. Ir a **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. El sitio quedará en `https://tuusuario.github.io/pilates-v2/`

## Imágenes necesarias

Colocar en la carpeta `/img/`:

| Archivo | Descripción | Resolución sugerida |
|---|---|---|
| `hero.jpg` | Foto principal del hero | 1920×1080px |
| `reformer.jpg` | Clase de reformer | 800×600px |
| `mat.jpg` | Clase de mat | 800×600px |
| `stretching.jpg` | Clase de stretching | 800×600px |
| `jimena.jpg` | Foto de Jimena | 600×800px |
| `whatsapp.png` | Ícono WhatsApp | 55×55px |

## Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--verde-bosque` | `#3d5a47` | Color principal, botones |
| `--nude` | `#c8b59e` | Acento, hover |
| `--marfil` | `#f2ede6` | Fondo general |
| `--oscuro` | `#1a1a1a` | Textos, footer dark |
