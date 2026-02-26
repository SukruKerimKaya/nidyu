# Nidyu Mobile Design & Performance System (Expo Native)

> **CORE PRINCIPLE:** Nidyu is an Expo (React Native) app. Mobile is NOT a small desktop. Design for one-handed use, imprecise fingers, and low-battery conditions.

## 1. The Nidyu Touch Protocol (MANDATORY)
* **Minimum Touch Target:** All `<Pressable>` or `TouchableOpacity` elements MUST be at least **44x44px** (iOS) / **48x48px** (Android).
* **Thumb Zone:** Place primary CTAs (Contact, Search) in the bottom 30% of the screen. Keep destructive actions (Delete, Cancel) away from the natural thumb arc.
* **Feedback:** Every interaction must provide visual (Opacity/Scale) or Haptic (if configured) feedback within 100ms.

## ⚡ 2. React Native Performance Iron Rules
To maintain 60fps in the Nidyu App, you MUST follow these patterns:
* **BANNED:** Never use `ScrollView` for long lists. Use `FlatList` or `FlashList` ONLY.
* **Lists:** Use `React.memo` for list items and `useCallback` for `renderItem` to prevent massive re-renders.
* **Animations:** Only animate `transform` and `opacity`. Use `useNativeDriver: true` (or `Reanimated`) ALWAYS.
* **Images:** Use `<Image>` from `expo-image` for high-performance caching and smooth loading.

## 🛡️ 3. Security & Data Principles
* **Secrets:** Never store tokens or PII in `AsyncStorage`. Use `expo-secure-store` ONLY.
* **Offline:** Design screens to work with cached data. Always show a clear "No Connection" state with a retry option.

## 📱 Platform Divergence
Nidyu aims for a unified brand look, but you must respect:
* **iOS:** Support edge-swipe for back navigation. Use SF Symbols for system icons.
* **Android:** Respect the hardware back button. Use Material Symbols for system icons.
* **Fonts:** Strictly use **Google Sans Flex** across both platforms.

## 🛑 SOCRATIC GATE (MOBILE)
Ask the user maximum 2 questions before coding:
1. "Does this screen need to support horizontal/tablet orientation or is it Portrait-only?"
2. "Should this action trigger a haptic feedback (vibration) for the user?"
