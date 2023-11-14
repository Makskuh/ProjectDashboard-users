import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../api';

const SLICE_NAME = 'projects';

const getUserProjects = createAsyncThunk(
  `${SLICE_NAME}/getAllMessages`,
  async (options, thunkAPI) => {
    try {
      const { data: { data: projects } } = await API.getUserProjects(options);

      return projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const initialState = {
  projects: [],
  isLoading: false,
  error: null
}

const projectSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProjects.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getUserProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    });

    builder.addCase(getUserProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  }
});

const { reducer: projectReducer, actions } = projectSlice;

export { getUserProjects }
export const { addProject } = actions;

export default projectReducer;