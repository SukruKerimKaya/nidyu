# Nidyu Context Discovery

> STRICT RULE: The architecture is already locked as a Node.js/Expo Modular Monolith. Do NOT ask the user about project scale, team size, timeline, or microservices.

## Nidyu Feature Discovery (Ask User FIRST)

When the user requests a new feature or module for the Nidyu App, limit your clarifying questions to the SPECIFIC business logic of that feature. Ask maximum 3 questions from this list:

1. **Data Entities:** What specific data fields/models are required for this feature? (e.g., "Does the Property Listing model need a strict geolocation field?")
2. **UI/UX States:** What are the exact loading, error, and empty states expected for this Expo screen?
3. **Business Rules:** Are there any specific validation rules, edge cases, or commission-free constraints for this specific transaction?

Do not ask more than 3 questions at once. Present them as bullet points and wait for the user to answer before writing any code or architecture plan.