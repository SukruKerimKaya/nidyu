# Nidyu Pattern Selection Guidelines

> STRICT ARCHITECTURAL RULES FOR NIDYU APP. Do NOT debate or evaluate alternatives unless the user explicitly requests them.

## 🏛️ The Nidyu Default Architecture (MANDATORY)

For every new feature, API, or module in Nidyu, you MUST default to the following patterns. **Simplicity is better and faster.**

1. **Architecture Style:** `Modular Monolith`. 
   * 🚫 **BANNED:** Microservices, Event Sourcing, CQRS. Do not suggest or implement these.
2. **Data Access:** `Direct ORM (Prisma/Drizzle)`. 
   * 🚫 **BANNED:** Repository Pattern, Unit of Work. Do not create unnecessary abstraction layers for simple CRUD operations.
3. **Business Logic:** `Transaction Script` or simple services.
   * 🚫 **BANNED:** Full Domain-Driven Design (DDD), Aggregates, strict Hexagonal Architecture.
4. **Communication:** `Synchronous (REST/tRPC/GraphQL)`.
   * 🚫 **BANNED:** Message Queues (RabbitMQ, Kafka) unless specifically asked for a real-time feature.

## 🚩 The 3 Iron Rules of Nidyu
1. **Concrete First:** Write concrete code first. Introduce Interfaces/Abstract classes ONLY if there are multiple implementations right now.
2. **YAGNI (You Aren't Gonna Need It):** Do not write code for "future scale". Write code for the exact requirements given today.
3. **Flat over Nested:** Keep folder structures and architectural layers as flat as possible. (e.g., Route -> Service -> DB is enough).