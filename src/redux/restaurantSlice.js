import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Api call or asynchronous function call using Thunk
export const fetchRestaurant = createAsyncThunk(
  "restaurantSlice/fetchRestaurant",
  () => {
    const result = axios
      .get("./restaurant.json")
      .then((response) => response.data);
    // console.log("Response from thunk");
    // console.log(result);
    return result;
  }
);

const restarantSlice = createSlice({
  name: "restaurantSlice",
  initialState: {
    loading: false, //pending state means, api call in progress
    allRestaurants: [], //resolve state
    error: "", //rejected state
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurant.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.allRestaurants = action.payload;
        //creating a copy to store all the data. then we are filtering on this data. The original
        // data remains unchanged. so after clearing the search field we can still access all the items initially stored in the state.
        state.searchRestaurants = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchRestaurant.rejected, (state, action) => {
        state.loading = false;
        (state.allRestaurants = []), (state.error = action.error.message);
      });
  },
  reducers: {
    searchRestaurants: (state, action) => {
      state.allRestaurants.restaurants =
        state.searchRestaurants?.restaurants?.filter((item) =>
          item.neighborhood.toLowerCase().includes(action.payload)
        );
    },
  },
});

export default restarantSlice.reducer;
export const { searchRestaurants } = restarantSlice.actions;
