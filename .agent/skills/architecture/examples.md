# Nidyu Architecture Reference

> This is the ONLY reference architecture allowed for the Nidyu App. Do not refer to external Enterprise or SaaS patterns.

## The Nidyu Real Estate Marketplace MVP

```yaml
Project Requirements:
  - Domain: Real Estate Marketplace (Commissionless)
  - Environment: Agile, Fast-to-market
  - Primary Focus: UI/UX Performance and Cross-platform compatibility

Architecture Decisions (STRICT):
  App Structure: Modular Monolith
  Frontend Framework: Expo (React Native & Web)
  UI System: Custom Nidyu Design System (Google Sans Flex ONLY)
  Backend Runtime: Node.js (TypeScript)
  Data Layer: Direct ORM access (Prisma or Drizzle)
  Communication: Synchronous REST / tRPC
  Authentication: JWT / Simple Session (No complex enterprise SSO initially)

Trade-offs Accepted & Enforced:
  - Monolith → We choose development speed over independent scaling.
  - Direct ORM → We choose simplicity over the Repository Pattern abstraction.
  - Synchronous APIs → We choose simplicity over Message Queues (No Kafka/RabbitMQ).

Future Migration Path (Do NOT implement these yet):
  - Microservices: Only if team size exceeds 10 and modules require independent scaling.
  - Message Brokers: Only if explicit real-time bidding/chat features require it.