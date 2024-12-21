- **`/**/\*.+(ts|tsx)`\*\*:

  - This pattern selects all files with the extensions `.ts` and `.tsx` in the root directory and its subdirectories.
  - Example files: `file1.ts`, `src/app/component.tsx`, `lib/utils/utility.ts`

- **`src/**/\*.ts`\*\*

  - This pattern selects all TypeScript files (`.ts`) within the `src` directory and its subdirectories.
  - **`src/`**: Specifies the `src` directory as the starting point.
  - **`**/`**: Matches any subdirectory within `src`.
  - **`*.ts`**: Matches any file with a `.ts` extension.

- **`[0-9][0-9][0-9].doc`:**

  - This pattern selects files in a directory that start with a three-digit number followed by the `.doc` extension.
  - Example files: `123.doc`, `007.doc`

- **`[aeiou]_file.*`:**

  - This pattern selects any file in which the name starts with a vowel followed by `_file`.
  - Example files: `a_file.txt`, `e_file.jpg`

- **`[^0-9].*`:**

  - This pattern selects files whose names do not start with a numeric digit.
  - Example files: `document.txt`, `image.jpg`

- **`[A-Za-z]*[0-9]{2,}.(jpg|png)`:**

  - This pattern selects files that start with an alphabetical character, followed by at least two numeric digits, and end with either `.jpg` or `.png`.
  - Example files: `image123.jpg`, `Picture2022.png`

- **`**/\*.log`:\*\*

  - This pattern selects all files with the `.log` extension in all subdirectories.
  - Example files: `logs/error.log`, `logs/access.log`

- **`src/**/\*.ts`:\*\*

  - This pattern selects all TypeScript files (`*.ts`) in the `src` directory and its subdirectories.
  - Example files: `src/app/main.ts`, `src/utils/helper.ts`

- **`documents/**/\*.{pdf,docx}`:\*\*

  - This pattern selects all PDF and Word document files (`*.pdf` and `*.docx`) within the `documents` directory and its subdirectories.
  - Example files: `documents/report.pdf`, `documents/notes/document.docx`

- **`client/{js,css}/**/_.min._`:\*\*

  - This pattern selects all minified files (e.g., `.min.js` or `.min.css`) in the `client/js` and `client/css` directories and their subdirectories.
  - Example files: `client/js/vendor/jquery.min.js`, `client/css/styles.min.css`

- **`**/backup/\*.{zip,tar.gz}`:\*\*

  - This pattern selects all compressed backup files (`*.zip` or `*.tar.gz`) in any `backup` subdirectory throughout the project.
  - Example files: `project1/backup/backup1.zip`, `project2/subfolder/backup/backup2.tar.gz`

- **`src/**/test/**/_.spec._`:**

  - This pattern selects all test files (e.g., `.spec.js`, `.spec.ts`) within any `test` subdirectory nested under `src`.
  - Example files: `src/modules/user/test/user.spec.js`, `src/components/test/button.spec.ts`

- **`project/**/src/**/module/**/\*.js`:\*\*

  - This pattern selects all JavaScript files (`*.js`) within any `module` directory nested under any `src` directory within the `project` directory and its subdirectories.
  - Example files: `project/app/src/module/user/user.js`, `project/modules/src/module/auth/auth.js`

- **`{client,server}/**/{src,lib}/**/\*.java`:**

  - This pattern selects all Java files (`*.java`) within either the `src` or `lib` directory, nested under both `client` and `server` directories and their subdirectories.
  - Example files: `client/src/com/example/Main.java`, `server/lib/util/Utils.java`

- **`**/{config,settings}/**/_._`:**

  - This pattern selects any file with any extension in either the `config` or `settings` directory, regardless of its location within the project.
  - Example files: `src/config/app_config.json`, `docs/settings/config.txt`

- **`modules/**/{src,test}/**/\*.{js,ts}`:**

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within either the `src` or `test` directory, nested under the `modules` directory and its subdirectories.
  - Example files: `modules/user/src/user.js`, `modules/auth/test/auth.spec.ts`

- **`**/assets/{images,icons}/\*.{jpg,png,gif}`:\*\*

  - This pattern selects all image files with the extensions `.jpg`, `.png`, or `.gif` in the `images` or `icons` subdirectories within any `assets` directory throughout the project.
  - Example files: `project/assets/images/photo.jpg`, `client/assets/icons/icon.png`

- **`**/{dev,test,prod}/**/_.config._`:**

  - This pattern selects all configuration files (e.g., `.config.xml`, `.config.json`) within any `dev`, `test`, or `prod` directory throughout the project.
  - Example files: `src/dev/config/app.config.json`, `test/test_suite.config.xml`

- **`src/{main,test}/**/com/example/**/\*.java`:**

  - This pattern selects all Java files (`*.java`) within the `com/example` package, found in either the `main` or `test` directory under the `src` directory.
  - Example files: `src/main/com/example/Main.java`, `src/test/com/example/UtilsTest.java`

- **`**/{src,lib}/**/\*.+(js|ts)`:**

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within either the `src` or `lib` directory, regardless of their location in the project.
  - Example files: `src/app/main.js`, `lib/utils/util.ts`

- **`**/{assets,resources}/**/\*.{jpg,png,svg}`:**

  - This pattern selects all image files with the extensions `.jpg`, `.png`, or `.svg` in either the `assets` or `resources` directory, throughout the project.
  - Example files: `assets/images/photo.jpg`, `resources/icons/logo.png`

- **`**/{src,tests}/**/\*.{js,ts}~`:**

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within either the `src` or `tests` directory and their subdirectories, excluding files ending with a tilde (`~`).
  - Example files: `src/app/main.js`, `tests/utils/test-file.ts`, `src/utils/excluded-file~.js`

- **`modules/**/{src,test}/**/\*.{js,ts}?(x)`:**

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) and optional JSX files (`*.jsx` or `*.tsx`) within either the `src` or `test` directory, nested under the `modules` directory.
  - Example files: `modules/user/src/user.js`, `modules/auth/test/auth.spec.tsx`

- **`**/{src,tests}/**/\*.{js,ts}!(spec).{md,txt}`:**

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) excluding those ending with "spec", along with Markdown (`*.md`) or text (`*.txt`) files within either the `src` or `tests` directory and their subdirectories.
  - Example files: `src/app/main.js`, `tests/utils/test-file.ts`, `src/utils/readme.md`

- **`{client,server}/**/dist/**/\*.min.{js,css}`:**

  - This pattern selects all minified JavaScript (`*.min.js`) or CSS (`*.min.css`) files within the `dist` directory, nested under both `client` and `server` directories and their subdirectories.
  - Example files: `client/dist/app.min.js`, `server/dist/styles/main.min.css`

- **`**/src/**/!(test)/**/\*.+(java|scala)`:\*\*

  - This pattern selects all Java (`*.java`) or Scala (`*.scala`) files within any `src` directory except those in the `test` subdirectory.
  - Example files: `project1/src/main/com/example/Main.java`, `project2/src/modules/core/Utility.scala`

- **`**/{src,tests}/**/\*.{js,ts,jsx,tsx}?(x)!(spec)`**:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`), including optional JSX or TSX files (`*.jsx` or `*.tsx`), excluding files ending with "spec", within either the `src` or `tests` directory and their subdirectories.
  - Example files: `src/app/main.js`, `tests/utils/test-file.tsx`, `src/components/button.jsx`

- **`**/modules/**/{src,test}/**/_.{js,ts}?(x)!(_.spec)?.{md,txt}`\*\*:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) and optional JSX or TSX files (`*.jsx` or `*.tsx`) within either the `src` or `test` directory, excluding files ending with "spec", and also includes Markdown (`*.md`) or text (`*.txt`) files within the `modules` directory and its subdirectories.
  - Example files: `modules/user/src/user.js`, `modules/auth/test/auth.test.tsx`, `modules/docs/readme.md`

- **`**/assets/**/\*.{jpg,png,svg}!(backup)**`\*\*:

  - This pattern selects all image files with the extensions `.jpg`, `.png`, or `.svg` within the `assets` directory and its subdirectories, excluding those in a subdirectory named `backup`.
  - Example files: `assets/images/photo.jpg`, `assets/icons/logo.png`, `assets/backup/old.png` (excluded)

- **`**/logs/**/*.{log,!(*error\*)}`**:

  - This pattern selects all log files within the `logs` directory and its subdirectories, excluding files containing "error" in their names.
  - Example files: `logs/access.log`, `logs/debug.log`, `logs/error-handling.log` (excluded)

- **`client/**/!(dist)/**/\*.min.{js,css}!(backup)**`\*\*:

  - This pattern selects all minified JavaScript (`*.min.js`) or CSS (`*.min.css`) files within any directory under `client` except those in a subdirectory named `dist`, and excludes files in a subdirectory named `backup`.
  - Example files: `client/js/vendor/jquery.min.js`, `client/css/styles.min.css`, `client/dist/app.min.js` (excluded), `client/backup/styles.min.css` (excluded)

- **`**/docs/**/\*.{pdf,docx}!(backup)**`\*\*:

  - This pattern selects all PDF and Word document files (`*.pdf` and `*.docx`) within the `docs` directory and its subdirectories, excluding those in a subdirectory named `backup`.
  - Example files: `docs/report.pdf`, `docs/manual.docx`, `docs/backup/document.docx` (excluded)

- **`**/src/**/\*.{js,ts}!(test)**`\*\*:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within the `src` directory and its subdirectories, excluding those in a subdirectory named `test`.
  - Example files: `src/app/main.js`, `src/utils/util.ts`, `src/test/test-file.js` (excluded)

- **`project/**/!(src)/**/\*.java`**:

  - This pattern selects all Java files (`*.java`) within any directory under the `project` directory, excluding those in a subdirectory named `src`.
  - Example files: `project/modules/core/Utility.java`, `project/config/Main.java`, `project/src/Main.java` (excluded)

- **`**/{assets,images}/**/\*.{jpg,png,gif}!(backup)**`\*\*:

  - This pattern selects all image files with the extensions `.jpg`, `.png`, or `.gif` within the `assets` or `images` directory and its subdirectories, excluding those in a subdirectory named `backup`.
  - Example files: `assets/photo.jpg`, `images/logo.png`, `assets/backup/picture.gif` (excluded)

- **`**/config/**/\*.{json,yml}!(test)**`\*\*:

  - This pattern selects all JSON or YAML configuration files (`*.json` or `*.yml`) within the `config` directory and its subdirectories, excluding those in a subdirectory named `test`.
  - Example files: `config/app-config.json`, `config/database.yml`, `config/test/test-config.json` (excluded)

- **`**/test/**/\*.{js,ts}!(spec)**`\*\*:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within the `test` directory and its subdirectories, excluding those ending with "spec".
  - Example files: `test/utils/test-file.js`, `test/components/test-case.ts`, `test/specs/excluded-spec.js` (excluded)

- **`modules/**/{src,test}/**/\*.{js,ts}?(x)!(spec).{md,txt}!(backup)**`\*\*:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) and optional JSX or TSX files (`*.jsx` or `*.tsx`) within either the `src` or `test` directory, excluding files ending with "spec" and those in a subdirectory named `backup`. It also includes Markdown (`*.md`) or text (`*.txt`) files within the `modules` directory and its subdirectories.
  - Example files: `modules/user/src/user.js`, `modules/auth/test/auth.test.tsx`, `modules/docs/readme.md`, `modules/docs/backup/config.txt` (excluded)

- **`**/{src,lib}/**/\*.{js,ts}!(backup|archive)**`\*\*:

  - This pattern selects all JavaScript or TypeScript files (`*.js` or `*.ts`) within either the `src` or `lib` directory, excluding those in subdirectories named `backup` or `archive`.
  - Example files: `src/app/main.js`, `lib/utils/util.ts`, `src/backup/archive/script.js` (excluded)

- **`client/**/{css,styles}/**/!(\*.min).{css,scss}`**:

  - This pattern selects all CSS or SCSS files (`*.css` or `*.scss`) within the `css` or `styles` subdirectories under the `client` directory and its subdirectories, excluding those ending with ".min".
  - Example files: `client/css/main.css`, `client/styles/theme.scss`, `client/css/minified/min.style.css` (excluded)

- **`**/reports/**/\*.{html,xml}!(backup)**`\*\*:
  - This pattern selects all HTML or XML files (`*.html` or `*.xml`) within the `reports` directory and its subdirectories, excluding those in a subdirectory named `backup`.
  - Example files: `reports/report1.html`, `reports/xml/output.xml`, `reports/backup/backup-report.html` (excluded)
