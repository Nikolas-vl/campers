export const selectCampers = state => state.campers.items; // ← масив
export const selectTotal = state => state.campers.total; // ← число
export const selectIsLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectSelectedCamper = state => state.campers.selectedCamper;
