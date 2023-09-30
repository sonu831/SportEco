export const endpoints = {
  // Users
  userCreation: `/api/masteruser/usercreation`,
  validateOtp: `/api/user/verifyotp`,
  updateUserProfile: `/api/user/updateuserprofile`,
  uploadUserProfileImage: `/api/user/userprofilepicupload`,
  fetchUserById: `/api/user/getuserdetailbyid`,
  fetchAllState: `https://countriesnow.space/api/v0.1/countries/states`,
  fetchCityByState: `https://countriesnow.space/api/v0.1/countries/state/cities`,

  // Players
  fetchPlayers: `/api/player/listofplayers`,
  fetchPlayerById: `/api/player/getplayerdetailbyid`,
  addPlayer: `/api/player/addplayerprofile`,
  updatePlayerProfile: `api/player/updateplayerprofile`,
  uploadPlayerProfileImage: `/api/player/playerprofilepicupload`,
  deletePlayer: `api/player/deleteplayerbyid`,
  searchPlayer: `api/player/searchplayers`,

  // Batches
  addBatch: `api/batch/addbatch`,
  fetchBatchById: `api/batch/getbatchdatabyid`,
  deleteBatchById: `api/batch/deletebatchbyid`,
  updateBatchDetails: `api/batch/updatebatchdetails`,
  addPlayerInBatch: `api/batch/addplayerinbatch`,
  deletePlayerFromBatch: `api/batch/removeplayerinbatch`,
  fetchBatchList: `api/batch/listofbatches`,

  // Venues
  listOfVenue: `api/venue/listofvenue`,
  addVenue: `api/venue/addvenuedata`,
  updateVenue: `api/venue/updatevenuedata`,
  deleteVenue: `api/venue/deletevenuebyid`,

  // Programs
  addPrograms: `api/program/addprogram`,
  fetchPrograms: `api/program/listofprograms`,
  deleteProgram: `api/program/deleteprogrambyid`,
  updateProgram: `api/program/updateprogram`,
};
