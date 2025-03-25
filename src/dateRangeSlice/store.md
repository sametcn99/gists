# Redux Store Configuration

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