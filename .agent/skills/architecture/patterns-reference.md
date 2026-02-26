# Nidyu Approved Patterns Reference

> STRICT RULE: These are the ONLY architectural patterns approved for the Nidyu App. Do not evaluate, suggest, or implement any other patterns (e.g., No Microservices, No CQRS, No DDD).

## 1. Data Access: Direct ORM
* **Pattern:** Active Record / Direct ORM access using Prisma or Drizzle.
* **Why:** Fastest time-to-market for MVP.
* **Rule:** Do NOT use Repository Pattern or Unit of Work. Call the database directly from your service/logic functions.

## 2. Domain Logic: Transaction Script
* **Pattern:** Simple procedural service functions.
* **Why:** The real estate marketplace logic focuses on straightforward CRUD and simple status updates.
* **Rule:** Keep business logic inside flat service files. Do not build complex Domain Models or Aggregates.

## 3. Distributed System: Modular Monolith
* **Pattern:** Single deployable Node.js backend with logical folder separation (e.g., `/users`, `/listings`).
* **Why:** Perfect for small teams and rapid iteration.
* **Rule:** Do NOT suggest Microservices, Event-Driven (Kafka/RabbitMQ), or Saga patterns.

## 4. API & Communication: Synchronous REST
* **Pattern:** Standard RESTful API (or tRPC).
* **Why:** Native compatibility with Expo/React Native Web clients.
* **Rule:** Do NOT use gRPC or complex GraphQL setups unless specifically commanded for a unique feature.

## 💎 The Nidyu Simplicity Principle
"Start simple. Flat is better than nested. Do not write code for hypothetical future scale; write for today's specific requirements."