# TypeScript Architecture & Design Patterns Lab

This repository is a **backend-focused TypeScript project** created to showcase
**software architecture principles, classical design patterns, and system design thinking**
in a real-world, production-style structure.

The goal of this project is **not to build a product**, but to demonstrate how
large-scale systems are **designed, structured, and extended** using clean abstractions
and well-known patterns.

---

## 🎯 Purpose of This Project

This project serves two primary purposes:

1. **Design Pattern Showcase**  
   Demonstrates how common design patterns (Factory, Strategy, Observer, State, etc.)
   are applied in a realistic backend system rather than isolated examples.

2. **Language Transition & Engineering Depth**  
   Uses **TypeScript** to showcase language adaptability and strong engineering practices
   on top of the JavaScript runtime, without involving frontend or UI development.

---

## 🧠 Design Philosophy

- Backend-only (no frontend, no UI frameworks)
- Strong emphasis on **clean architecture**
- Clear separation of concerns
- Explicit contracts via TypeScript interfaces
- Config-driven and extensible system design
- Patterns used only where they make sense (no pattern-for-the-sake-of-patterns)

---

## 🏗️ Architectural Style

The project loosely follows principles from:

- Clean Architecture
- Hexagonal / Ports & Adapters Architecture
- Dependency Inversion
- SOLID principles

The codebase is structured to resemble how **internal platform or orchestration systems**
are built in large engineering organizations.

---

## 🗂️ High-Level Folder Structure

```text
src/
├── core/            # Domain logic and core abstractions
├── infrastructure/  # External concerns (config, logging, telemetry)
├── patterns/        # Explicit design pattern implementations
├── shared/          # Shared types, utilities, and helpers
└── index.ts         # Application entry point
```
Each folder represents a distinct responsibility boundary.

---

## 🛠️ Tech Stack

- **Language:** TypeScript  
- **Runtime:** Node.js  
- **Compilation:** TypeScript Compiler (`tsc`)  
- **Execution:** JavaScript on Node runtime  
- **Paradigm:** Object-oriented + interface-driven design  
- **Focus:** Backend architecture and design patterns  

No frontend frameworks, databases, or UI libraries are used in this project.
The emphasis is strictly on **system design, abstractions, and extensibility**.

---

## 📌 What This Project Is NOT

- ❌ Not a frontend or full-stack application  
- ❌ Not a framework tutorial  
- ❌ Not a CRUD demo  
- ❌ Not focused on UI or client-side development  

This repository is intentionally **architecture-first and backend-only**.

---

## 📈 Intended Audience

- Backend / Platform engineers  
- Engineers preparing for system design interviews  
- Developers transitioning to TypeScript for large-scale systems  
- Engineers interested in applying design patterns in real-world codebases  

---

## 🚀 How to Run

```bash
npm install
npm run dev
```
## 📄 License
```
MIT
```

---
