# React useState – State Update & Functional Update Explained

This project is created to clearly explain **why React state does not update immediately** and **what benefits you get by using Functional State Updates**.

It is a **beginner-friendly tutorial and learning-focused demo project**, designed to help developers understand one of the most common React confusions.

---

## 🎯 Learning Objectives

By exploring this project, you will learn:

- Why `useState` does not update state immediately
- Why `console.log(state)` often shows the previous value
- How React schedules state updates and re-renders the UI
- The difference between normal state updates and functional state updates
- When and why functional state updates should be used

---

## 🧠 Core Concept

In React, state updates are **scheduled**, not applied instantly.

When you call a state updater function like `setState` or `setCount`:

- React does not change the state value immediately
- The update is queued and processed during the next render cycle
- The UI is re-rendered with the updated state

Because of this behavior, accessing state immediately after calling a setter returns the **previous render’s snapshot**.

---

## 🧪 Demo Explanation

This project demonstrates the concept using **two counters**:

### 1️⃣ Normal State Update

Normal state update directly uses the current state variable.

- The state value represents the snapshot of the current render
- Multiple updates in the same cycle may cause stale values
- This approach can lead to unexpected results in complex scenarios

---

### 2️⃣ Functional State Update

Functional state update calculates the new state based on the previous state provided by React.

- React always supplies the latest available state
- Prevents stale state issues
- Works reliably with React’s batching behavior
- Ensures predictable and consistent updates

---

## ⚠️ Important Note

Using functional state update does **not** make state updates synchronous.

- State updates still happen after the render cycle
- Logging state inside an event handler will still show the old value
- Functional updates only guarantee **correct value calculation**, not timing

To observe updated state values correctly, use `useEffect`.

---

## ✅ When Should You Use Functional State Update?

You should use functional state updates when:

- The new state depends on the previous state
- Multiple state updates happen in the same function
- You are working with asynchronous logic (timers, promises, API calls)
- You want to avoid bugs caused by React’s batching behavior

🎓 Target Audience

React beginners

JavaScript learners

Developers confused about useState behavior

Anyone preparing for React interviews
