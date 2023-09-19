import viteLogo from "/vite.svg"
import reactLogo from "@/assets/react.svg"
import swcLogo from "@/assets/swc.svg"
import tsLogo from "@/assets/ts.svg"
import prettierLogo from "@/assets/prettier.png"
import modernNormalizeLogo from "@/assets/modern-normalize.png"
import eslintLogo from "@/assets/eslint.png"
import huskyLogo from "@/assets/dog.svg"
import gigachad from "@/assets/gigachad.png"
import styles from "./Demo.module.css"
import githubLogo from "@/assets/github.png"

function Demo() {
  return (
    <>
      <div className={styles.gigachad}>
        <img src={gigachad} alt="10x Gigachad" title="10x Gigachad" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.logo_container}>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img
              src={viteLogo}
              className={`${styles.logo} ${styles.vite}`}
              alt="Vite logo"
              title="Vite"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className={styles.spin}
          >
            <img
              src={reactLogo}
              className={`${styles.logo} ${styles.react}`}
              alt="React logo"
              title="React"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tsLogo}
              className={`${styles.logo} ${styles.ts}`}
              alt="TypeScript logo"
              title="TypeScript"
            />
          </a>
          <a href="https://swc.rs/" target="_blank" rel="noreferrer">
            <img
              src={swcLogo}
              className={`${styles.logo} ${styles.swc}`}
              alt="SWC logo"
              title="SWC - Rust-based platform for the Web"
            />
          </a>
        </div>
        <div className={styles.logo_container}>
          <a href="https://eslint.org/" target="_blank" rel="noreferrer">
            <img
              src={eslintLogo}
              className={`${styles.logo} ${styles.eslint}`}
              alt="Eslint logo"
              title="Eslint"
            />
          </a>
          <a href="https://prettier.io/" target="_blank" rel="noreferrer">
            <img
              src={prettierLogo}
              className={`${styles.logo} ${styles.prettier}`}
              alt="Prettier logo"
              title="Prettier"
            />
          </a>
          <a
            href="https://github.com/sindresorhus/modern-normalize"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={modernNormalizeLogo}
              className={`${styles.logo} ${styles.modern_normalize}`}
              alt="Modern-Normalize logo"
              title="Modern-Normalize CSS"
            />
          </a>
          <a
            href="https://typicode.github.io/husky/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={huskyLogo}
              className={`${styles.logo} ${styles.husky}`}
              alt="Husky logo"
              title="Husky"
            />
          </a>
        </div>
        <h1 className={styles.title}>Vite + React</h1>
        <p>
          Powered by{" "}
          <a href="https://swc.rs/" target="_blank" rel="noreferrer">
            <code>SWC</code>
          </a>
        </p>
        <br />
        <p className={styles.instruction}>This template comes with...</p>
        <br />
        <div className={styles.card}>
          <p>
            -{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <code>TypeScript</code>
            </a>{" "}
            support
          </p>
          <p>
            - A complete{" "}
            <a href="https://eslint.org/" target="_blank" rel="noreferrer">
              <code>eslint</code>
            </a>{" "}
            config.
          </p>
          <p>
            - A{" "}
            <a
              href="https://typicode.github.io/husky/"
              target="_blank"
              rel="noreferrer"
            >
              <code>Husky</code>
            </a>{" "}
            pre-commit hook to lint staged files using{" "}
            <a
              href="https://github.com/okonet/lint-staged"
              target="_blank"
              rel="noreferrer"
            >
              <code>Lint-staged</code>
            </a>
            .
          </p>
          <p>
            - The template comes with a{" "}
            <a
              href="https://github.com/sindresorhus/modern-normalize"
              target="_blank"
              rel="noreferrer"
            >
              <code>modern-normalize.css</code>
            </a>{" "}
            and a{" "}
            <a
              href="https://tailwindcss.com/docs/preflight"
              target="_blank"
              rel="noreferrer"
            >
              <code>preflight</code>
            </a>{" "}
            css file that globally sets up a useful starting css environment.
          </p>
        </div>
        <br />
        <p className={styles.instruction}>
          Start building your project by following these steps:
        </p>
        <br />
        <div className={styles.card}>
          <p>
            1. Remove <code>src/demo</code> component from{" "}
            <code>src/App.tsx</code>
          </p>
          <p>
            2. Customize <code>src/styles/global.css</code>
          </p>
          <p>3. Build your project 🚀</p>
        </div>
        <br />
        <br />
        <br />
        <a
          href="https://github.com/AndyLeezard/template-vite-react-ts-swc"
          target="_blank"
          rel="noreferrer"
          className={styles.footer_icon}
        >
          <img
            src={githubLogo}
            alt="Template repository"
            title="Go to the template repository"
          />
          <code>Template repository</code>
          <code>AL 2023</code>
        </a>
      </div>
    </>
  )
}

export default Demo
