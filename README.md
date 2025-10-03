# Kamdata - Sitio Web Oficial

Este es el repositorio del sitio web de Kamdata, una aplicación web moderna construida con React y desplegada en la infraestructura de Google Cloud y Firebase.

**Sitio en Vivo:** [https://www.kamdata.com.mx](https://www.kamdata.com.mx)

[![Cloud Build Status](https://storage.googleapis.com/cloud-build-badges/kamdata-sitioweb/main.svg)](https://console.cloud.google.com/cloud-build/builds;branch="main"?project=kamdata-sitioweb)

---

## 🚀 Arquitectura y Stack Tecnológico

La arquitectura de este proyecto es 100% **sin servidor (serverless)**, diseñada para un alto rendimiento global, escalabilidad automática y un mantenimiento mínimo.

### Tecnologías Principales
* **Frontend**: [React](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
* **Hosting & CDN**: [Firebase Hosting](https://firebase.google.com/products/hosting)
* **CI/CD (Pipeline de Despliegue)**: [Google Cloud Build](https://cloud.google.com/build)
* **DNS**: [Google Cloud DNS](https://cloud.google.com/dns)
* **Gestión de Secretos**: [Google Secret Manager](https://cloud.google.com/secret-manager)
* **Control de Versiones**: [GitHub](https://github.com/)

### Flujo de Despliegue Automatizado (CI/CD)
El proyecto cuenta con un pipeline de Integración y Entrega Continua:
1.  **`git push`**: Un desarrollador sube cambios a la rama `main` en GitHub.
2.  **Activación**: Un activador (Trigger) en Google Cloud Build detecta el cambio.
3.  **Autenticación**: Cloud Build obtiene un token de despliegue de forma segura desde Secret Manager.
4.  **Compilación**: Cloud Build ejecuta los siguientes pasos en un entorno limpio:
    * `npm install`: Instala todas las dependencias.
    * `npm run build`: Crea la versión de producción optimizada de la aplicación de React en una carpeta `/build`.
5.  **Despliegue**: Cloud Build usa `firebase-tools` para desplegar el contenido de la carpeta `/build` en Firebase Hosting.
6.  **En Vivo**: En minutos, los cambios están disponibles globalmente para todos los usuarios a través del CDN de Firebase.

---

## ⚙️ Desarrollo en Local

Para ejecutar el proyecto en tu máquina local, sigue estos pasos.

### Prerrequisitos
* [Node.js](https://nodejs.org/) (versión LTS recomendada)
* [npm](https://www.npmjs.com/) (se instala con Node.js)

### Instalación y Ejecución
1.  **Clona el repositorio**:
    ```bash
    git clone [https://github.com/ArmndCamrg/kamdata-website.git](https://github.com/ArmndCamrg/kamdata-website.git)
    cd kamdata-website
    ```

2.  **Instala las dependencias**:
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**:
    ```bash
    npm start
    ```
    El sitio se abrirá automáticamente en `http://localhost:3000`.

---

##  deployment Despliegue a Producción

El despliegue a producción es **completamente automático**.

Cualquier cambio que se fusione o se suba a la rama **`main`** activará el pipeline de CI/CD y se publicará en `https://www.kamdata.com.mx` en aproximadamente 2-3 minutos.

*Desarrollado con ❤️ por E-vior Developments para Kamdata *
 
</div>