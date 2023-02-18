export const endpoints = {
  userCreation: `/api/masteruser/usercreation`,
  validateOtp: `/api/user/verifyotp`,
  updateUserProfile: `/api/user/updateuserprofile`,
  fetchUserById: `/api/user/getuserdetailbyid`,
  fetchPlayers: `/api/player/listofplayers`,
  addPlayer: `/api/player/addplayerprofile`,
  fetchPlayerById: (id: string) => `/players/${id}`,
  addBatch: `/batches`,
  fetchBatchById: (id: any) => `/batches/${id}`,
};
