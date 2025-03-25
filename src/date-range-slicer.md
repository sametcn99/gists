# Date Range Slice

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
