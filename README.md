## How to set up to use animations in Angular4

#### 1. update main packages to the latest

```bash
npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@latest typescript@latest --save
```

#### 2. enable web-animations (temporal measure)

- first, comment out polyfills.ts with web-animation line.

```bash
npm install --save web-animations-js
```


#### 3. install animations


```bash
npm install --save @angular/animations
```

#### 4. import animations at app.module.ts

```javascript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
})
```

#### 4. for css framework(bootstrap)

- first, install bootstrap

```bash
npm install bootstrap --save
```
- and then, load framework in the angular-cli.json

```json
"styles": [
      "../node_modules/bootstrap/dist/css/bootstrap.min.css",
      "styles.css"
    ],
```
