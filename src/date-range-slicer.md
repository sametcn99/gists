# Date Range Slicer

## Overview

This Redux Toolkit implementation provides a comprehensive state management solution for date range selection in applications. It creates a dedicated slice for handling start and end dates with proper TypeScript typing, ensuring type safety throughout your application. The slice includes actions for setting both start and end dates with null handling for date clearing operations. This utility is particularly valuable for applications that require date filtering, such as analytics dashboards, reporting tools, or booking systems. It follows Redux best practices with immutable state updates and clear action definitions.

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateRangeState {
  startDate: Date | null;
  endDate: Date | null;
}

const dateRangeSlice = createSlice({
  name: "dateRange",
  initialState: {
    startDate: null,
    endDate: null,
  } as DateRangeState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date | null>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | null>) => {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
```

## Redux Store Configuration

```typescript
import { configureStore } from "@reduxjs/toolkit";
import dateRangeReducer from "./dateRangeSlice";

const store = configureStore({
  reducer: {
    dateRange: dateRangeReducer,
  },
});

export default store;
```
