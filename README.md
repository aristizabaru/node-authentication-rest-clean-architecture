# Node - Autenticación Rest con Clean Architecture

## Acerca de

Este es un repositorio personal para ejecución del proyecto del curso **Node - Autenticación Rest con Clean Architecture** de **Fernando Herrera** en la plataforma Dev/Talles. Para acceder al curso completo puede hacer [clic aquí](https://cursos.devtalles.com/courses/node-clean-architecture)

El proyecto desarrollado a continuación es una implementación básica de autenticación REST usando Express y clean architecture. En el proceso se exploran fundamentos de Arquitectura Limpias, inyección de dependencias entre otros conceptos más de arquitectura de software.

## Requerimientos

- Node 20.9.0 LTS
- Express 4.18.2
- Docker 24.0.5

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```
npm install
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Clonar el archivo `.env.template` a `.env`
2. Configurar variables de entorno

```
# Server port
PORT=3000

# Database
MONGO_URL=
MONGO_DB_NAME=

# JWT
JWT_SEED=semilla-para-firmar-jwt
```

3. Levantar las bases de datos

```
docker compose up -d

```

4. Correr el proyecto usando alguno de los siguientes scripts según el entorno

Ejecutar entorno de desarrollo

```
npm run dev
```

Ejecutar entorno de producción

```
npm start
```
