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
  addPlayerWithPic: `/api/player/addplayerprofilewithpic`,
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
  searchBatch: `/api/batch/searchbatch`,

  // Venues
  listOfVenue: `api/venue/listofvenue`,
  addVenue: `api/venue/addvenuedatawithpic`,
  updateVenue: `api/venue/updatevenuedata`,
  deleteVenue: `api/venue/deletevenuebyid`,

  // Programs
  addPrograms: `api/program/addprogram`,
  fetchPrograms: `api/program/listofprogram`,
  deleteProgram: `api/program/deleteprogrambyid`,
  updateProgram: `api/program/updateprogram`,
  addSessionInProgram: `api/program/addsessioninprogram`,
  getProgromDataById: `/api/program/getprogramdatabyid`,
  removeSessionInProgram: `/api/program/removesessioninprogram`
};
