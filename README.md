# Unexpected useEffect Executions in React

This repository demonstrates a common issue in React applications where the `useEffect` hook runs more frequently than expected, even when a dependency array is provided.  The problem stems from misunderstanding how React handles updates and the intricacies of the dependency array.

## Problem

The initial `useEffect` hook (with empty dependency array `[]`) is designed to run only once after the initial render.  However, due to [state updates] or other factors, this hook might unexpectedly run again.  The second `useEffect` hook, which is intended to run whenever the `count` state changes, correctly reflects this behavior.  The goal is to identify and correct the unexpected execution of the first `useEffect`.

## Solution

The solution involves ensuring all dependencies are correctly included in the dependency array and understanding the lifecycle of functional components in React.