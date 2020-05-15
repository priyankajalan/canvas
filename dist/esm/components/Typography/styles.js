export const VariantStylesMap = {
  display4: `
        line-height: 1.16;
        letter-spacing: -0.015em;
        font-size: 6rem;
    `,
  display3: `
        font-size: 3.75rem;
        line-height: 1.2;
        letter-spacing: -0.008em;
    `,
  display2: `
        font-weight:400;
        font-size: 3rem;
        line-height: 1.167;
        letter-spacing: 0em;
    `,
  display1: `
        font-size: 2.125rem;
        font-weight:400;
        line-height: 1.235;
        letter-spacing: 0.007358em;
    `,
  subtitle: `
        font-size: 1.5rem;
        line-height: 1.75;
        letter-spacing: 0.00938em;
    `,
  body: `
        font-size: 1.25rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
    `
};
export const fontWeightStylesMap = {
  thin: `font-weight: 300;`,
  normal: `font-weight: 500;`,
  bold: `font-weight: 600;`
};
export const effectStylesMap = {
  typewritter: `
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        white-space: nowrap;   /* Keeps the content on a single line */ 
        letter-spacing: .15em; 
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;

        /* The typing effect */
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        /* The typewriter cursor effect */
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: orange; }
        }
    `
};
//# sourceMappingURL=styles.js.map